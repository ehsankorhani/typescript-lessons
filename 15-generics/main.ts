// const addUID = (obj: object) => {
//     let uid = Math.floor(Math.random() * 1000);
//     return {...obj, uid};
// }

// const addUID = <T>(obj: T) => {
//     let uid = Math.floor(Math.random() * 1000);
//     return {...obj, uid};
// }

// const addUID = <T extends object>(obj: T) => {
//     let uid = Math.floor(Math.random() * 1000);
//     return {...obj, uid};
// }

const addUID = <T extends { make: string }>(obj: T) => {
    let uid = Math.floor(Math.random() * 1000);
    return {...obj, uid};
}

const myJeep = addUID({make: "Jeep", model: "Cherokee"})

let model = myJeep.model;

//const myJeep = addUID('hello kitty!');

interface ICar<T> {
    uid: number;
    make: string;
    data: T
}

const myRanger: ICar<string> = {
    uid: 1,
    make: "Ford",
    data: "New"
}