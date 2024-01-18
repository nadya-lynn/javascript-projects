let num = 1001;

//Returns 'undefined'.
console.log(num.length);

//Use type conversion to print the length (number of digits) of an integer.

num = num.toString().length
console.log(num);

num = num.toFixed();
console.log(num);

num.indexOf(num);
console.log(num);


num = String(num);
console.log(num);

//Follow up: Print the number of digits in a DECIMAL value (e.g. num = 123.45 has 5 digits but a length of 6).

num = (num/100).toFixed(5);
console.log(num);
//Experiment! What if num could be EITHER an integer or a decimal?  Add an if/else statement so your code can handle both cases.


if (String(num).includes(".")) {
    console.log(String(num).length-1);
} else {
    console.log(num.length);
}