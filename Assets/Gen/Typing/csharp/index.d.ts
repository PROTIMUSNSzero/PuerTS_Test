
    declare namespace CS {
    //keep type incompatibility / 此属性保持类型不兼容
    const __keep_incompatibility: unique symbol;
    interface $Ref<T> {
        value: T
    }
    namespace System {
        interface Array$1<T> extends System.Array {
            get_Item(index: number):T;
            set_Item(index: number, value: T):void;
        }
    }
    interface $Task<T> {}
    namespace System {
        class Object
        {
            protected [__keep_incompatibility]: never;
        }
        class ValueType extends System.Object
        {
            protected [__keep_incompatibility]: never;
        }
        interface IFormattable
        {
        }
        interface IEquatable$1<T>
        {
        }
        class Single extends System.ValueType implements System.IFormattable, System.ISpanFormattable, System.IComparable, System.IComparable$1<number>, System.IConvertible, System.IEquatable$1<number>
        {
            protected [__keep_incompatibility]: never;
        }
        interface ISpanFormattable
        {
        }
        interface IComparable
        {
        }
        interface IComparable$1<T>
        {
        }
        interface IConvertible
        {
        }
        class Int32 extends System.ValueType implements System.IFormattable, System.ISpanFormattable, System.IComparable, System.IComparable$1<number>, System.IConvertible, System.IEquatable$1<number>
        {
            protected [__keep_incompatibility]: never;
        }
        class Void extends System.ValueType
        {
            protected [__keep_incompatibility]: never;
        }
        class String extends System.Object implements System.ICloneable, System.IComparable, System.IComparable$1<string>, System.IConvertible, System.Collections.Generic.IEnumerable$1<number>, System.Collections.IEnumerable, System.IEquatable$1<string>
        {
            protected [__keep_incompatibility]: never;
        }
        interface ICloneable
        {
        }
        class Char extends System.ValueType implements System.IComparable, System.IComparable$1<number>, System.IConvertible, System.IEquatable$1<number>
        {
            protected [__keep_incompatibility]: never;
        }
        interface IFormatProvider
        {
        }
        class Boolean extends System.ValueType implements System.IComparable, System.IComparable$1<boolean>, System.IConvertible, System.IEquatable$1<boolean>
        {
            protected [__keep_incompatibility]: never;
        }
        class Enum extends System.ValueType implements System.IFormattable, System.IComparable, System.IConvertible
        {
            protected [__keep_incompatibility]: never;
        }
        class Array extends System.Object implements System.Collections.IStructuralComparable, System.Collections.IStructuralEquatable, System.ICloneable, System.Collections.ICollection, System.Collections.IEnumerable, System.Collections.IList
        {
            protected [__keep_incompatibility]: never;
        }
        class UInt16 extends System.ValueType implements System.IFormattable, System.ISpanFormattable, System.IComparable, System.IComparable$1<number>, System.IConvertible, System.IEquatable$1<number>
        {
            protected [__keep_incompatibility]: never;
        }
        class UInt32 extends System.ValueType implements System.IFormattable, System.ISpanFormattable, System.IComparable, System.IComparable$1<number>, System.IConvertible, System.IEquatable$1<number>
        {
            protected [__keep_incompatibility]: never;
        }
    }
    namespace UnityEngine {
        /** Representation of 2D vectors and points.
        */
        class Vector2 extends System.ValueType implements System.IFormattable, System.IEquatable$1<UnityEngine.Vector2>
        {
            protected [__keep_incompatibility]: never;
            /** X component of the vector.
            */
            public x : number
            /** Y component of the vector.
            */
            public y : number
            public static kEpsilon : number
            public static kEpsilonNormalSqrt : number
            /** Returns this vector with a magnitude of 1 (Read Only).
            */
            public get normalized(): UnityEngine.Vector2;
            /** Returns the length of this vector (Read Only).
            */
            public get magnitude(): number;
            /** Returns the squared length of this vector (Read Only).
            */
            public get sqrMagnitude(): number;
            /** Shorthand for writing Vector2(0, 0).
            */
            public static get zero(): UnityEngine.Vector2;
            /** Shorthand for writing Vector2(1, 1).
            */
            public static get one(): UnityEngine.Vector2;
            /** Shorthand for writing Vector2(0, 1).
            */
            public static get up(): UnityEngine.Vector2;
            /** Shorthand for writing Vector2(0, -1).
            */
            public static get down(): UnityEngine.Vector2;
            /** Shorthand for writing Vector2(-1, 0).
            */
            public static get left(): UnityEngine.Vector2;
            /** Shorthand for writing Vector2(1, 0).
            */
            public static get right(): UnityEngine.Vector2;
            /** Shorthand for writing Vector2(float.PositiveInfinity, float.PositiveInfinity).
            */
            public static get positiveInfinity(): UnityEngine.Vector2;
            /** Shorthand for writing Vector2(float.NegativeInfinity, float.NegativeInfinity).
            */
            public static get negativeInfinity(): UnityEngine.Vector2;
            public get_Item ($index: number) : number
            public set_Item ($index: number, $value: number) : void
            /** Set x and y components of an existing Vector2.
            */
            public Set ($newX: number, $newY: number) : void
            /** Linearly interpolates between vectors a and b by t.
            */
            public static Lerp ($a: UnityEngine.Vector2, $b: UnityEngine.Vector2, $t: number) : UnityEngine.Vector2
            /** Linearly interpolates between vectors a and b by t.
            */
            public static LerpUnclamped ($a: UnityEngine.Vector2, $b: UnityEngine.Vector2, $t: number) : UnityEngine.Vector2
            /** Moves a point current towards target.
            */
            public static MoveTowards ($current: UnityEngine.Vector2, $target: UnityEngine.Vector2, $maxDistanceDelta: number) : UnityEngine.Vector2
            /** Multiplies two vectors component-wise.
            */
            public static Scale ($a: UnityEngine.Vector2, $b: UnityEngine.Vector2) : UnityEngine.Vector2
            /** Multiplies every component of this vector by the same component of scale.
            */
            public Scale ($scale: UnityEngine.Vector2) : void
            public Normalize () : void
            public ToString () : string
            /** Returns a formatted string for this vector.
            * @param format A numeric format string.
            * @param formatProvider An object that specifies culture-specific formatting.
            */
            public ToString ($format: string) : string
            /** Returns a formatted string for this vector.
            * @param format A numeric format string.
            * @param formatProvider An object that specifies culture-specific formatting.
            */
            public ToString ($format: string, $formatProvider: System.IFormatProvider) : string
            /** Returns true if the given vector is exactly equal to this vector.
            */
            public Equals ($other: any) : boolean
            public Equals ($other: UnityEngine.Vector2) : boolean
            /** Reflects a vector off the vector defined by a normal.
            */
            public static Reflect ($inDirection: UnityEngine.Vector2, $inNormal: UnityEngine.Vector2) : UnityEngine.Vector2
            /** Returns the 2D vector perpendicular to this 2D vector. The result is always rotated 90-degrees in a counter-clockwise direction for a 2D coordinate system where the positive Y axis goes up.
            * @param inDirection The input direction.
            * @returns The perpendicular direction. 
            */
            public static Perpendicular ($inDirection: UnityEngine.Vector2) : UnityEngine.Vector2
            /** Dot Product of two vectors.
            */
            public static Dot ($lhs: UnityEngine.Vector2, $rhs: UnityEngine.Vector2) : number
            /** Gets the unsigned angle in degrees between from and to.
            * @param from The vector from which the angular difference is measured.
            * @param to The vector to which the angular difference is measured.
            * @returns The unsigned angle in degrees between the two vectors. 
            */
            public static Angle ($from: UnityEngine.Vector2, $to: UnityEngine.Vector2) : number
            /** Gets the signed angle in degrees between from and to.
            * @param from The vector from which the angular difference is measured.
            * @param to The vector to which the angular difference is measured.
            * @returns The signed angle in degrees between the two vectors. 
            */
            public static SignedAngle ($from: UnityEngine.Vector2, $to: UnityEngine.Vector2) : number
            /** Returns the distance between a and b.
            */
            public static Distance ($a: UnityEngine.Vector2, $b: UnityEngine.Vector2) : number
            /** Returns a copy of vector with its magnitude clamped to maxLength.
            */
            public static ClampMagnitude ($vector: UnityEngine.Vector2, $maxLength: number) : UnityEngine.Vector2
            public static SqrMagnitude ($a: UnityEngine.Vector2) : number
            public SqrMagnitude () : number
            /** Returns a vector that is made from the smallest components of two vectors.
            */
            public static Min ($lhs: UnityEngine.Vector2, $rhs: UnityEngine.Vector2) : UnityEngine.Vector2
            /** Returns a vector that is made from the largest components of two vectors.
            */
            public static Max ($lhs: UnityEngine.Vector2, $rhs: UnityEngine.Vector2) : UnityEngine.Vector2
            /** Gradually changes a vector towards a desired goal over time.
            * @param current The current position.
            * @param target The position we are trying to reach.
            * @param currentVelocity The current velocity, this value is modified by the function every time you call it.
            * @param smoothTime Approximately the time it will take to reach the target. A smaller value will reach the target faster.
            * @param maxSpeed Optionally allows you to clamp the maximum speed.
            * @param deltaTime The time since the last call to this function. By default Time.deltaTime.
            */
            public static SmoothDamp ($current: UnityEngine.Vector2, $target: UnityEngine.Vector2, $currentVelocity: $Ref<UnityEngine.Vector2>, $smoothTime: number, $maxSpeed: number) : UnityEngine.Vector2
            /** Gradually changes a vector towards a desired goal over time.
            * @param current The current position.
            * @param target The position we are trying to reach.
            * @param currentVelocity The current velocity, this value is modified by the function every time you call it.
            * @param smoothTime Approximately the time it will take to reach the target. A smaller value will reach the target faster.
            * @param maxSpeed Optionally allows you to clamp the maximum speed.
            * @param deltaTime The time since the last call to this function. By default Time.deltaTime.
            */
            public static SmoothDamp ($current: UnityEngine.Vector2, $target: UnityEngine.Vector2, $currentVelocity: $Ref<UnityEngine.Vector2>, $smoothTime: number) : UnityEngine.Vector2
            /** Gradually changes a vector towards a desired goal over time.
            * @param current The current position.
            * @param target The position we are trying to reach.
            * @param currentVelocity The current velocity, this value is modified by the function every time you call it.
            * @param smoothTime Approximately the time it will take to reach the target. A smaller value will reach the target faster.
            * @param maxSpeed Optionally allows you to clamp the maximum speed.
            * @param deltaTime The time since the last call to this function. By default Time.deltaTime.
            */
            public static SmoothDamp ($current: UnityEngine.Vector2, $target: UnityEngine.Vector2, $currentVelocity: $Ref<UnityEngine.Vector2>, $smoothTime: number, $maxSpeed: number, $deltaTime: number) : UnityEngine.Vector2
            public static op_Addition ($a: UnityEngine.Vector2, $b: UnityEngine.Vector2) : UnityEngine.Vector2
            public static op_Subtraction ($a: UnityEngine.Vector2, $b: UnityEngine.Vector2) : UnityEngine.Vector2
            public static op_Multiply ($a: UnityEngine.Vector2, $b: UnityEngine.Vector2) : UnityEngine.Vector2
            public static op_Division ($a: UnityEngine.Vector2, $b: UnityEngine.Vector2) : UnityEngine.Vector2
            public static op_UnaryNegation ($a: UnityEngine.Vector2) : UnityEngine.Vector2
            public static op_Multiply ($a: UnityEngine.Vector2, $d: number) : UnityEngine.Vector2
            public static op_Multiply ($d: number, $a: UnityEngine.Vector2) : UnityEngine.Vector2
            public static op_Division ($a: UnityEngine.Vector2, $d: number) : UnityEngine.Vector2
            public static op_Equality ($lhs: UnityEngine.Vector2, $rhs: UnityEngine.Vector2) : boolean
            public static op_Inequality ($lhs: UnityEngine.Vector2, $rhs: UnityEngine.Vector2) : boolean
            public static op_Implicit ($v: UnityEngine.Vector3) : UnityEngine.Vector2
            public static op_Implicit ($v: UnityEngine.Vector2) : UnityEngine.Vector3
            public constructor ($x: number, $y: number)
        }
        /** Representation of 3D vectors and points.
        */
        class Vector3 extends System.ValueType implements System.IFormattable, System.IEquatable$1<UnityEngine.Vector3>
        {
            protected [__keep_incompatibility]: never;
            public static kEpsilon : number
            public static kEpsilonNormalSqrt : number
            /** X component of the vector.
            */
            public x : number
            /** Y component of the vector.
            */
            public y : number
            /** Z component of the vector.
            */
            public z : number
            /** Returns this vector with a magnitude of 1 (Read Only).
            */
            public get normalized(): UnityEngine.Vector3;
            /** Returns the length of this vector (Read Only).
            */
            public get magnitude(): number;
            /** Returns the squared length of this vector (Read Only).
            */
            public get sqrMagnitude(): number;
            /** Shorthand for writing Vector3(0, 0, 0).
            */
            public static get zero(): UnityEngine.Vector3;
            /** Shorthand for writing Vector3(1, 1, 1).
            */
            public static get one(): UnityEngine.Vector3;
            /** Shorthand for writing Vector3(0, 0, 1).
            */
            public static get forward(): UnityEngine.Vector3;
            /** Shorthand for writing Vector3(0, 0, -1).
            */
            public static get back(): UnityEngine.Vector3;
            /** Shorthand for writing Vector3(0, 1, 0).
            */
            public static get up(): UnityEngine.Vector3;
            /** Shorthand for writing Vector3(0, -1, 0).
            */
            public static get down(): UnityEngine.Vector3;
            /** Shorthand for writing Vector3(-1, 0, 0).
            */
            public static get left(): UnityEngine.Vector3;
            /** Shorthand for writing Vector3(1, 0, 0).
            */
            public static get right(): UnityEngine.Vector3;
            /** Shorthand for writing Vector3(float.PositiveInfinity, float.PositiveInfinity, float.PositiveInfinity).
            */
            public static get positiveInfinity(): UnityEngine.Vector3;
            /** Shorthand for writing Vector3(float.NegativeInfinity, float.NegativeInfinity, float.NegativeInfinity).
            */
            public static get negativeInfinity(): UnityEngine.Vector3;
            /** Spherically interpolates between two vectors.
            */
            public static Slerp ($a: UnityEngine.Vector3, $b: UnityEngine.Vector3, $t: number) : UnityEngine.Vector3
            /** Spherically interpolates between two vectors.
            */
            public static SlerpUnclamped ($a: UnityEngine.Vector3, $b: UnityEngine.Vector3, $t: number) : UnityEngine.Vector3
            /** Makes vectors normalized and orthogonal to each other.
            */
            public static OrthoNormalize ($normal: $Ref<UnityEngine.Vector3>, $tangent: $Ref<UnityEngine.Vector3>) : void
            /** Makes vectors normalized and orthogonal to each other.
            */
            public static OrthoNormalize ($normal: $Ref<UnityEngine.Vector3>, $tangent: $Ref<UnityEngine.Vector3>, $binormal: $Ref<UnityEngine.Vector3>) : void
            /** Rotates a vector current towards target.
            * @param current The vector being managed.
            * @param target The vector.
            * @param maxRadiansDelta The maximum angle in radians allowed for this rotation.
            * @param maxMagnitudeDelta The maximum allowed change in vector magnitude for this rotation.
            * @returns The location that RotateTowards generates. 
            */
            public static RotateTowards ($current: UnityEngine.Vector3, $target: UnityEngine.Vector3, $maxRadiansDelta: number, $maxMagnitudeDelta: number) : UnityEngine.Vector3
            /** Linearly interpolates between two points.
            * @param a Start value, returned when t = 0.
            * @param b End value, returned when t = 1.
            * @param t Value used to interpolate between a and b.
            * @returns Interpolated value, equals to a + (b - a) * t. 
            */
            public static Lerp ($a: UnityEngine.Vector3, $b: UnityEngine.Vector3, $t: number) : UnityEngine.Vector3
            /** Linearly interpolates between two vectors.
            */
            public static LerpUnclamped ($a: UnityEngine.Vector3, $b: UnityEngine.Vector3, $t: number) : UnityEngine.Vector3
            /** Calculate a position between the points specified by current and target, moving no farther than the distance specified by maxDistanceDelta.
            * @param current The position to move from.
            * @param target The position to move towards.
            * @param maxDistanceDelta Distance to move current per call.
            * @returns The new position. 
            */
            public static MoveTowards ($current: UnityEngine.Vector3, $target: UnityEngine.Vector3, $maxDistanceDelta: number) : UnityEngine.Vector3
            /** Gradually changes a vector towards a desired goal over time.
            * @param current The current position.
            * @param target The position we are trying to reach.
            * @param currentVelocity The current velocity, this value is modified by the function every time you call it.
            * @param smoothTime Approximately the time it will take to reach the target. A smaller value will reach the target faster.
            * @param maxSpeed Optionally allows you to clamp the maximum speed.
            * @param deltaTime The time since the last call to this function. By default Time.deltaTime.
            */
            public static SmoothDamp ($current: UnityEngine.Vector3, $target: UnityEngine.Vector3, $currentVelocity: $Ref<UnityEngine.Vector3>, $smoothTime: number, $maxSpeed: number) : UnityEngine.Vector3
            /** Gradually changes a vector towards a desired goal over time.
            * @param current The current position.
            * @param target The position we are trying to reach.
            * @param currentVelocity The current velocity, this value is modified by the function every time you call it.
            * @param smoothTime Approximately the time it will take to reach the target. A smaller value will reach the target faster.
            * @param maxSpeed Optionally allows you to clamp the maximum speed.
            * @param deltaTime The time since the last call to this function. By default Time.deltaTime.
            */
            public static SmoothDamp ($current: UnityEngine.Vector3, $target: UnityEngine.Vector3, $currentVelocity: $Ref<UnityEngine.Vector3>, $smoothTime: number) : UnityEngine.Vector3
            /** Gradually changes a vector towards a desired goal over time.
            * @param current The current position.
            * @param target The position we are trying to reach.
            * @param currentVelocity The current velocity, this value is modified by the function every time you call it.
            * @param smoothTime Approximately the time it will take to reach the target. A smaller value will reach the target faster.
            * @param maxSpeed Optionally allows you to clamp the maximum speed.
            * @param deltaTime The time since the last call to this function. By default Time.deltaTime.
            */
            public static SmoothDamp ($current: UnityEngine.Vector3, $target: UnityEngine.Vector3, $currentVelocity: $Ref<UnityEngine.Vector3>, $smoothTime: number, $maxSpeed: number, $deltaTime: number) : UnityEngine.Vector3
            public get_Item ($index: number) : number
            public set_Item ($index: number, $value: number) : void
            /** Set x, y and z components of an existing Vector3.
            */
            public Set ($newX: number, $newY: number, $newZ: number) : void
            /** Multiplies two vectors component-wise.
            */
            public static Scale ($a: UnityEngine.Vector3, $b: UnityEngine.Vector3) : UnityEngine.Vector3
            /** Multiplies every component of this vector by the same component of scale.
            */
            public Scale ($scale: UnityEngine.Vector3) : void
            /** Cross Product of two vectors.
            */
            public static Cross ($lhs: UnityEngine.Vector3, $rhs: UnityEngine.Vector3) : UnityEngine.Vector3
            /** Returns true if the given vector is exactly equal to this vector.
            */
            public Equals ($other: any) : boolean
            public Equals ($other: UnityEngine.Vector3) : boolean
            /** Reflects a vector off the plane defined by a normal.
            */
            public static Reflect ($inDirection: UnityEngine.Vector3, $inNormal: UnityEngine.Vector3) : UnityEngine.Vector3
            /** Makes this vector have a magnitude of 1.
            */
            public static Normalize ($value: UnityEngine.Vector3) : UnityEngine.Vector3
            public Normalize () : void
            /** Dot Product of two vectors.
            */
            public static Dot ($lhs: UnityEngine.Vector3, $rhs: UnityEngine.Vector3) : number
            /** Projects a vector onto another vector.
            */
            public static Project ($vector: UnityEngine.Vector3, $onNormal: UnityEngine.Vector3) : UnityEngine.Vector3
            /** Projects a vector onto a plane defined by a normal orthogonal to the plane.
            * @param planeNormal The direction from the vector towards the plane.
            * @param vector The location of the vector above the plane.
            * @returns The location of the vector on the plane. 
            */
            public static ProjectOnPlane ($vector: UnityEngine.Vector3, $planeNormal: UnityEngine.Vector3) : UnityEngine.Vector3
            /** Calculates the angle between vectors from and.
            * @param from The vector from which the angular difference is measured.
            * @param to The vector to which the angular difference is measured.
            * @returns The angle in degrees between the two vectors. 
            */
            public static Angle ($from: UnityEngine.Vector3, $to: UnityEngine.Vector3) : number
            /** Calculates the signed angle between vectors from and to in relation to axis.
            * @param from The vector from which the angular difference is measured.
            * @param to The vector to which the angular difference is measured.
            * @param axis A vector around which the other vectors are rotated.
            * @returns Returns the signed angle between from and to in degrees. 
            */
            public static SignedAngle ($from: UnityEngine.Vector3, $to: UnityEngine.Vector3, $axis: UnityEngine.Vector3) : number
            /** Returns the distance between a and b.
            */
            public static Distance ($a: UnityEngine.Vector3, $b: UnityEngine.Vector3) : number
            /** Returns a copy of vector with its magnitude clamped to maxLength.
            */
            public static ClampMagnitude ($vector: UnityEngine.Vector3, $maxLength: number) : UnityEngine.Vector3
            public static Magnitude ($vector: UnityEngine.Vector3) : number
            public static SqrMagnitude ($vector: UnityEngine.Vector3) : number
            /** Returns a vector that is made from the smallest components of two vectors.
            */
            public static Min ($lhs: UnityEngine.Vector3, $rhs: UnityEngine.Vector3) : UnityEngine.Vector3
            /** Returns a vector that is made from the largest components of two vectors.
            */
            public static Max ($lhs: UnityEngine.Vector3, $rhs: UnityEngine.Vector3) : UnityEngine.Vector3
            public static op_Addition ($a: UnityEngine.Vector3, $b: UnityEngine.Vector3) : UnityEngine.Vector3
            public static op_Subtraction ($a: UnityEngine.Vector3, $b: UnityEngine.Vector3) : UnityEngine.Vector3
            public static op_UnaryNegation ($a: UnityEngine.Vector3) : UnityEngine.Vector3
            public static op_Multiply ($a: UnityEngine.Vector3, $d: number) : UnityEngine.Vector3
            public static op_Multiply ($d: number, $a: UnityEngine.Vector3) : UnityEngine.Vector3
            public static op_Division ($a: UnityEngine.Vector3, $d: number) : UnityEngine.Vector3
            public static op_Equality ($lhs: UnityEngine.Vector3, $rhs: UnityEngine.Vector3) : boolean
            public static op_Inequality ($lhs: UnityEngine.Vector3, $rhs: UnityEngine.Vector3) : boolean
            public ToString () : string
            /** Returns a formatted string for this vector.
            * @param format A numeric format string.
            * @param formatProvider An object that specifies culture-specific formatting.
            */
            public ToString ($format: string) : string
            /** Returns a formatted string for this vector.
            * @param format A numeric format string.
            * @param formatProvider An object that specifies culture-specific formatting.
            */
            public ToString ($format: string, $formatProvider: System.IFormatProvider) : string
            public constructor ($x: number, $y: number, $z: number)
            public constructor ($x: number, $y: number)
        }
        /** Base class for all objects Unity can reference.
        */
        class Object extends System.Object
        {
            protected [__keep_incompatibility]: never;
        }
        /** Represents a Sprite object for use in 2D gameplay.
        */
        class Sprite extends UnityEngine.Object
        {
            protected [__keep_incompatibility]: never;
            /** Bounds of the Sprite, specified by its center and extents in world space units.
            */
            public get bounds(): UnityEngine.Bounds;
            /** Location of the Sprite on the original Texture, specified in pixels.
            */
            public get rect(): UnityEngine.Rect;
            /** Returns the border sizes of the sprite.
            */
            public get border(): UnityEngine.Vector4;
            /** Get the reference to the used texture. If packed this will point to the atlas, if not packed will point to the source sprite.
            */
            public get texture(): UnityEngine.Texture2D;
            /** The number of pixels in the sprite that correspond to one unit in world space. (Read Only)
            */
            public get pixelsPerUnit(): number;
            /** The Variant scale of texture used by the Sprite. This is useful to check when a Variant SpriteAtlas is being used by Sprites.
            */
            public get spriteAtlasTextureScale(): number;
            /** Returns the texture that contains the alpha channel from the source texture. Unity generates this texture under the hood for sprites that have alpha in the source, and need to be compressed using techniques like ETC1.
            Returns NULL if there is no associated alpha texture for the source sprite. This is the case if the sprite has not been setup to use ETC1 compression.
            */
            public get associatedAlphaSplitTexture(): UnityEngine.Texture2D;
            /** Location of the Sprite's center point in the Rect on the original Texture, specified in pixels.
            */
            public get pivot(): UnityEngine.Vector2;
            /** Returns true if this Sprite is packed in an atlas.
            */
            public get packed(): boolean;
            /** If Sprite is packed (see Sprite.packed), returns its SpritePackingMode.
            */
            public get packingMode(): UnityEngine.SpritePackingMode;
            /** If Sprite is packed (see Sprite.packed), returns its SpritePackingRotation.
            */
            public get packingRotation(): UnityEngine.SpritePackingRotation;
            /** Get the rectangle this sprite uses on its texture. Raises an exception if this sprite is tightly packed in an atlas.
            */
            public get textureRect(): UnityEngine.Rect;
            /** Gets the offset of the rectangle this sprite uses on its texture to the original sprite bounds. If sprite mesh type is FullRect, offset is zero.
            */
            public get textureRectOffset(): UnityEngine.Vector2;
            /** Returns a copy of the array containing sprite mesh vertex positions.
            */
            public get vertices(): System.Array$1<UnityEngine.Vector2>;
            /** Returns a copy of the array containing sprite mesh triangles.
            */
            public get triangles(): System.Array$1<number>;
            /** The base texture coordinates of the sprite mesh.
            */
            public get uv(): System.Array$1<UnityEngine.Vector2>;
            public GetPhysicsShapeCount () : number
            /** The number of points in the selected physics shape for the Sprite.
            * @param shapeIdx The index of the physics shape to retrieve the number of points from.
            * @returns The number of points in the selected physics shape for the Sprite. 
            */
            public GetPhysicsShapePointCount ($shapeIdx: number) : number
            public GetPhysicsShape ($shapeIdx: number, $physicsShape: System.Collections.Generic.List$1<UnityEngine.Vector2>) : number
            public OverridePhysicsShape ($physicsShapes: System.Collections.Generic.IList$1<System.Array$1<UnityEngine.Vector2>>) : void
            /** Sets up new Sprite geometry.
            * @param vertices Array of vertex positions in Sprite Rect space.
            * @param triangles Array of sprite mesh triangle indices.
            */
            public OverrideGeometry ($vertices: System.Array$1<UnityEngine.Vector2>, $triangles: System.Array$1<number>) : void
            /** Create a new Sprite object.
            * @param texture Texture from which to obtain the sprite graphic.
            * @param rect Rectangular section of the texture to use for the sprite.
            * @param pivot Sprite's pivot point relative to its graphic rectangle.
            * @param pixelsPerUnit The number of pixels in the sprite that correspond to one unit in world space.
            * @param extrude Amount by which the sprite mesh should be expanded outwards.
            * @param meshType Controls the type of mesh generated for the sprite.
            * @param border The border sizes of the sprite (X=left, Y=bottom, Z=right, W=top).
            * @param generateFallbackPhysicsShape Generates a default physics shape for the sprite.
            */
            public static Create ($texture: UnityEngine.Texture2D, $rect: UnityEngine.Rect, $pivot: UnityEngine.Vector2, $pixelsPerUnit: number, $extrude: number, $meshType: UnityEngine.SpriteMeshType, $border: UnityEngine.Vector4, $generateFallbackPhysicsShape: boolean) : UnityEngine.Sprite
            /** Create a new Sprite object.
            * @param texture Texture from which to obtain the sprite graphic.
            * @param rect Rectangular section of the texture to use for the sprite.
            * @param pivot Sprite's pivot point relative to its graphic rectangle.
            * @param pixelsPerUnit The number of pixels in the sprite that correspond to one unit in world space.
            * @param extrude Amount by which the sprite mesh should be expanded outwards.
            * @param meshType Controls the type of mesh generated for the sprite.
            * @param border The border sizes of the sprite (X=left, Y=bottom, Z=right, W=top).
            * @param generateFallbackPhysicsShape Generates a default physics shape for the sprite.
            */
            public static Create ($texture: UnityEngine.Texture2D, $rect: UnityEngine.Rect, $pivot: UnityEngine.Vector2, $pixelsPerUnit: number, $extrude: number, $meshType: UnityEngine.SpriteMeshType, $border: UnityEngine.Vector4) : UnityEngine.Sprite
            /** Create a new Sprite object.
            * @param texture Texture from which to obtain the sprite graphic.
            * @param rect Rectangular section of the texture to use for the sprite.
            * @param pivot Sprite's pivot point relative to its graphic rectangle.
            * @param pixelsPerUnit The number of pixels in the sprite that correspond to one unit in world space.
            * @param extrude Amount by which the sprite mesh should be expanded outwards.
            * @param meshType Controls the type of mesh generated for the sprite.
            * @param border The border sizes of the sprite (X=left, Y=bottom, Z=right, W=top).
            * @param generateFallbackPhysicsShape Generates a default physics shape for the sprite.
            */
            public static Create ($texture: UnityEngine.Texture2D, $rect: UnityEngine.Rect, $pivot: UnityEngine.Vector2, $pixelsPerUnit: number, $extrude: number, $meshType: UnityEngine.SpriteMeshType) : UnityEngine.Sprite
            /** Create a new Sprite object.
            * @param texture Texture from which to obtain the sprite graphic.
            * @param rect Rectangular section of the texture to use for the sprite.
            * @param pivot Sprite's pivot point relative to its graphic rectangle.
            * @param pixelsPerUnit The number of pixels in the sprite that correspond to one unit in world space.
            * @param extrude Amount by which the sprite mesh should be expanded outwards.
            * @param meshType Controls the type of mesh generated for the sprite.
            * @param border The border sizes of the sprite (X=left, Y=bottom, Z=right, W=top).
            * @param generateFallbackPhysicsShape Generates a default physics shape for the sprite.
            */
            public static Create ($texture: UnityEngine.Texture2D, $rect: UnityEngine.Rect, $pivot: UnityEngine.Vector2, $pixelsPerUnit: number, $extrude: number) : UnityEngine.Sprite
            /** Create a new Sprite object.
            * @param texture Texture from which to obtain the sprite graphic.
            * @param rect Rectangular section of the texture to use for the sprite.
            * @param pivot Sprite's pivot point relative to its graphic rectangle.
            * @param pixelsPerUnit The number of pixels in the sprite that correspond to one unit in world space.
            * @param extrude Amount by which the sprite mesh should be expanded outwards.
            * @param meshType Controls the type of mesh generated for the sprite.
            * @param border The border sizes of the sprite (X=left, Y=bottom, Z=right, W=top).
            * @param generateFallbackPhysicsShape Generates a default physics shape for the sprite.
            */
            public static Create ($texture: UnityEngine.Texture2D, $rect: UnityEngine.Rect, $pivot: UnityEngine.Vector2, $pixelsPerUnit: number) : UnityEngine.Sprite
            /** Create a new Sprite object.
            * @param texture Texture from which to obtain the sprite graphic.
            * @param rect Rectangular section of the texture to use for the sprite.
            * @param pivot Sprite's pivot point relative to its graphic rectangle.
            * @param pixelsPerUnit The number of pixels in the sprite that correspond to one unit in world space.
            * @param extrude Amount by which the sprite mesh should be expanded outwards.
            * @param meshType Controls the type of mesh generated for the sprite.
            * @param border The border sizes of the sprite (X=left, Y=bottom, Z=right, W=top).
            * @param generateFallbackPhysicsShape Generates a default physics shape for the sprite.
            */
            public static Create ($texture: UnityEngine.Texture2D, $rect: UnityEngine.Rect, $pivot: UnityEngine.Vector2) : UnityEngine.Sprite
        }
        /** Represents an axis aligned bounding box.
        */
        class Bounds extends System.ValueType implements System.IFormattable, System.IEquatable$1<UnityEngine.Bounds>
        {
            protected [__keep_incompatibility]: never;
        }
        /** A 2D Rectangle defined by X and Y position, width and height.
        */
        class Rect extends System.ValueType implements System.IFormattable, System.IEquatable$1<UnityEngine.Rect>
        {
            protected [__keep_incompatibility]: never;
        }
        /** Representation of four-dimensional vectors.
        */
        class Vector4 extends System.ValueType implements System.IFormattable, System.IEquatable$1<UnityEngine.Vector4>
        {
            protected [__keep_incompatibility]: never;
        }
        /** Base class for Texture handling.
        */
        class Texture extends UnityEngine.Object
        {
            protected [__keep_incompatibility]: never;
        }
        /** Class that represents textures in C# code.
        */
        class Texture2D extends UnityEngine.Texture
        {
            protected [__keep_incompatibility]: never;
        }
        /** Sprite packing modes for the Sprite Packer.
        */
        enum SpritePackingMode
        { Tight = 0, Rectangle = 1 }
        /** Sprite rotation modes for the Sprite Packer.
        */
        enum SpritePackingRotation
        { None = 0, FlipHorizontal = 1, FlipVertical = 2, Rotate180 = 3, Any = 15 }
        /** Defines the type of mesh generated for a sprite.
        */
        enum SpriteMeshType
        { FullRect = 0, Tight = 1 }
    }
    namespace System.Collections.Generic {
        interface IEnumerable$1<T> extends System.Collections.IEnumerable
        {
        }
        interface IReadOnlyList$1<T> extends System.Collections.Generic.IEnumerable$1<T>, System.Collections.IEnumerable, System.Collections.Generic.IReadOnlyCollection$1<T>
        {
        }
        interface IReadOnlyCollection$1<T> extends System.Collections.Generic.IEnumerable$1<T>, System.Collections.IEnumerable
        {
        }
        interface IList$1<T> extends System.Collections.Generic.IEnumerable$1<T>, System.Collections.IEnumerable, System.Collections.Generic.ICollection$1<T>
        {
        }
        interface ICollection$1<T> extends System.Collections.Generic.IEnumerable$1<T>, System.Collections.IEnumerable
        {
        }
        class List$1<T> extends System.Object implements System.Collections.Generic.IReadOnlyList$1<T>, System.Collections.ICollection, System.Collections.Generic.IEnumerable$1<T>, System.Collections.IEnumerable, System.Collections.Generic.IList$1<T>, System.Collections.Generic.IReadOnlyCollection$1<T>, System.Collections.IList, System.Collections.Generic.ICollection$1<T>
        {
            protected [__keep_incompatibility]: never;
        }
    }
    namespace System.Collections {
        interface IEnumerable
        {
        }
        interface IStructuralComparable
        {
        }
        interface IStructuralEquatable
        {
        }
        interface ICollection extends System.Collections.IEnumerable
        {
        }
        interface IList extends System.Collections.ICollection, System.Collections.IEnumerable
        {
        }
    }
}
