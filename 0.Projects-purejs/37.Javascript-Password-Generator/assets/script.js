 // Create global variables
var generateBtn = document.querySelector("#generate");
var passwordText = document.querySelector("#password");
var passLength;
var upperCase;
var lowerCase;
var withNumbers;
var symbols;

// Object to store the values of the types of password generator functions
var randomSelect = {
  hasLower: randomLower,
  hasUpper: randomUpper,
  hasNumbers: randomNumber,
  hasSymbols: randomSymbol
};

// Add event listener to generate button
generateBtn.addEventListener("click", function(){   
  passLength = +prompt('Please input desired password length, between 8 to 128 characters');
  length();
  
  // Alert message if the user input for password length is not a number
  if (isNaN(passLength)){
    alert("Please provide the input as a number");
    return false;  
  }

  else if(passLength>=8 && passLength<=128){
    upperCase = window.confirm("Would you like to use uppercase letters?");
  upper();

    lowerCase = window.confirm("Would you like to use lowercase letters?");
  lower();

    withNumbers = window.confirm("Would you like to use numbers?");
  numbers();

  symbols = window.confirm("Would you like to use symbols?");
  symbolsChar();
  } 
    
    // Alert message if the user input for password length is not between 8 to 128 characters
    else {
    window.alert('Password must be from 8 to 128 characters long');
    return false;
  }

// Store the generate password function into the textarea element in the html document
  passwordText.innerText = generatePassword(upperCase, lowerCase, withNumbers, symbols, passLength) 
});

// Create password function
function generatePassword (hasLower, hasUpper, hasNumbers, hasSymbols, passLength) {

  var generatedPassword = '';
  var typesNumber = hasLower + hasUpper + hasNumbers + hasSymbols;
 
  if(typesNumber === 0) {
    alert('No character type selected');
  }

  var typesArray = [{hasLower}, {hasUpper}, {hasNumbers}, {hasSymbols}].filter(item => Object.values(item)[0]);

  // Create a loop over the password length gererator for each type
  for (var i=0; i < passLength; i+=typesNumber) {    
    typesArray.forEach(type => {
      var passSelect = Object.keys(type)[0];      
      generatedPassword += randomSelect[passSelect]();         
    });    
  }

// The final password generated returned from the generatePassword function which is going to be stored in the passwordText (the textarea element)
  var finalPassword = (generatedPassword);
  return finalPassword;
}

// Create function for the values generated from the event listener
function length() {
 }

function upper(){
}

function lower(){  
}

function numbers(){ 
}

function symbolsChar(){ 
}

// Generator functions for the password types, i.e upper, lower, numbers and sysmbols : http://www.net-comber.com/charset.html
function randomLower(){
  return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}

function randomUpper(){
  return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}

function randomNumber(){
  return Math.floor(Math.random() * 10); 
}

function randomSymbol(){
  var symbols = "!@#$%^&*(){}[]+|\`~-=<>,?/";
  return symbols[Math.floor(Math.random() * symbols.length)];  
}


  
