# Enums

Enums are special types which allow storing set of data or keywords and associate them with numeric value.

```ts
enum carTypes {
    SUV,
    Hatch,
    Sedan,
    Truck,
    Pickup,
    Coupe
}
```

Then after defining the enum we can use it like this:

```ts
const myX5 = {
    uid: 1,
    make: 'BMW',
    model: 'X5',
    type: carTypes.SUV
}
```

If we log the value:

```ts
console.log('type:', myX5.type);
```
```
type: 0
```

The ```0``` is the index of the enum value inside the ```carTypes```.