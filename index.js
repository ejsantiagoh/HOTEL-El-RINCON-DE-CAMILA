import { cerrarSesion } from "./sesiones.js";

document.addEventListener("DOMContentLoaded", function () {
  const usuarioLogueado = window.localStorage.getItem("usuarioLogueado");
  const loginButton = document.getElementById("loginButton");
  const registerButtonWrapper = document.getElementById(
    "registerButtonWrapper"
  );

  console.log("Usuario logueado:", usuarioLogueado); // Verifica si está correctamente en localStorage

  // Si hay un usuario logueado
  if (usuarioLogueado) {
    loginButton.textContent = "Cerrar sesión";
    loginButton.href = "#"; // No redirige al login, sino que ejecuta cerrar sesión
    loginButton.addEventListener("click", function () {
      cerrarSesion();
    });

    // Ocultar el botón de "Registrar"
    registerButtonWrapper.classList.add("hidden");
    console.log("Botón de registrar ocultado"); // Verifica si la clase 'hidden' se agrega correctamente
  } else {
    // Si no está logueado, el botón de login aparece y el de registro también
    loginButton.textContent = "¡Iniciar sesión!";
    loginButton.href = "./login/login.html"; // Redirige al formulario de login

    // Mostrar el botón de "Regístrate!"
    registerButtonWrapper.classList.remove("hidden");
    console.log("Botón de registrar visible"); // Verifica si la clase 'hidden' se elimina correctamente
  }
});


document.addEventListener("DOMContentLoaded", function () {
  const menuToggle = document.getElementById("menuToggle");
  const menu = document.getElementById("menu");

  // Función para alternar el menú de hamburguesa en pantallas pequeñas
  menuToggle.addEventListener("click", function () {
    menu.classList.toggle("hidden"); // Alterna la visibilidad del menú
  });
});