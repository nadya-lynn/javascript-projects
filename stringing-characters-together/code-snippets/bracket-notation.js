let jsCreator = "Brendan Eich";

console.log(jsCreator[-1]);
console.log(jsCreator[42]);


let phrase = "Code for fun";
console.log(phrase[2]);

let myStr = "Index";
myStr[2] === 'n';
myStr[4] === 'x';
myStr[6] === ' ';
myStr[0] === 'I';


console.log(myStr[2]);

let firstName = "Grace";
let lastName = "Hopper";
console.log(firstName, "has", + firstName.length, "characters" );
console.log(lastName, "has", lastName.length, "characters");

let nonprofit = "LaunchCode";
console.log(nonprofit.toLowerCase());
console.log(nonprofit);

cityName = "Vienna";
stateName = "Virginia";
location = cityName + ", " + stateName;
console.log(location.length);

word = 'JavaScript';
console.log(word.toUpperCase());
console.log(word.slice(4).toUpperCase());
   
let language = "JavaScript";
language.replace('J', 'Q');
language.slice(0,5);
console.log(language);

let phrase = "JavaScript rocks!";
console.log(phrase[phrase.length - 8]);

language = "JavaScript";
console.log(language.slice(1,6));

let org = "  The LaunchCode Foundation ";
let trimmed = org.trim();

console.log(trimmed);*/

console.log("A message\nbroken across lines,\n\tand indented"); 

let emptyArray = [];

let programmingLanguages = ["JavaScript", "Python", "Java", "C#"];
let javaScriptFrameworks = [
    "React",
    "Angular",
    "Ember",
    "Vue"
];*/

let emptyArray = [];
console.log(emptyArray.length);

let programmingLanguages = ["JavaScript", "Python", "Java", "C#"];
console.log(programmingLanguages.length);

let classes = ["science, computer, art"];

let teachers = ["Jones", "Willoughby", "Rhodes"];
console.log(classes.length);
console.log(teachers.length);

let javaScriptFrameworks = ["React", "Angular", "Ember"];
console.log(javaScriptFrameworks);

// Set the value of index 2 to be "Vue"
javaScriptFrameworks[2] = "Vue";

// Notice the value at index 2 is now "Vue"
console.log(javaScriptFrameworks);

let charles = ['coder', 'Tech', 47, 23, 350];
charles.sort();
console.log(charles);

let groceryBag = ['bananas', 'apples', 'edamame', 'chips', 'cucumbers', 'milk', 'cheese'];
let selectedItems = [];

selectedItems = groceryBag.slice(2, 5).sort();
console.log(selectedItems);

	


	
let shuttleCrews = [
    ['Robert Gibson', 'Mark Lee', 'Mae Jemison'],
    ['Kent Rominger', 'Ellen Ochoa', 'Bernard Harris'],
    ['Eilen Collins', 'Winston Scott',  'Catherin Coleman']
];

let newCrew = ['Mark Polansky', 'Robert Curbeam', 'Joan Higginbotham'];

// Add a new crew array to the end of shuttleCrews
shuttleCrews.push(newCrew);
console.log(shuttleCrews[3][2]);

// Reverse the order of the crew at index 1
shuttleCrews[1].reverse();
console.log(shuttleCrews[1]);



let school = [
    ["science", "computer", "art"],
    ["Jones", "Willoughby", "Rhodes"]
];
console.log(school[1][0]);

let newSchool = ("dance", "Holmes");
school.push(newSchool);
school[0][0] = "dance";
school[1] [1]= "Holmes";

console.log(school);