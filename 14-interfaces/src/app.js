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
var SUV = /** @class */ (function () {
    function SUV(make, model, speed, driver) {
        this.make = make;
        this.model = model;
        this.speed = speed;
        this.driver = driver;
    }
    SUV.prototype.start = function () {
        throw new Error("Method not implemented.");
    };
    SUV.prototype.accelerate = function (value) {
        throw new Error("Method not implemented.");
    };
    SUV.prototype.description = function () {
        return this.make + " " + this.model;
    };
    SUV.prototype.drive = function () {
        console.log(this.driver + " is driving a SUV");
    };
    return SUV;
}());
var Boat = /** @class */ (function () {
    function Boat(driver) {
        this.driver = driver;
    }
    Boat.prototype.drive = function () {
        console.log(this.driver + " is driving a boat");
    };
    return Boat;
}());
var myX5 = new SUV('BMW', 'X5', 220, 'John');
var myBoat = new Boat('Jane');
var drive = function (machine) {
    machine.drive();
};
var rnd = Math.floor(Math.random() * 2) + 1;
if (rnd === 1)
    drive(myX5);
if (rnd === 2)
    drive(myBoat);
