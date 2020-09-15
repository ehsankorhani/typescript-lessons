# Classes

Classes in TypeScript are much like JS and basics are similar.

## Definition

Class structure is defined using the ```class``` keyword following the property definition:

```ts
class Car {
    make: string;
    model: string;
    odometer:number;
}
```

> Naming convention: Class names should be singular nouns in UpperCamelCase.

We do not specify values for these properties because each instance should have different values.

<br>

## Constructor

A constructor is a method that runs when the class is instantiated. It will also force client to provide arguments if they are defined in the constructor definition.

```ts
class Car {
    // ...

    constructor(make: string, model: string, odometer: number) {
        this.make = make;
        this.model = model;
        this.odometer = odometer;
    }    
}
```

## Public methods

Classes can contain other type of behaviors as public methods:

```ts
class Car {
    // ...

    description() {
        return `${this.make} ${this.model} has been driven for ${this.odometer} km.`
    }
}
```

<br>

## Instantiation

Use ```new``` keyword to create a new instance of the class:

```ts
const myRanger = new Car('Ford', 'Ranger', 12200);
const mySkyline = new Car('Nissan', 'Skyline', 5800);
```

<br>

## Array of Class

Arrays can be defined to contain only certain class types:

```ts
let myCars: Car[] = [myRanger, mySkyline];
```

Or

```ts
let myCars: Car[] = [];

myCars.push(myRanger);
myCars.push(mySkyline);
```

<br>

## Modify class public properties

Whenever we create and instance we have access to alter it's properties:

```ts
myRanger.odometer = 12500;
```