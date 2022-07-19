var usernameError = document.getElementById('username error');
var emailError = document.getElementById('email error');
var phoneError = document.getElementById('phone number error');
var passwordError = document.getElementById('password error');
var passError = document.getElementById('pass error');
var genError = document.getElementById('gender error');
var subError = document.getElementById('submit error');

function validateName(){
    var name = document.getElementById('user-name').value;
    if (name.length == 0){
        usernameError.innerHTML = "Username ie required";
        return false;}

    if(!name.match(/^[A-Za-z]*/)){
            usernameError.innerHTML="Write full name";
            return false;
        }
    usernameError.innerHTML = "Valid";
        return true;
        }
    
function validateMail(){
    var mail =document.getElementById('e-mail').value;
    if (mail.length == 0){
        emailError.innerHTML ="Invalid email";
        return false;
    }
    emailError.innerHTML = "valid"
    return true;
}

function validateNumber(){
    var num = document.getElementById('num-ber').value;
    if(num.length == 0){
        phoneError.innerHTML = "Phone number is required";
        return false;
    }
    if (num.length != 11){
        phoneError.innerHTML = "Complete your phone number";
        return false;
    }
    if(!num.match(/^[0-9]{11}$/)){
        phoneError.innerHTML = "Invalid phone number";
        return false;}

    phoneError.innerHTML = "Valid";
    return true;
    
}

function validatePass(){
    var passW = document.getElementById("pass-word").value;
    if(passW.length == 0){
        passwordError.innerHTML = "Password is invalid";
        return false;
    }
    passwordError.innerHTML = "valid";
    return true;
}

function validateWord(){
    var passA = document.getElementById('pass').value;
    if(passA.length == 0){
        passError.innerHTML = "Invalid entry";
        return false;
    }
    if (!passA.match (/passW/)){
        passError.innerHTML = "Invalid password";
        return false;
    }
    passError.innerHTML = "valid";
    return true;
}

function validateForm(){
    if(!validateName() || !validateNumber() || validateMail() || validatePass() || validateWord()){
        subError.innerHTML = "All fields are required";
        return false;
    }
}