// Assignment Code
var generateBtn = document.querySelector("#generate");
var uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split("");
var lowercase = 'abcdefghijklmnopqrstuvwxyz'.split("");
var symbols = '~!@#$%^&*()_+=|?><'.split("");
var numbers = '1234567890'.split("");
var needUpper = document.getElementById ("needUpper");
var needSymbol = document.getElementById ("needSymbol");
var needNumber = document.getElementById ("needNumber");
var passLength = document.getElementById ("passLength");

// Write password to the #password input
function writePassword() { 
  // var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
  var integerPass = parseFloat(passLength.value);
  
  var outputPass = [];
  // var outputString = outputPass.toString();

  for (let i = 0; i < integerPass; i++) {
      outputPass.push(lowercase[Math.floor(Math.random()*lowercase.length)]);
      console.log(outputPass)
  }

  return outputPass.join("");
  
  // if (return === Array) {
  //   outputPass
  }

console.log(writePassword());

function genRandomChar (arr) {
  var inputCharacter = arr[Math.floor(Math.random()*arr.length)];
  return inputCharacter;
}

uppercase [Math.floor(Math.random()*uppercase.length)];
console.log (uppercase);



// Add event listener to generate button
generateBtn.addEventListener("click", function (){
  var passResult= writePassword();
  var lowerStart= lowercase
  //Uppercase included if/else statement
  if (needUpper.checked) {
    var randomUpper=genRandomChar(uppercase);
    passResult+= uppercase[randomSymbol]
  };
  console.log(genRandomChar(randomUpper));
  //Symbols included if/else statement
  if (needSymbol.checked) {
    var randomSymbol=genRandomChar(symbols);
    passResult+= symbols[randomSymbol]
  };
  //Numbers included if/else statement
  if (needNumber.checked) {
    var randomNumber=genRandomChar(numbers);
    passResult+= numbers[randomNumber]
  };
  password.value=writePassword();
})


