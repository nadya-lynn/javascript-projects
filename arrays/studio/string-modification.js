const input = require('readline-sync');
let str = "LaunchCode";

//1) Use string methods to remove the first three characters from the string and add them to the end.
str = str.slice(3) + str.slice(0, 3)
console.log(str);
//Hint - define another variable to hold the new string or reassign the new string to str.
let newStr = str;

//Use a template literal to print the original and modified string in a descriptive phrase.

console.log(`The old string was ${str} and then became a new phrase ${newStr}`);

//2) Modify your code to accept user input. Query the user to enter the number of letters that will be relocated.

let user = input.question("Enter the number of letters that will be relocated:  ");

//3) Add validation to your code to deal with user inputs that are longer than the word. In such cases, default to moving 3 characters. Also, the template literal should note the error.
let num = parseInt(user);
if (num === 3) {
    console.log(`Great guess. You're correct!`);
} if (num > 3 || num < 3) {
    console.log(`You're wrong. The new phrase has 3 characters relocated in ${str}`);
}

