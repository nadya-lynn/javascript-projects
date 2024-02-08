function reverse(str) {
   let lettersArray = str.split('');
   let reversedLettersArray = lettersArray.reverse();
   return reversedLettersArray.join('');
}


///
function repeater(str) {
   let repeated = str + str;
   console.log(repeated);
}

repeater('Bob');


///

function plusTwo(num) {
   return num + 2;
}

let a = 2;

for (let i=0; i < 4; i++) {
   a = plusTwo(a);
}

console.log(a);


function repeater(str) {
   let repeated = str + str;
   console.log(repeated);
}

repeater('Bob');

///

function removeHyphens(str) {
 strWithoutHyphens = '';

   for (let i = 0; i < str.length; i++) {
   if (str[i] !== '-') {
       strWithoutHyphens += str[i];
   }
   }

   return strWithoutHyphens;
}

let launchCodePhone = "314-254-0107";
console.log(removeHyphens(launchCodePhone));
console.log(strWithoutHyphens);

///


let message = "Hello, World!";
message = "Goodbye";
function printMessage() {
   
    console.log(message);
}

printMessage();

printMessage();

///

let num = 42;

function isEven (num) { 
    return num % 2 === 0; 
}

console.log(isEven(43));

///

function reverse(str) {
   let reversed = '';

   for (let i = 0; i < str.length; i++) {
       reversed = str[i] + reversed;
   }
   return reversed;
}

function isPalindrome(str) {
   return reverse(str) === str;
}

///

function repeater(str) {
   let repeated = str + str;
   console.log(repeated);
}

repeater('Bob');