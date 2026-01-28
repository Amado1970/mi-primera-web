// Gradientes dinámicos para el fondo
const gradientes = [
  "linear-gradient(135deg, #e0f7fa, #ffffff)",
  "linear-gradient(135deg, #ffd6cc, #fff0f0)",
  "linear-gradient(135deg, #ccffcc, #f0fff0)",
  "linear-gradient(135deg, #fff0cc, #fffaf0)",
  "linear-gradient(135deg, #f0ccff, #f8f0ff)"
];
let indice = 0;

function cambiarColor() {
    indice = (indice + 1) % gradientes.length;
    document.body.style.background = gradientes[indice];
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




