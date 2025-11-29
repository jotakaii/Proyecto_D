// Archivo: js/admision.js (Maneja el envío del formulario público)

document.getElementById("leadForm").addEventListener("submit", function(e) {
    e.preventDefault();  

    let leads = JSON.parse(localStorage.getItem("leads")) || [];

    let lead = {
        id: Date.now(),  
        nombre: document.getElementById("nombre").value,
        email: document.getElementById("email").value,
        telefono: document.getElementById("telefono").value,
        carrera: document.getElementById("carrera").value,
        
        estado: "Nuevo" 
    };

    leads.push(lead);  
    localStorage.setItem("leads", JSON.stringify(leads));  



    document.getElementById("leadForm").style.display = "none"; 

    const container = document.querySelector('.container');
    container.innerHTML = `
        <div style="text-align: center; padding: 40px; background-color: #e6ffe6; border: 1px solid #c6f6c6; border-radius: 8px;">
            <h1 style="color: #28a745;">✅ ¡Postulación Hecha con Éxito!</h1>
            <p style="font-size: 1.1em; margin-top: 20px;">
                Tu solicitud ha sido enviada a la Plataforma de Admisión Automatizada.
                En breve recibirás un correo electrónico de confirmación.
            </p>
            <button onclick="window.location.href='index.html'" 
                    style="margin-top: 30px; padding: 10px 20px; font-size: 1em; background-color: #007bff; color: white; border: none; border-radius: 5px; cursor: pointer;">
                Volver a la Página Principal
            </button>
        </div>
    `;
    
});