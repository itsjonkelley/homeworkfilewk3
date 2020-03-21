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
console.log(uppercase)


//set length to what they choose
//set 1,2,3

//start off sequential
//true use array, false not use array

// Write password to the #password input
function writePassword() { 
  // var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
  var integerPass = parseFloat(passLength.value);
  
  var outputPass = [];

  for (let i = 0; i < integerPass; i++) {
    //  outputPass += lowercase.charAt(Math.floor(Math.random()*passLength));
      // outputPass += lowercase[Math.floor(Math.random()*lowercase.length)];
      outputPass.push(lowercase[Math.floor(Math.random()*lowercase.length)]);
      console.log(outputPass)
  }
  return outputPass;
}
console.log(writePassword());

// var randomUppercase = uppercase[Math.floor(Math.random()*uppercase.length)];
// console.log(randomUppercase)


// Add event listener to generate button
generateBtn.addEventListener("click", function (event){
  event.preventDefault();
  var lowerStart= lowercase
  //Uppercase included if/else statement
  if (needUpper.checked) { 
    lowerStart +=uppercase;
  } 
  //Symbols included if/else statement
  if (needSymbol.checked) {
    lowerStart +=symbols;
  }
  //Numbers included if/else statement
  if (needNumber.checked) {
    lowerStart +=numbers;
  }
  password.value=writePassword()
})



// function continuePullUpper(){
//   for (let i = 0; index < integerPass; i++) {
//     outputPass.push(uppercase[Math.floor(Math.random()*uppercase.length)]);
//       console.log(outputPass)
//   }
//   return outputPass;
// }
// function continuePullSymbol(){
//   for (let i = 0; index < integerPass; i++) {
//     outputPass.push(symbols[Math.floor(Math.random()*symbols.length)]);
//       console.log(outputPass)  
//   }
//   return outputPass;
// }
// function continuePullNumber(){
//   for (let i = 0; index < integerPass; i++) {
//     outputPass.push(numbers[Math.floor(Math.random()*numbers.length)]);
//       console.log(outputPass)  
//   }
//   return outputPass;
// }






