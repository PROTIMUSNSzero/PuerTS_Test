using System;
using System.Collections;
using System.Collections.Generic;
using Puerts;
using UnityEngine;

public class Entry : MonoBehaviour
{
    public Action<float> updateCb;
    private JsEnv _jsEnv;

    void Start()
    {
        _jsEnv = new JsEnv(new JsLoader(), 9236);
        _jsEnv.Eval(@"require('kunpo.js');");
        _jsEnv.UsingAction<MonoBehaviour>();
        _jsEnv.UsingAction<float>();
        var main = _jsEnv.ExecuteFile<Action<MonoBehaviour>>("main.js");
        main(this);
    }

    void Update()
    {
        _jsEnv.Tick();
        if (updateCb != null)
        {
            updateCb.Invoke(Time.deltaTime);
        }
    }

    private void OnDestroy()
    {
        _jsEnv.Dispose();
        updateCb = null;
    }
}


