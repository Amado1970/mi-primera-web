const colores = ["#cce7ff", "#ffd6cc", "#ccffcc", "#fff0cc", "#f0ccff"];
let i = 0;

function cambiarColor() {
    i = (i + 1) % colores.length;
    document.body.style.backgroundColor = colores[i];
}

function saludar() {
    alert("¡Hola! Bienvenido a mi perfil 😄");
}

function mostrarNombre() {
    const nombre = document.getElementById("nombreInput").value;
    if (nombre.trim() === "") {
        alert("Escribe algo primero 😅");
        return;
    }
    document.getElementById("nombre").innerText = nombre;
    document.getElementById("descripcion").innerText = "Bienvenido a mi web interactiva!";
}

