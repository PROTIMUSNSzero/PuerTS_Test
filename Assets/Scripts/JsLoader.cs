using System.IO;
using Puerts;
using Unity.VisualScripting;
using UnityEngine;

public class JsLoader : ILoader
{
    private string dataPath = Application.dataPath;

    private string[] searchPaths =
    {
        "/../ts/dist/", "/../ts/dist/libs/"
    };

    private bool searchFile(string filePath, out string outPath)
    {
        outPath = "";
        foreach (var searchPath in searchPaths)
        {
            var curPath = dataPath + searchPath + filePath;
            if (File.Exists(curPath))
            {
                outPath = curPath;
                return true;
            }
        }
        var resPath = 
            filePath.EndsWith(".js") ? filePath.Substring(0, filePath.Length - 3) : filePath.EndsWith(".cjs") || filePath.EndsWith(".mjs")  ? 
                filePath.Substring(0, filePath.Length - 4) : 
                filePath;
        return UnityEngine.Resources.Load(resPath) != null;
        return false;
    }

    public bool FileExists(string filepath)
    {
        string outPath = "";
        return searchFile(filepath, out outPath);
    }
    
    public string ReadFile(string filepath, out string debugpath)
    {
        var resPath = 
            filepath.EndsWith(".js") ? filepath.Substring(0, filepath.Length - 3) : filepath.EndsWith(".cjs") || filepath.EndsWith(".mjs")  ? 
                filepath.Substring(0, filepath.Length - 4) : 
                filepath;
        if (UnityEngine.Resources.Load(resPath) != null)
        {
            debugpath = resPath;
            return ((UnityEngine.TextAsset)UnityEngine.Resources.Load(resPath)).text;
        }
        if (!searchFile(filepath, out debugpath))
        {
            return "";
        }

        return File.ReadAllText(debugpath);
    }

    public bool IsESM(string filepath)
    {
        return filepath.EndsWith(".js") || filepath.EndsWith(".mjs");
    }
}