let signup = document.getElementById("signup_container");
let to_signup = document.getElementById("swap_signup");
let login = document.getElementById("login_container");
let to_login = document.getElementById("swap_login");
to_login.addEventListener('click', showLogin);
to_signup.addEventListener('click', showSignup);

function showSignup(){
    login.style.display = "none";
    signup.style.display = "flex";
}

function showLogin(){
    login.style.display = "flex";
    signup.style.display = "none";
}