// Cambiar color de fondo
const colores = ["#e0f7fa", "#ffd6cc", "#ccffcc", "#fff0cc", "#f0ccff"];
let i = 0;
function cambiarColor() {
    i = (i + 1) % colores.length;
    document.body.style.backgroundColor = colores[i];
}

// Saludo
function saludar() {
    alert("¡Hola! Bienvenido a mi portafolio 😄");
}

// Mostrar nombre dinámico
function mostrarNombre() {
    const nombre = document.getElementById("nombreInput").value;
    if(nombre.trim() === "") { alert("Escribe algo primero 😅"); return; }
    document.getElementById("nombre").innerText = nombre;
    document.getElementById("descripcion").innerText = "Bienvenido a mi portafolio interactivo!";
}

// Enviar mensaje simulado
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

// Scrollspy y botón volver arriba
const sections = document.querySelectorAll("section");
const menuLinks = document.querySelectorAll("header .menu a");
window.addEventListener("scroll", () => {
    let current = "";
    sections.forEach(section => {
        const sectionTop = section.offsetTop - 80;
        if(pageYOffset >= sectionTop) current = section.getAttribute("id");
    });
    menuLinks.forEach(link => {
        link.classList.remove("active");
        if(link.getAttribute("href") === "#" + current) link.classList.add("active");
    });

    const scrollTopBtn = document.getElementById("scrollTop");
    scrollTopBtn.style.display = (window.scrollY > 300) ? "block" : "none";
});

// Modo oscuro
function toggleDarkMode() {
    document.body.classList.toggle("dark");
}



