interface ICar {
    make: string;
    model: string;
    speed: number;
    start(): void;
    accelerate(value: number): number;
}

interface IDrivable {
    driver: string;
    drive(): void;
}

const miata: ICar = {
    make: 'Mazda',
    model: 'MX-5',
    speed: 120,
    start(): void {
        console.log(`Engine started`)
    },
    accelerate(amount: number): number {
        return this.speed + amount;
    }//,
    //odometer: 53000
}

const sellCar = (car: ICar) => {
    console.log(`the ${car.make} ${car.model} has been sold`)
}

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

class Boat implements IDrivable {
    driver: string;

    constructor(driver: string) {
        this.driver = driver;
    }

    drive(): void {
        console.log(`${this.driver} is driving a boat`);
    }
}

const myX5 = new SUV('BMW', 'X5', 220, 'John');
const myBoat = new Boat('Jane');

const drive = (machine: IDrivable) => {
    machine.drive();
}

let rnd = Math.floor(Math.random() * 2) + 1;

if (rnd === 1) drive(myX5);
if (rnd === 2) drive(myBoat);