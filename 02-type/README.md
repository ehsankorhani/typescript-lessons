# Type

TypeScript allows us to do type check at compile time to avoid future errors.

Defining variables are similar to JavaScript but with *Type* getting bound to that variable.

```ts
let carMake = 'Ford';
```

The variable ```carMake``` is being created as an ```string```, and this cannot be changed:

```ts
carMake = 4000; // Type '4000' is not assignable to type 'string'.ts(2322)
```

But this is acceptable:

```ts
carMake = 'Mercedes';
```

<br>

### Function arguments

A function can be defined as below:

```ts
const mileToKm = (value) => {
    return value * 1.6;
}
```

Although we expect a ```number``` as an argument, we can actually pass a different type to it:

```ts
mileToKm('Ford'); // NaN
```

The line above will compile but the result of the function will be ```NaN```.

To avoid these circumstances, we can define types of the arguments:

```ts
const mileToKm = (value: number) => {
    return value * 1.6;
}
```
Therefore, now we will get an error if we try to compile the call the function with non-number values:


```ts
mileToKm('Ford'); // Argument of type '"Ford"' is not assignable to parameter of type 'number'.
```

<br>

## ```Object``` vs ```object```

TypeScript has three confusing types: ```Object```, ```{}``` and ```object```.

You can assign null and undefined to all three types if ```strictNullChecks``` compiler option is disabled otherwise the compile error occurs.

<br>

### ```Object``` - with uppercase O
Is similar to JavaScript Object class and has all it's prototype methods such as: ```.toString()``` and ```.hasOwnProperty()```.

Instance of Object always satisfies the type:

```ts
const foo = (x: number): Object => {
    return x;
}


const bar = (x: Object): {toString(): string} => {
    return x;
}

const baz = (x: Object) => {
    return x;
}
baz(123);
```

<br>

### ```object``` - with lowercase o
Is the type of all non-primitive values (primitive values are undefined, null, booleans, numbers, bigints, strings). With this type, we can’t access any properties of a value.

Therefore this will not work:

```ts
const baz = (x: object) => {
    return x;
}
baz(123); // Argument of type 'number' is not assignable to parameter of type 'object'.
```     

But this is ok:

```ts
const f = (x: object) => {
    return x;
}
f([123]);
```

<br>

### ```{}``` - Object type literal
{} is an empty object and same as ```Object```.


<br>
<br>

---

### References

* [Difference between 'object' and {} in TypeScript](https://stackoverflow.com/a/49465172)
* [Typing objects in TypeScript](https://2ality.com/2020/01/typing-objects-typescript.html)
