let leads = JSON.parse(localStorage.getItem("leads")) || [];

const tabla = document.getElementById("tablaLeads");

leads.forEach(l => {
    tabla.innerHTML += `
        <tr>
            <td>${l.nombre}</td>
            <td>${l.email}</td>
            <td>${l.estado}</td>
            <td>
                <button onclick="verDetalle(${l.id})">Ver</button>
                <button onclick="eliminarLead(${l.id})">Eliminar</button>  <!-- Botón para eliminar -->
            </td>
        </tr>
    `;
});

function verDetalle(id) {
    localStorage.setItem("leadActual", id);  
    window.location.href = "detalle_lead.html"; 
}





function eliminarLead(id) {
    
    confirm("¿Estás seguro de que quieres eliminar este Lead?"); 

    leads = leads.filter(l => l.id !== id);  
    localStorage.setItem("leads", JSON.stringify(leads));

    window.location.href = "leads.html";  
}