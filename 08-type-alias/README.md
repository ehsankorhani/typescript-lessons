# Type Aliases

Sometimes the type definitions become too complex and their repetition becomes cumbersome.

for example:

```ts
const addCar = (car: {make: string, model: string, plateNumber: string | number}) => {
    return `new ${car.make} ${car.model}`;
}
```

In these cases we can use *Type Alias*:

```ts
type stringOrNum = string | number;
type carObj = {make: string, model: string, plateNumber: stringOrNum};
```

And reuse it easily:

```ts
const addCar = (car: carObj) => {
    return `new ${car.make} ${car.model}`;
}
```