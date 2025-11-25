// Usuario y contraseña simulados
const USER = "admin";
const PASS = "1234";

document.getElementById("loginForm").addEventListener("submit", function(e) {
    e.preventDefault();

    const userInput = document.getElementById("user").value;
    const passInput = document.getElementById("pass").value;
    const errorMsg = document.getElementById("error");

    if (userInput === USER && passInput === PASS) {
        errorMsg.textContent = "";
        // Redirigir al dashboard
        window.location.href = "dashboard.html";
    } else {
        errorMsg.textContent = "Usuario o contraseña incorrectos";
    }
});
