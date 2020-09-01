type stringOrNum = string | number;
type carObj = {make: string, model: string, plateNumber: stringOrNum};

const addCar = (car: carObj) => {
    return `new ${car.make} ${car.model}`;
}