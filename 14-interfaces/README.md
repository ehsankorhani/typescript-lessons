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

<!-- <br>

## The difference between ```interface``` and ```type```

Interfaces and Types look alike very much. However,
* A class can ```implement``` an interface, but not a type.
* 

<br>
<br>

### References

* [Interface vs Type alias in TypeScript 2.7](https://medium.com/@martin_hotell/interface-vs-type-alias-in-typescript-2-7-2a8f1777af4c)

 -->