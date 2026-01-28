// Modo oscuro
function toggleDarkMode() {
  document.body.classList.toggle('dark-mode');
}

// Cambiar color de fondo aleatorio
function cambiarColor() {
  const colors = ['#4a90e2', '#e94e77', '#f5a623', '#50e3c2'];
  document.body.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
}

// Saludo
function saludar() {
  alert('¡Hola! Gracias por visitar mi portafolio 😊');
}

// Mostrar nombre ingresado
function mostrarNombre() {
  const nombre = document.getElementById('nombreInput').value;
  if(nombre) alert(`Hola, ${nombre}!`);
  else alert('Escribe tu nombre primero');
}

// Enviar mensaje (solo alerta por ahora)
function enviarMensaje() {
  const nombre = document.getElementById('mensajeNombre').value;
  const email = document.getElementById('mensajeEmail').value;
  const mensaje = document.getElementById('mensajeTexto').value;
  if(nombre && email && mensaje) alert('Mensaje enviado ✅');
  else alert('Por favor completa todos los campos');
}




