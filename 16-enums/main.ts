enum carTypes {
    SUV,
    Hatch,
    Sedan,
    Truck,
    Pickup,
    Coupe
}

const myX5 = {
    uid: 1,
    make: 'BMW',
    model: 'X5',
    type: carTypes.SUV
}

console.log('type:', myX5.type);