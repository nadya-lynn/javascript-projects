// Initialize Variables below

let date = ("Date: Monday: "  +  "2019-03-18");
let time = ("Time: 10:05:34" + "AM");  
let astronautCount = 7;
let astronautStatus = "ready";
let averageAstronautMassKg = 80.7;
let crewMassKg = astronautCount * averageAstronautMassKg;
let fuelMassKg = 760000;
let shuttleMassKg = 74842.31;
let totalMassKg = crewMassKg + fuelMassKg + shuttleMassKg;
let maximumMassLimit = 850000;
let fuelTempCelsius = -225; 
let minimumFuelTemp = -300;
let maximumFuelTemp = -150;
let fuelLevel = "100%";
let weatherStatus = "clear";
let preparedForLiftOff = true; 
let message = "Have a safe trip!!!!";

// add logic below to verify total number of astronauts for shuttle launch does not exceed 7

if (astronautCount <= 7 && astronautStatus === "ready") {
    preparedForLiftOff= "Prepare for Loftoff!";

}
// add logic below to verify all astronauts are ready
if (astronautStatus === "ready") {

} 
// add logic below to verify the total mass does not exceed the maximum limit of 850000
if (totalMassKg < maximumMassLimit) {

}
// add logic below to verify the fuel temperature is within the appropriate range of -150 and -300
if (fuelTempCelsius >= minimumFuelTemp ||  maximumFuelTemp) {

}
// add logic below to verify the fuel level is at 100%
if (fuelLevel === true) {

}
// add logic below to verify the weather status is clear
if (weatherStatus === true) {

}
// Verify shuttle launch can proceed based on above conditions
console.log("All systems are a go! Initialazing space shuttele launch sequence.");
console.log("-----------------------------------------------------------------------");
console.log("Date: " + date);
console.log(time);
console.log(astronautCount);
console.log(crewMassKg);
console.log(shuttleMassKg);
console.log(totalMassKg);
console.log(fuelTempCelsius);
console.log(weatherStatus);
console.log(preparedForLiftOff);
console.log("-----------------------------------------------------------------------");
console.log(message);
