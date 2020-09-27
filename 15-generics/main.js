// const addUID = (obj: object) => {
//     let uid = Math.floor(Math.random() * 1000);
//     return {...obj, uid};
// }
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
// const addUID = <T>(obj: T) => {
//     let uid = Math.floor(Math.random() * 1000);
//     return {...obj, uid};
// }
// const addUID = <T extends object>(obj: T) => {
//     let uid = Math.floor(Math.random() * 1000);
//     return {...obj, uid};
// }
var addUID = function (obj) {
    var uid = Math.floor(Math.random() * 1000);
    return __assign(__assign({}, obj), { uid: uid });
};
var myJeep = addUID({ make: "Jeep", model: "Cherokee" });
var model = myJeep.model;
var myRanger = {
    uid: 1,
    make: "Ford",
    data: "New"
};
