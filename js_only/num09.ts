// Built-in functions
// get, set

"use strict";

const obj_vege = {
    // notice the statement ends with ,
    vegetables: ["brocolli", "cauliflower", "potatoes", "xiaobaicai", "bell pepper"],
    // this vege_for_day is actually a property.
    get vege_for_today() {
      return this.vegetables.at(Math.floor((Math.random()*10) % 5));
    },
    // this favourite_vege is actually a property
    set favourite_vege(my_fav_vege: string) {
        this.vegetables.push(my_fav_vege);
    },
  };
  console.log(obj_vege.vege_for_today); // "test"
  // notice the set favourite_vege is used for assignment.
  obj_vege.favourite_vege="eggplant";
  console.log(`With my favourite vege: ${obj_vege.vegetables}`)