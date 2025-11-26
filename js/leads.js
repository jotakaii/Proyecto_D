// Cargar los leads desde localStorage
let leads = JSON.parse(localStorage.getItem("leads")) || [];

// Obtener la referencia a la tabla
const tabla = document.getElementById("tablaLeads");

// Generar las filas de la tabla
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

// Función para ver detalles del lead
function verDetalle(id) {
    localStorage.setItem("leadActual", id);  // Guardamos el ID del lead
    window.location.href = "detalle_lead.html";  // Redirigimos a la página de detalle
}



// Función para eliminar un lead
function eliminarLead(id) {
    leads = leads.filter(l => l.id !== id);  // Filtramos el lead a eliminar
    localStorage.setItem("leads", JSON.stringify(leads));

    alert("Lead eliminado");
    window.location.href = "leads.html";  // Volver a la lista de leads
}
