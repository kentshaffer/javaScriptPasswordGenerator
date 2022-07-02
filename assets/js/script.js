// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
function generatePassword() {
  var possibleArray = []
  var passLength = parseInt(window.prompt('Number of characters (between 8 and 128)'));
  if (passLength < 8 || passLength > 128 || isNaN(passLength)){
    return 'please select a valid number between 8 and 128'
  }
  if (window.confirm('would you like lower case letters?')) { 
    possibleArray = possibleArray.concat(lowerCaseCharacters);
  }
  if (window.confirm('would you like upper case letters?')) { 
    possibleArray = possibleArray.concat(upperCaseCharacters);
  }
  if (window.confirm('would you like numbers?')) { 
    possibleArray = possibleArray.concat(numericCharacters);
  }if (window.confirm('would you like special characters?')) { 
    possibleArray = possibleArray.concat(specialCharacters);
  }
  if (possibleArray.length === 0){
    return 'please choose at least one character type';
  }
  var results = []
  for (var i = 0; i < passLength; i++){
    var index = Math.floor(Math.random()*possibleArray.length);
    var digit = possibleArray[index]
    results.push(digit)
  }
  return results.join('')
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);



var upperCaseCharacters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split(
  ''
);

var lowerCaseCharacters = 'abcdefghijklmnopqrstuvwxyz'.split(
  ''
);

var numericCharacters = '0123456789'.split(
  ''
);

var specialCharacters = '!"#$%&\'()*+,-./:;<=>?@[\\]^_`{|}~'.split(
  ''
);

console.log(upperCaseCharacters, lowerCaseCharacters, numericCharacters, specialCharacters)