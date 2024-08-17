"use strict";
let fifteen = Promise.resolve(15);
fifteen.then(value => console.log(`Got ${value}`));
const vege = {
    "favo": {
        "favo1": "brocolli",
        "favo2": "green peas",
        "favo3": "eggplant",
    },
    "avoid": {
        "avoid1": "carrot",
    }
};
const vege_prom = Promise.resolve(JSON.stringify(vege));
vege_prom.then(value => console.log(vege_prom));
console.log(vege["avoid"]);
const another15 = new Promise((_, reject) => reject("My failed async 345"));
another15.then(value => console.log(value))
    .catch(reason => console.log(reason));
const yetAnother15 = new Promise(((resolve, reject) => {
    resolve("My resolved async 198"),
        reject("My failed async 198");
}));
yetAnother15.then((value) => { console.log(value); }).catch((reason) => { console.log(reason); });
