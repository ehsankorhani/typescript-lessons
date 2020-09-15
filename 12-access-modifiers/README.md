# Access Modifiers

Class properties are ```public``` by default. 

<br>

## Public

We can explicitly define them as ```public```:

```ts
class Car {
    make: string;
    model: string;
    public odometer:number;

    constructor(make: string, model: string, odometer: number) {
        this.make = make;
        this.model = model;
        this.odometer = odometer;
    }
}
```

A public property can be accessed, read or write everywhere:

```ts
const myRanger = new Car('Ford', 'Ranger', 12200);

myRanger.odometer = 2500;
```

<br>

## Private

Private properties cannot be read or written outside of class:

```ts
class Car {
    make: string;
    private model: string;
    public odometer:number;

    constructor(make: string, model: string, odometer: number) {
        this.make = make;
        this.model = model;
        this.odometer = odometer;
    }

    description() {
        return `${this.make} ${this.model} has been driven for ${this.odometer} km.`
    }
}
```

```odometer``` property could be read/modified inside the class, but we can not access it on the instance:

```ts
const myRanger = new Car('Ford', 'Ranger', 12200);

let carModel = myRanger.model;
myRanger.model = 'Focus';
// Property 'model' is private and only accessible within class 'Car'.
```

<br>

## Readonly

Readonly properties can be read but cannot be changed:

```ts
class Car {
    readonly make: string;
    private model: string;
    public odometer:number;

    //...
}

let carMake = myRanger.make;
myRanger.make = 'GMC'; // Cannot assign to 'make' because it is a read-only property.
```

<br>

## Constructor shorthand

We can define all our properties inside the constructor:

```ts
class Car {
    
    constructor(readonly make: string, private model: string, public odometer: number) {
        this.make = make;
        this.model = model;
        this.odometer = odometer;
    }

    // ...
}
```

This will automatically create class variables with the same name as the ones defined in constructor.
