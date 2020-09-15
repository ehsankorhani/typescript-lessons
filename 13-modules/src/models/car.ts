export class Car {
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
