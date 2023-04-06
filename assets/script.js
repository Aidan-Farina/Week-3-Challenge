// references the button class and password id in the html
var generateButton = document.querySelector(".btn");
var passwordDisplay = document.querySelector("#password")

// the function that generates and displays the password
function generatePassword() {
  //input
  var length = parseInt(prompt("How long do you want the password to be? (8-128)"))

  //confirmation of password length
  if(isNaN(length) || length < 8 || length > 128) {
    alert("Password must be between 8 and 128 characters.");
    return;
  }
//all possible characters
  var characterTypes = [
    {name: " lowercase ", characters: "abcdefghijklmnopqrstuvwxys"},
    {name: " uppercase ", characters: "ABCDEFGHIJKLMNOPQRTSUVWXYZ"},
    {name: " numbers ", characters: "1234567890"},
    {name: " special  characters", characters: "!@#$%^&*"},
  ];
//this allows the user to select which tpyes of characters they would to include in the password
  var selectedTypes = [];
  for (var i = 0; i < characterTypes.length; i++) {
    var includeType = confirm("include" + characterTypes[i].name +  "?")
    if(includeType){
      selectedTypes.push(characterTypes[i].characters)
    }
  }
//confirms you need to have something
  if (selectedTypes.length == 0) {
    alert("have to include a character type");
    return;
  }
//combimes selected characters
  var characters = selectedTypes.join("");

// randomizes the selected character types and give the final password
var password = ""
  for (var i = 0; i < length; i++) {
    var randomCharacters = Math.floor(Math.random() * characters.length);
    password += characters.charAt(randomCharacters);
  }
  //displays the final password in the password box
  passwordDisplay.innerHTML = password;
}
//makes it so that if i click the generate password button the function generate password will be run.
generateButton.addEventListener("click", generatePassword);