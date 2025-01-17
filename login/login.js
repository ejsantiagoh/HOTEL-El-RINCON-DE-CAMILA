import { localSesioness } from "../sesiones.js";

document
  .getElementById("registroForm")
  .addEventListener("submit", function (e) {
    e.preventDefault();

    const usuario = document.getElementById("usuario").value;
    const password = document.getElementById("password").value;
    // const telefono = document.getElementById("telefono").value;

    // Enviar los datos al servidor
    fetch("http://localhost:3000/usuarios", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        usuario,
        password,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        
        // Redirigir al usuario al index (home)
        window.location.href = "../index.html";
        localSesioness(usuario,password);
        alert("Registro guardado correctamente");
      })
      .catch((error) => {
        alert("Error al guardar el registro", error);
      });
  });
