const USER = "admin";
const PASS = "1234";

document.getElementById("loginForm").addEventListener("submit", e => {
    e.preventDefault();

    const u = document.getElementById("user").value;
    const p = document.getElementById("pass").value;
    const err = document.getElementById("error");

    if (u === USER && p === PASS) {
        err.textContent = "";
        window.location.href = "dashboard.html";
    } else {
        err.textContent = "Usuario o contraseña incorrectos";
    }
});
