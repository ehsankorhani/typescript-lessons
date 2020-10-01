var carTypes;
(function (carTypes) {
    carTypes[carTypes["SUV"] = 0] = "SUV";
    carTypes[carTypes["Hatch"] = 1] = "Hatch";
    carTypes[carTypes["Sedan"] = 2] = "Sedan";
    carTypes[carTypes["Truck"] = 3] = "Truck";
    carTypes[carTypes["Pickup"] = 4] = "Pickup";
    carTypes[carTypes["Coupe"] = 5] = "Coupe";
})(carTypes || (carTypes = {}));
var myX5 = {
    uid: 1,
    make: 'BMW',
    model: 'X5',
    type: carTypes.SUV
};
console.log('type:', myX5.type);
