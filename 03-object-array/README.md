# Objects and Arrays


## Array type

As we know, JS arrays can accept any type of variables. TypeScript is similar and allow us to define mixed-type arrays:

```ts
const myCar = ['Mercedes', 'C180', 1800, 4];
```

But when define an array with only primitive type values, we cannot add/modify values of any other type which haven't been defined:

```ts
myCar.push(true); // Argument of type 'boolean' is not assignable to parameter of type 'string | number'.
myCar[3] = {}; // Type '{}' is not assignable to type 'string | number'.
```

But this is acceptable:

```ts
myCar[3] = '1800cc';
```

Therefore, if an array has been defined only with single primitive type it can only hold that type of value:

```ts
const carMakes = ['Mercedes', 'Tesla', 'Jaguar'];
carMakes.push('Honda');
```

<br>

## Object type

Objects are defined as in JS:

```ts
let myFord = {
    make: 'Ford',
    model: 'Ranger',
    engine: 4000
};
```

The properties inside the object act as variables and their type cannot be changed:

```ts
myFord.engine = '4000cc'; // Type 'string' is not assignable to type 'number'.
```

But this will be ok to do:

```ts
myFord.model = 'focus';
```

In Addition, we cannot alter the shape of the object. TypeScript does not allow us to add new properties to the defined object:

```ts
myFord.noOfCylinder = 6; // Property 'noOfCylinder' does not exist on type '{ make: string; model: string; engine: number; }'.
```

To override the whole object we can only re-define it. But we cannot change types or remove/add any property

```ts
myFord = { // Property 'make' is missing
    model: 'Focus',
    engine: 1600,
    noOfCylinder: 4 // 'noOfCylinder' does not exist in type 
};
```

Therefore, it should hold it's initial shape:

```ts
myFord = {
    make: 'Ford',
    model: 'Focus',
    engine: 1600
};
```