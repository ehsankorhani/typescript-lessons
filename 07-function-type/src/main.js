var start = function () {
    return 'Engine starter';
};
var slowDown;
// slowDown = () => {
//     return 'Go slower!';
// }
// const accelerate = (speed: number, rate: number) => {
//     return speed * rate;
// }
// const accelerate = (speed: number, rate: number, unit?: string) => {
//     return `${speed * rate} ${unit}`;
// }
//console.log(accelerate(80, 1.4, 'km'));
// const accelerate = (speed: number, rate: number, unit?: string = 'km') => {
//     return `${speed * rate} ${unit}`;
//}
var accelerate = function (speed, rate, unit) {
    if (unit === void 0) { unit = 'km'; }
    return speed * rate + " " + unit;
};
console.log(accelerate(90, 1.5));
// slowDown = (speed: number, rate: number) => {
//     return speed - (speed * rate);
// }
slowDown = function (speed, rate) {
    return speed - (speed * rate);
};
var result = slowDown(100, 0.5);
console.log(result);
var turnOff = function () {
    console.log('Engine turned off');
};
