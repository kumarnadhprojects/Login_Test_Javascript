let inputElement = document.getElementById("inputElement");
let signIntext = document.getElementById("signinText");

function signIn() {
    let inputValue = inputElement.value;
    let values = "Hi " + inputValue + ", checking values......!";
    signIntext.textContent = values;
}