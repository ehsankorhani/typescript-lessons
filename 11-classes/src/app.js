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
var mySkyline = new Car('Nissan', 'Skyline', 5800);
var myCars = [myRanger];
myCars.push(mySkyline);
console.log(myCars);
myRanger.odometer = 12500;
