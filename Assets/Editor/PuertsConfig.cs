using System;
using System.Collections;
using System.Collections.Generic;
using System.Reflection;
using Puerts;
using UnityEngine;

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
                typeof(Vector2),
                typeof(Vector3),
                typeof(Sprite),
            };
        }
    }

    [Filter]
    static bool FilterMethods(MemberInfo info)
    {
        if (info.DeclaringType == typeof(Vector3) && info.Name != "Magnitude")
        {
            return true;
        }

        return false;
    }
}
