function remove()
{   console.log("clicked");
    loginArea.style.display="none";
}

const loginArea = document.getElementById("login-area");
const loginBTN = document.getElementById("loginBtn");
loginBTN.addEventListener("click", remove);

