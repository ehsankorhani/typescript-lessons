# Any (Dynamic) Type

Variables of type ```any``` can take any JS type. The value of these variables can be changed to other types too:

```ts
let model: any = 'Ranger';

model = 525;
model = true;
model = { name: 'C180' };
```

This is essentially the default behavior of vanilla JS.

<br>

### Array

We create an array which can hold every different type with:

```ts
let showroom: any[] = [];

showroom.push('Ford', 525);
showroom.push(false);
```

<br>

### Object

To create an object with specific shape but mixed types we can do:

```ts
let myCar: { make: any, model: any }
```

And then assign values to it's properties:

```ts
myCar.make = 'BMW';
myCar.model = 525;

myCar = { make: 'Mazda', model: 3 };
```
