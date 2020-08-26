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