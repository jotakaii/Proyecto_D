// Archivo: js/admision.js (Código para el formulario público)

document.getElementById("leadForm").addEventListener("submit", function(e) {
    e.preventDefault();  

    let leads = JSON.parse(localStorage.getItem("leads")) || [];

    let lead = {
        id: Date.now(),  
        nombre: document.getElementById("nombre").value,
        email: document.getElementById("email").value,
        telefono: document.getElementById("telefono").value,
        carrera: document.getElementById("carrera").value,
        // *** CAMBIO CRÍTICO: El estado SIEMPRE es "Nuevo" para la entrada automática. ***
        estado: "Nuevo" 
    };

    leads.push(lead);  
    localStorage.setItem("leads", JSON.stringify(leads));  

    alert("¡Postulación enviada con éxito! Su solicitud está siendo procesada.");
    
    // Lo redirige a la página de login (o una página de gracias)
    window.location.href = "index.html"; 
});