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
