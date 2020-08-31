# Function type

Function, in TypeScript can be defined either with assigning the variable to a function literal:

```ts
let start = () => {
    return 'Engine starter';
}
```

of defining it with a ```Function``` type (with capital F):

```ts
let slowDown: Function;

slowDown = () => {
    return 'Go slower!';
}
```

The function arguments can have their own types with:

```ts
const accelerate = (speed: number, rate: number) => {
    return speed * rate;
}
```

Optional arguments can also be added. We defined them by adding a ```?``` to the variable name.

```ts
const accelerate = (speed: number, rate: number, unit?: string) => {
    return `${speed * rate} ${unit}`;
}

console.log(accelerate(80, 1.4, 'km'));
```

Like variables, arguments can have multiple types by defining them as:

```ts
const accelerate = (speed: number, rate: number, unit?: string | number) => {
    return `${speed * rate} ${unit}`;
}
```

In addition, we can add *default values*:

```ts
const accelerate = (speed: number, rate: number, unit: string = 'km') => {
    return `${speed * rate} ${unit}`;
}

console.log(accelerate(90, 1.5));
```

but not along with optional parameter:

```ts
const accelerate = (speed: number, rate: number, unit?: string = 'km') => {
    return `${speed * rate} ${unit}`;
}
// Parameter cannot have question mark and initializer.
```

*Note that, always place your required parameters at the beginning and optional at the end.

### Return type

Functions return types will set the assigned variable type (implicitly):

```ts
slowDown = (speed: number, rate: number) => {
    return speed - (speed * rate);
}

let result = slowDown(100, 0.5);// result will become a number
```

To explicitly define a return type:

```ts
slowDown = (speed: number, rate: number): number => {
    return speed - (speed * rate);
}
```

This is for clarity and intellisense.

A function that does not return anything can be set to be ```void```:

```ts
let turnOff = ():void => {
    console.log('Engine turned off');
}
```