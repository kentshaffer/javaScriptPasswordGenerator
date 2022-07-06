// Assignment Code
var generateBtn = document.querySelector("#generate");

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
    return 'Please Select A Valid Number Between 8 And 128'
  }
  if (window.confirm('Would you like lower case letters? ("OK" for yes or "Cancel" for no)')) { 
    possibleArray = possibleArray.concat(lowerCaseCharacters);
  }
  if (window.confirm('Would you like upper case letters? ("OK" for yes or "Cancel" for no)')) { 
    possibleArray = possibleArray.concat(upperCaseCharacters);
  }
  if (window.confirm('Would you like numbers? ("OK" for yes or "Cancel" for no)')) { 
    possibleArray = possibleArray.concat(numericCharacters);
  }
  if (window.confirm('Would you like special characters? ("OK" for yes or "Cancel" for no)')) { 
    possibleArray = possibleArray.concat(specialCharacters);
  }
  if (possibleArray.length === 0){
    return 'Please Choose At Least One Character Type';
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
