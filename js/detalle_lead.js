let leads = JSON.parse(localStorage.getItem("leads")) || [];
let id = localStorage.getItem("leadActual");

let lead = leads.find(l => l.id == id);

document.getElementById("detalleBox").innerHTML = `
    <h3>${lead.nombre}</h3>
    <p><strong>Email:</strong> ${lead.email}</p>
    <p><strong>Teléfono:</strong> ${lead.telefono}</p>
    <p><strong>Carrera:</strong> ${lead.carrera}</p>

    <label>Estado</label>
    <select id="estadoLead">
        <option ${lead.estado === "Nuevo" ? "selected" : ""}>Nuevo</option>
        <option ${lead.estado === "En seguimiento" ? "selected" : ""}>En seguimiento</option>
        <option ${lead.estado === "Postuló" ? "selected" : ""}>Postuló</option>
    </select>

    <button onclick="guardarEstado()">Guardar</button>
`;

function guardarEstado() {
    lead.estado = document.getElementById("estadoLead").value;
    localStorage.setItem("leads", JSON.stringify(leads));
    alert("Estado actualizado");
}
