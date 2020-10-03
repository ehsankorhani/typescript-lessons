let carMake = 'Ford';

//carMake = 4000;
carMake = 'Mercedes';


// const mileToKm = (value) => {
//     return value * 1.6;
// }

// console.log(mileToKm('Ford'));

const mileToKm = (value: number) => {
    return value * 1.6;
}

console.log(mileToKm(100));


// ----------------------

const foo = (x: number): Object => {
    return x;
}

const bar = (x: Object): {toString(): string} => {
    return x;
}

const baz = (x: Object) => {
    return x;
}
baz(123);

const f = (x: object) => {
    return x;
}
f([123]);