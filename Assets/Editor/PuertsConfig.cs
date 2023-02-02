using System;
using System.Collections;
using System.Collections.Generic;
using System.Reflection;
using Puerts;
using Puerts.Editor.Generator;
using UnityEngine;
using Object = UnityEngine.Object;

[Configure]
public class PuertsConfig 
{
    [Binding]
    static IEnumerable<Type> Bindings
    {
        get
        {
            return new List<Type>()
            {
                typeof(Sprite),
                typeof(GameObject),
                typeof(Object),
                typeof(SpriteRenderer),
            };
        }
    }

    [Filter]
    static bool FilterMethods(MemberInfo info)
    {
        if (info.DeclaringType == typeof(Sprite) && (info.Name != "bounds" && info.Name != "texture" && info.Name != "Destroy"))
        {
            return true;
        }


        return false;
    }
}
