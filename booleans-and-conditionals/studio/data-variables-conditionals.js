// Initialize Variables below

let date = ("Date: Monday, "  +  "2019-03-18");
let time = ("Time: 10:05:34" + " AM");  
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


// add logic below to verify total number of astronauts for shuttle launch does not exceed 7

if (astronautCount <= 7 && astronautStatus === "ready") {
    preparedForLiftOff= "Prepare for Liftoff!"; 
astronautCount = ("Astronaut Count: " +7);
}
// add logic below to verify all astronauts are ready
if (astronautStatus === "ready") {
    
} 
// add logic below to verify the total mass does not exceed the maximum limit of 850000
if (totalMassKg < maximumMassLimit) {
crewMassKg = ("Crew Mass: "+ crewMassKg +" kg" );
shuttleMassKg = ("Shuttle Mass: " + shuttleMassKg + " kg");
totalMassKg = ("Total Mass: "+ totalMassKg + " kg");
}
// add logic below to verify the fuel temperature is within the appropriate range of -150 and -300
if (fuelTempCelsius >= minimumFuelTemp || fuelTempCelsius<= maximumFuelTemp) {
fuelTempCelsius = ( "Fuel Temperature: "+ fuelTempCelsius + " \u00B0C");
}
// add logic below to verify the fuel level is at 100%
if (fuelLevel === true) {

}
// add logic below to verify the weather status is clear
if (weatherStatus === "clear") {
weatherStatus = ("Weather status: " + weatherStatus);
}
// Verify shuttle launch can proceed based on above conditions
console.log("All systems are a go! Initialazing space shuttle launch sequence."); //You miss spelled shuttle, please fix it - Erick
console.log("-----------------------------------------------------------------------");
console.log(date);
console.log(time);
console.log(astronautCount);
console.log(crewMassKg);
console.log(shuttleMassKg);
console.log(totalMassKg);
console.log(fuelTempCelsius);
console.log(weatherStatus);
console.log("-----------------------------------------------------------------------");
console.log(preparedForLiftOff);
console.log("Have a safe trip, astronauts!!!");