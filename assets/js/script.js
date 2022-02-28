// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");
var getRandomNmber = ["1","2","3","4","5"];
var getRandomUpper = ["A", "B", "C", "D"];
var getRandomLower= [ "a", "b", "c", "d"];
var getRandomSymbol= [ "#", "*", "$", "^", "%"];


//Prompt user for password criteria 8-128 characters, uppercase, lowercase, symbols
function generatePassword() {
  console.log("Button was pushed by user")
  window.prompt("How many characters do you want your passwrod to be?");

  function getRandomNmber() {
return getRandomNmber("1","2","3","4","5);
  }

  function getRandomLower() {
    return getRandomLower("a", "b", "c", "d");
  }
function getRandomSymbol() {
  return getRandomSymbol("#", "*", "$", "^", "%);
}
funtion getRandomUpper() {
  return getRandomUpper("A", "B", "C", "D");
}
window.prompt("Do you watn upper and lower?");


window.prompt("Do you want symbols?")




//Dsiplay password
  return "password generated";

}
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
