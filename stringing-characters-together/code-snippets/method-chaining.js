//String methods can be combined in a process called method chaining.

let word = 'JavaScript';

console.log(word.toUpperCase());
//Returns ``JAVASCRIPT``

//What does ``word.slice(4).toUpperCase()`` return?


//Experiment with other combinations (chains) of string methods.


let javaScriptFrameworks = ["React", "Angular", "Ember"];
console.log(javaScriptFrameworks);

// Set the value of index 2 to be "Vue"
javaScriptFrameworks[2] = "Vue";

// Notice the value at index 2 is now "Vue"
console.log(javaScriptFrameworks);


let school = [
    ["science", "computer", "art"],
    ["Jones", "Willoughby", "Rhodes"]
];
school[0].push("dance");
school[1].push("Holmes");
console.log(school.length);

