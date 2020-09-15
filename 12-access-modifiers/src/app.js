var Car = /** @class */ (function () {
    function Car(make, model, odometer) {
        this.make = make;
        this.model = model;
        this.odometer = odometer;
    }
    Car.prototype.description = function () {
        return this.make + " " + this.model + " has been driven for " + this.odometer + " km.";
    };
    return Car;
}());
var myRanger = new Car('Ford', 'Ranger', 12200);
myRanger.odometer = 2500;
//let carModel = myRanger.model;
//myRanger.model = 'Focus';
var carMake = myRanger.make;
//myRanger.make = 'GMC';
