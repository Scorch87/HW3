// Assignment code here
//Eli Pruneda 12/20/2022

//Need to create a password with the given criteria.
//Criteria: length (8-128 chars, char types (lower, upper, numeric, special))
function generatePassword(){
  console.log("Password generator initiated...");
  var charNum = prompt("Enter the desired number of characters- must be between 8-128 characters.");
  console.log("PW length:", charNum);

  //Input validation
  if (charNum<7 || charNum>129){
    alert("Invalid input. Please enter an integer =>8 and =<128");
    return;
  }
  var charLower = prompt("Do you want lowercase characters in your password? (y/n)");
  console.log("Lowercase: ", charLower);
  if (charLower !== "y" && charLower !== "n"){
    alert("Invalid input. Please enter 'y' or 'n'");
    return;
  }
  var charUpper = prompt("Do you want uppercase characters in your password? (y/n)");
  console.log("Lowercase: ", charUpper);
  if (charUpper !== "y" && charUpper !== "n"){
    alert("Invalid input. Please enter 'y' or 'n'");
    return;
  }
  var numeric = prompt("Do you want numbers in your password? (y/n)");
  console.log("Numbers: ",numeric);
  if (numeric !== "y" && numeric !== "n"){
    alert("Invalid input. Please enter 'y' or 'n'");
    return;
  }
  var charSpec = prompt("Do you want special characters in your password? (y/n)");
  console.log("Special chars: ", charSpec);
  if (charSpec !== "y" && charSpec !== "n"){
    alert("Invalid input. Please enter 'y' or 'n'");
    return;
  }

  if (charLower == "n" && charUpper == "n" && numeric == "n" && charSpec == "n"){
    alert("Your password can't be made up of thin air! Enter 'y' for at least one criteria.");
    return;
  }

  //Password Creation
  //need to create a string that has random characters based on the criteria retrieved.
  //Each string is an array- we can tap into these using array methods and Math.floor/.random()
  //This idea was inspired by stackoverflow: https://stackoverflow.com/questions/10726909/random-alpha-numeric-string-in-javascript
  var rand = "";
  if(charLower.indexOf('y') > -1) rand += 'abcdefghijklmnopqrstuvwxyz';
  if(charUpper.indexOf('y') > -1) rand += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  if(numeric.indexOf('y') > -1) rand += "0123456789";
  if(charSpec.indexOf('y') > -1) rand += " !'#$%&()*+-,./;:<>=?@[]^_`{}~";
  var result = "";
  for (var i =charNum; i>0; i--){
    result += rand[Math.floor(Math.random()*rand.length)];
  }
  console.log(result);
  return result;
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  //Notify error in case this doesn't work.
  if (password == undefined){
    password = "Error, try again.";
  }
  passwordText.value = password;
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
