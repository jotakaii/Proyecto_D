document.getElementById("leadForm").addEventListener("submit", function(e) {
    e.preventDefault();  // Evitamos el comportamiento por defecto del formulario

    let leads = JSON.parse(localStorage.getItem("leads")) || [];

    let lead = {
        id: Date.now(),  // Generamos un ID único
        nombre: document.getElementById("nombre").value,
        email: document.getElementById("email").value,
        telefono: document.getElementById("telefono").value,
        carrera: document.getElementById("carrera").value,
        estado: document.getElementById("estado").value
    };

    leads.push(lead);  // Agregamos el nuevo lead al array
    localStorage.setItem("leads", JSON.stringify(leads));  // Guardamos los leads en localStorage

    alert("Lead registrado con éxito");
    window.location.href = "leads.html";  // Redirigimos a la lista de leads
});
