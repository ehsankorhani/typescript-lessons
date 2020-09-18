# Interfaces

Interfaces are a way to enforce an structure upon an object without any implementation. Interfaces convey the ```Is A``` relationship.

```ts
interface ICar {
    make: string;
    model: string;
    speed: number;
    start(): void;
    accelerate(rate: number);
}
```

We can now define an object that complies with this structure.

```ts
const miata: ICar = {
    make: 'Mazda',
    model: 'MX-5',
    speed: 120,
    start(): void {
        console.log(`Engine started`)
    },
    accelerate(amount: number): number {
        return this.speed + amount;
    }
}
```

The ```miata``` object has provides implementations for the interface ```ICar``` properties.

Note that the methods do not need to explicitly declare the return type, but it's recommended for the sake of readability.

Also the object cannot define any extra property and methods.

```ts
const miata: ICar = {
    //...
    odometer: 53000
}
//Object literal may only specify known properties, and 'odometer' does not exist in type 'ICar'.
```

Interface type can be used for function argument types as well:

```ts
const sellCar = (car: ICar) => {
    console.log(`the ${car.make} ${car.model} has been sold`)
}
```

<br>

## The difference between ```interface``` and ```type```

Interfaces and Types look alike very much. However,
* A class can ```implement``` an interface, but not a type.
* 

<br>

# Interfaces with Classes

In OOP programming the main purpose of using an interface is for classes to implement it and thus become a type of that interface. This is most useful in **polymorphism** and **dependency injection**.

Expanding on the previous example, we can define a class like below:

```ts
class SUV implements ICar {
    make: string;
    model: string;
    speed: number;
    start(): void {
        throw new Error("Method not implemented.");
    }
    accelerate(value: number): number {
        throw new Error("Method not implemented.");
    }
}
```

But this time our class can contain other property and methods:

```ts
class SUV implements ICar {
    //...
    description() {
        return `${this.make} ${this.model}`;
    }
}
```

<br>

### Multiple interface

It in fact can implement multiple interfaces. Therefore, if we have another interface as the following:

```ts
interface IDrivable {
    driver: string;
    drive(): void;
}
```

Our SUV class can implement it:

```ts
class SUV implements ICar, IDrivable {    
    make: string;
    model: string;
    speed: number;
    driver: string;

    constructor(make: string, model: string, speed: number, driver: string) {
        this.make = make;
        this.model = model;
        this.speed = speed;
        this.driver = driver;
    }

    start(): void {
        throw new Error("Method not implemented.");
    }
    accelerate(value: number): number {
        throw new Error("Method not implemented.");
    }
    description() {
        return `${this.make} ${this.model}`;
    }
    drive(): void {
        console.log(`${this.driver} is driving a SUV`);
    }
}
```

Now the ```SUV``` class *Is A* ```ICar``` and also *Is A* ```IDrivable```.

<br>

### Dependency injection

We can have different classes which are implementing a same interface:

```ts
class Boat implements IDrivable {
    driver: string;

    constructor(driver: string) {
        this.driver = driver;
    }

    drive(): void {
        console.log(`${this.driver} is driving a boat`);
    }
}
```

And instantiating them with their constructors:

```ts
const myX5 = new SUV('BMW', 'X5', 220, 'John');
const myBoat = new Boat('Jane');
```

Now imagine there is method that accepts an ```IDrivable```:

```ts
const drive = (machine: IDrivable) => {
    machine.drive();
}
```

It executes the ```drive()``` function on this type, and it is guaranteed that the input argument has this implementation.

This input can eb identified at run time and based on some conditions.

```ts
let rnd = Math.floor(Math.random() * 2) + 1;

if (rnd === 1) drive(myX5);
if (rnd === 2) drive(myBoat);
```
```
John is driving a SUV
# Or
Jane is driving a boat
```

<br>
<br>

### References

* [Interface vs Type alias in TypeScript 2.7](https://medium.com/@martin_hotell/interface-vs-type-alias-in-typescript-2-7-2a8f1777af4c)