let leads = JSON.parse(localStorage.getItem("leads")) || [];

function actualizarDashboard() {
    const total = leads.length;
    const postulaciones = leads.filter(l => l.estado === "Postuló").length;
    const conversion = total > 0 ? ((postulaciones / total) * 100).toFixed(1) : 0;

    document.getElementById("totalLeads").textContent = total;
    document.getElementById("totalPostulaciones").textContent = postulaciones;
    document.getElementById("conversionRate").textContent = conversion + "%";
}

document.getElementById("logoutBtn").addEventListener("click", () => {
    window.location.href = "index.html";
});

actualizarDashboard();
