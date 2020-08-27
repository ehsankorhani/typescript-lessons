let make: string;
let odometer: number;
let isBrandNew: boolean;

//isBrandNew = 'Yes';

isBrandNew = true; 

// --------------------------------------

let cars: string[];

//cars = ["0", 1];
cars = ["BMW", "Audi"];

let mercedes_models: string[];
//mercedes_models.push('S500');

let bmw_models: string[] = [];
bmw_models.push('530');

// --------------------------------------

let uid: string|number;
uid = 'XYZ';
uid = 110;
//uid = false;


let myFord: (string|boolean)[] = [];
myFord.push('FOrd');
myFord.push(true);
//myFord.push(4500);

// --------------------------------------

let myAudi: object;
myAudi = {
    make: "Audi",
    no_of_cylinder: 4
}

let myGMC: {
    model: string,
    no_of_cylinder: number,
    isNew: boolean
}