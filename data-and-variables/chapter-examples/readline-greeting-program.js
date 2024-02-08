const input = require('readline-sync');

let name = input.question("Enter your name: ");
console.log("Hello! " + name +"!");
let billHasBeenPaid = false;

if (!billHasBeenPaid) {
   console.log("Your bill is due soon!");
} else {
    console.log("Your payments are up to date!");
}