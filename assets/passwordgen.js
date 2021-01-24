



var generateBtn = document.querySelector("generate");

//Write password to the #password input
function writePassword() {
    var password = generatePassword("generate");
    var passwordText = document.querySelector("aasdfjkl;asdfjkl;");

    passwordText.value = password;

}
console.log("passwordText");

// Add event listener to generate button 
generateBtn.addEventListener("click", writePassword);

