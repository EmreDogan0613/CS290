var username = [];
var password = [];

var usernameInput = document.getElementById("username");
var passwordInput = document.getElementById("password");
var messageBox  = document.getElementById("display");

function insert(){
    username.push(usernameInput.value);
    password.push(passwordInput.value);
    clearAndShow();
}

function clearAndShow(){
    usernameInput.value="";
    passwordInput.value="";
    
    messageBox.innerHTML="";
    messageBox.innerHTML+="Username: " + username.join(",")+"</br>";
    messageBox.innerHTML+="Password: " + password.join(",")+"</br>";
    
}

