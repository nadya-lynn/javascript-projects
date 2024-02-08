/*let tortoiseOne = {
   species: "Galapagos Tortoise",
   name: "Pete",
   weight: 919,
   age: 85,
   diet: ["pumpkins", "lettuce", "cabbage"],
   sign: function() {
      return this.name + " is a " + this.species +".";
   }
};
for (item in tortoiseOne) {
   console.log(item + ", " + tortoiseOne[item]);
}
// Using a for..in loop, iterate through each property in the tortoiseOne object and print the value to the console.

let giraffe = {
   species: "Reticulated Giraffe",
   name: "Cynthia",
   weight: 1500,
   age: 15,
   diet: "leaves",
   birthday: function() {
      return giraffe.age += giraffe.age + 1;
   }
   
 };
 console.log(tortoiseOne.sign());
 console.log(giraffe.birthday());*/

 let tortoiseTwo = {
   species: "Galapagos Tortoise",
   name: "Pete",
   weight: 919,
   age: 85,
   diet: ["pumpkins", "lettuce", "cabbage"]
};

console.log(tortoiseTwo.weight);

newWeight = tortoiseTwo.weight + 10;

tortoiseTwo["weight"] = newWeight;

console.log(tortoiseTwo["weight"]);
////


let giraffe = {
   species: "Reticulated Giraffe",
   name: "Cynthia",
   weight: 1500,
   age: 15,
   diet: "leaves"
 };
for (item in giraffe) {
   console.log(item + ", " + giraffe[item]);
}


///
let tortoiseOne = {
   species: "Galapagos Tortoise",
   name: "Pete",
   weight: 919,
   age: 85,
   diet: ["pumpkins", "lettuce", "cabbage"],
};
for (item in tortoiseOne) {
   console.log(item + ", " + tortoiseOne[item]);
}

///

let tortoiseThree = {
   age: 150,
   species: "Galapagos Tortoise",
   diet: ["pumpkins", "lettuce", "cabbage"]
};

let tortoiseFour = {
   age: 150,
   species: "Galapagos Tortoise",
   diet: ["pumpkins", "lettuce", "cabbage"]
};
console.log(tortoiseThree.age=== tortoiseFour.age);
