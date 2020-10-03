var carMake = 'Ford';
//carMake = 4000;
carMake = 'Mercedes';
// const mileToKm = (value) => {
//     return value * 1.6;
// }
// console.log(mileToKm('Ford'));
var mileToKm = function (value) {
    return value * 1.6;
};
console.log(mileToKm(100));
// ----------------------
var foo = function (x) {
    return x;
};
var bar = function (x) {
    return x;
};
var baz = function (x) {
    return x;
};
baz(123);
var f = function (x) {
    return x;
};
f([123]);
