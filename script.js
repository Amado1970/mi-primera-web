const colores = ["#cce7ff", "#ffd6cc", "#ccffcc", "#fff0cc", "#f0ccff"];
let i = 0;

function cambiarColor() {
    i = (i + 1) % colores.length;
    document.body.style.backgroundColor = colores[i];
}

function saludar() {
    alert("¡Hola! Bienvenido a mi portafolio 😄");
}

function mostrarNombre() {
    const nombre = document.getElementById("nombreInput").value;
    if(nombre.trim() === "") { alert("Escribe algo primero 😅"); return; }
    document.getElementById("nombre").innerText = nombre;
    document.getElementById("descripcion").innerText = "Bienvenido a mi portafolio interactivo!";
}

function enviarMensaje() {
    const nombre = document.getElementById("mensajeNombre").value;
    const email = document.getElementById("mensajeEmail").value;
    const mensaje = document.getElementById("mensajeTexto").value;

    if(!nombre || !email || !mensaje) { alert("Completa todos los campos 😅"); return; }

    alert(`¡Gracias, ${nombre}! Tu mensaje fue enviado (simulado).`);
    document.getElementById("mensajeNombre").value = "";
    document.getElementById("mensajeEmail").value = "";
    document.getElementById("mensajeTexto").value = "";
}
// Resaltar sección activa en el menú
const sections = document.querySelectorAll("section");
const menuLinks = document.querySelectorAll("header .menu a");

window.addEventListener("scroll", () => {
    let current = "";

    sections.forEach(section => {
        const sectionTop = section.offsetTop - 70; // altura del header
        if(pageYOffset >= sectionTop) {
            current = section.getAttribute("id");
        }
    });

    menuLinks.forEach(link => {
        link.classList.remove("active");
        if(link.getAttribute("href") === "#" + current) {
            link.classList.add("active");
        }
    });
});


