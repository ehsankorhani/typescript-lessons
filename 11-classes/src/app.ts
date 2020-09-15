class Car {
    make: string;
    model: string;
    odometer:number;

    constructor(make: string, model: string, odometer: number) {
        this.make = make;
        this.model = model;
        this.odometer = odometer;
    }

    description() {
        return `${this.make} ${this.model} has been driven for ${this.odometer} km.`
    }
}


const myRanger = new Car('Ford', 'Ranger', 12200);
const mySkyline = new Car('Nissan', 'Skyline', 5800);

let myCars: Car[] = [myRanger];

myCars.push(mySkyline);

console.log(myCars);

myRanger.odometer = 12500;