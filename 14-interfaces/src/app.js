var miata = {
    make: 'Mazda',
    model: 'MX-5',
    speed: 120,
    start: function () {
        console.log("Engine started");
    },
    accelerate: function (amount) {
        return this.speed + amount;
    } //,
    //odometer: 53000
};
var sellCar = function (car) {
    console.log("the " + car.make + " " + car.model + " has been sold");
};
