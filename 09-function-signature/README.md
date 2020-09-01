# Function Signature

Function signature specifies the function structure. What argument it takes in and what type it returns.

We learned that we can define ```Function``` type:

```ts
let accelerate: Function;
```

We can go one step further and exactly define which type of function:

```ts
let start: () => void;
let accelerate: (a: number, b: number, c: string) => string;
```

When using these signature we don't have to specify the exact argument name. But just follow the structure:

```ts
accelerate: (speed: number, rate: number, unit: string) => {
    return `${speed * rate} ${unit}`;
}
```