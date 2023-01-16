using System;
using System.Collections;
using System.Collections.Generic;
using Puerts;
using UnityEngine;

class CallbackTest
{
    public delegate void Callback1(string str);

    private Callback1 callback;

    public void AddEventCallback(Callback1 cb)
    {
        this.callback += cb;
    }

    public void Trigger()
    {
        if (callback != null)
        {
            callback.Invoke("test callback");
        }
    }
}

public class Test : MonoBehaviour
{
    void Start()
    {
        Puerts.JsEnv env = new Puerts.JsEnv();
        env.Eval(@"
            console.log('hello world');
            const vector2 = CS.UnityEngine.Vector2;
            console.log(vector2.one);

            CS.UnityEngine.Debug.Log('');
        ");
        
        // callback
        env.Eval(@"
            let cbTest = new CS.CallbackTest();
            cbTest.AddEventCallback(str => console.log(str));
            cbTest.Trigger();
        ");

        env.UsingAction<int>();
        Action<int> action = env.Eval<Action<int>>(@"
            let func = function(a) {
                console.log('action callback ', a);
            };
            func;
        ");
        action(1001);
        
        env.UsingFunc<int, int>();
        Func<int, int> func = env.Eval<Func<int, int>>(@"
            let func1 = function(a) {
                console.log('func callback ', a);
                return 2 * a;
            };
            func1;
        ");
        Debug.Log("func return " + func(1002));

    }

    void Update()
    {
        
    }
}
