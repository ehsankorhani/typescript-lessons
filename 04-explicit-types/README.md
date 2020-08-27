# Explicit Types

In TypeScript we can define variables with specific types without initializing them.

```ts
let make: string;
let odometer: number;
let isBrandNew: boolean;
```

So, later we cannot assign a different type to this values:

```ts
isBrandNew = 'Yes'; // Type 'string' is not assignable to type 'boolean'.
isBrandNew = true; 
```
<br>

## Arrays

Similarly we can define Arrays to only hold an specific type:

```ts
let cars: string[];
```

This array can only hold ```string``` values:

```ts
cars = ["0", 1]; // Type 'number' is not assignable to type 'string'.
cars = ["BMW", "Audi"];
```

Note that until array is not initialized we cannot ```push``` value to it.

```ts
let mercedes_models: string[];
mercedes_models.push('S500');
```

TypeScript will not prevent the compilation. But the JS code will raise an exception:

```js
var mercedes_models;
mercedes_models.push('S500'); // TypeError: Cannot read property 'push' of undefined
```

To prevent this we can initialize array a types empty array this way:

```ts
let bmw_models: string[] = [];
bmw_models.push('530');
```

<br>

## Union Types

In order to define a variable that can be of different specific types when initialized we can:

```ts
let uid: string|number;
```

Therefore, this variable can be either string or number only:

```ts
uid = 'XYZ';
uid = 110;
uid = false; // Type 'boolean' is not assignable to type 'string | number'.
```

In the same manner to create arrays that can hold two or three different types we can define them as:

```ts
let myFord: (string|boolean)[] = [];
```

This array cannot hold numbers:

```ts
myFord.push('FOrd');
myFord.push(true);
myFord.push(4500); // Argument of type '4500' is not assignable to parameter of type 'string | boolean'.
```

<br>

## Objects

Variables of type ```object``` can be simply defined and initialized as:

```ts
let myAudi: object;

myAudi = {
    make: "Audi",
    no_of_cylinder: 4
}
````

However, because for example ```array``` is also a type of an object, it can be initialized to an array too:

```ts
myAudi = [];
```

Therefore, the better practice is to define array with exact shape:

```ts
let myGMC: {
    model: string,
    no_of_cylinder: number,
    isNew: boolean
}
```

This object should have all the defined properties when initialized, and nothing more.