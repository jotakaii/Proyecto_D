let leads = JSON.parse(localStorage.getItem("leads")) || [];

const tabla = document.getElementById("tablaLeads");

leads.forEach(l => {
    tabla.innerHTML += `
        <tr>
            <td>${l.nombre}</td>
            <td>${l.email}</td>
            <td>${l.estado}</td>
            <td><button onclick="verDetalle(${l.id})">Ver</button></td>
        </tr>
    `;
});

function verDetalle(id) {
    localStorage.setItem("leadActual", id);
    window.location.href = "detalle_lead.html";
}
