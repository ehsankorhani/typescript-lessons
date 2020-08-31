
let start = () => {
    return 'Engine starter';
}

let slowDown: Function;

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


const accelerate = (speed: number, rate: number, unit: string = 'km') => {
    return `${speed * rate} ${unit}`;
}

console.log(accelerate(90, 1.5));


// slowDown = (speed: number, rate: number) => {
//     return speed - (speed * rate);
// }

slowDown = (speed: number, rate: number): number => {
    return speed - (speed * rate);
}

let result = slowDown(100, 0.5);

console.log(result);


let turnOff = ():void => {
    console.log('Engine turned off');
}