// Declare and assign the variables below

let nameOfSpaceShuttle = "Determination";
let shuttleSpeedMiles = 17500;
let distanceToMarsKm = 225000000;
let distanceToTheMoonKm = 384400;
const milesPerKm = 0.621;

// Use console.log to print the 'typeof' each variable. Print one item per line.
console.log(typeof "Determination");
console.log(typeof "17500");
console.log(typeof "225000000");
console.log(typeof "distanceToMars");
console.log(typeof "distanceToTheMoon");
console.log(typeof "milesPerKm");

// Calculate a space mission below
let milesToMars = (distanceToMarsKm * milesPerKm);
console.log(milesToMars);
let hoursToMars = milesToMars / shuttleSpeedMiles;
console.log(hoursToMars);
let daysToMars = hoursToMars / 24;
console.log(daysToMars);
let spaceMissionToMars = nameOfSpaceShuttle + " will take " + daysToMars + " days to reach Mars!";

// Print the results of the space mission calculations below
console.log(spaceMissionToMars);

// Calculate a trip to the moon below

let milesToTheMoonKm = (distanceToTheMoonKm * milesPerKm);
let hoursToTheMoon = (milesToTheMoonKm * shuttleSpeedMiles);
let daysToTheMoon = (hoursToTheMoon / 24);

// Print the results of the trip to the moon below//

let spaceMissionToTheMoon = nameOfSpaceShuttle + " will take " + daysToTheMoon + " days to reach The Moon!";
console.log(spaceMissionToTheMoon);