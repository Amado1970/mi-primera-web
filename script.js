function cambiarColor() {
    const colores = ["#cce7ff", "#ffd6cc", "#ccffcc", "#fff0cc"];
    const colorActual = document.body.style.backgroundColor;
    let nuevo = colores[Math.floor(Math.random() * colores.length)];
    while (nuevo === colorActual) {
        nuevo = colores[Math.floor(Math.random() * colores.length)];
    }
    document.body.style.backgroundColor = nuevo;
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
