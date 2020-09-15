export class Car {
    constructor(make, model, odometer) {
        this.make = make;
        this.model = model;
        this.odometer = odometer;
    }
    description() {
        return `${this.make} ${this.model} has been driven for ${this.odometer} km.`;
    }
}
