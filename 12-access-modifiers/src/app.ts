class Car {
    readonly make: string;
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

const myRanger = new Car('Ford', 'Ranger', 12200);
myRanger.odometer = 2500;

//let carModel = myRanger.model;
//myRanger.model = 'Focus';

let carMake = myRanger.make;
//myRanger.make = 'GMC';