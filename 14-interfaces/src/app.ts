interface ICar {
    make: string;
    model: string;
    speed: number;
    start(): void;
    accelerate(value: number): number;
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