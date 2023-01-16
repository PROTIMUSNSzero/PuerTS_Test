using System;
using Puerts;
using UnityEngine;

public class Test1 : MonoBehaviour
{
    // 不能用private
    public Action jsStart;
    public Action jsUpdate;
    public Action jsDestroy;
    private JsEnv jsEnv;
    
    private void Awake()
    {
        if (jsEnv == null)
        {
            jsEnv = new JsEnv(new DefaultLoader(), 9236);
        }

        jsEnv.UsingAction<Test1>();
        var eval = jsEnv.Eval<Action<Test1>>(@"
            class Test1 {
                constructor(bindTo) {
                    console.log('construct ', bindTo.name);
                    bindTo.jsStart = () => this.OnStart();
                    bindTo.jsDestroy = () => this.OnDestroy();
                    bindTo.jsUpdate = () => this.OnUpdate();
                }

                OnStart() {
                    console.log('on start');
                }

                OnUpdate() {
                    console.log('on update');
                }

                OnDestroy() {
                    console.log('on destroy');
                }
            }

            // bindTo参数为MonoBehaviour实例
            // 立即执行函数
            (function (bindTo) {
                let test1 = new Test1(bindTo);
            })
        ");
        eval(this);
    }

    void Start()
    {
        if (jsStart != null)
        {
            jsStart();
        }
    }

    void Update()
    {
        jsEnv.Tick();
        if (jsUpdate != null)
        {
            jsUpdate();
        }
    }

    private void OnDestroy()
    {
        if (jsDestroy != null)
        {
            jsDestroy();
        }

        jsStart = null;
        jsUpdate = null;
        jsDestroy = null;
    }
}
