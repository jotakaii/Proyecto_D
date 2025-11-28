document.getElementById("leadForm").addEventListener("submit", function(e) {
    e.preventDefault();  

    let leads = JSON.parse(localStorage.getItem("leads")) || [];

    let lead = {
        id: Date.now(),  
        nombre: document.getElementById("nombre").value,
        email: document.getElementById("email").value,
        telefono: document.getElementById("telefono").value,
        carrera: document.getElementById("carrera").value,
        estado: document.getElementById("estado").value
    };

    leads.push(lead);  
    localStorage.setItem("leads", JSON.stringify(leads));  

    alert("Lead registrado con éxito");
    window.location.href = "leads.html";  
});
