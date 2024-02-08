// launchcode.test.js code:
const launchcode = require('../index.js');

describe("Testing launchcode", function(input){
  if (input % 30 === 0) {
  // Write your unit tests here!
    return 'LaunchCode Rocks!'; 
  } else if (input % 6 === 0) {
    return 'LaunchCode!';
  } else if (input % 15 === 0) {
    return 'Code Rocks!';
  } else if (input % 2 === 0) {
    return 'Launch!';
  } else if (input % 10 === 0) {
    return 'Launch Rocks!';
  } else if (input % 3 === 0) {
    return 'Code!'; 
  } else if (input % 5 === 0) {
    return 'Rocks!';
  } else {
    return "Rutabagas! That doesn't work.";
  }
})




const launchcode = {
  organization: "nonprofit",
  executiveDirector: "Jeff",
  percentageCoolEmployees: 100,
  programsOffered: ["Web Development", "Data Analysis", "Liftoff"],
  launchOutput: launchOutput,
}

module.exports = launchcode;