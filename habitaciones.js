document.addEventListener("DOMContentLoaded", function () {
  
  const usuarioLogueado = window.localStorage.getItem("usuarioLogueado");

  // Si no está logueado, redirigir al login
  if (!usuarioLogueado) {
    alert("Debes iniciar sesión para hacer una reserva.");
    window.location.href = "./login/login.html"; // Redirige al login si no está logueado
  }
    // Obtener las habitaciones desde la API
  fetch("http://localhost:3000/habitaciones")
    .then((response) => response.json())
    .then((habitaciones) => {
      const habitacionesContainer = document.getElementById(
        "habitaciones-container"
      );

      // Si no hay habitaciones, mostrar un mensaje
      if (habitaciones.length === 0) {
        habitacionesContainer.innerHTML =
          "<p>No hay habitaciones disponibles en este momento.</p>";
        return;
      }

      // Mostrar habitaciones disponibles
      habitaciones.forEach((habitacion) => {
        const habitacionDiv = document.createElement("div");
        habitacionDiv.classList.add("habitacion");

        habitacionDiv.innerHTML = `
          <h2>${habitacion.nombre}</h2>
          <p>Total: ${habitacion.total}</p>
          <p>Disponibles: ${habitacion.disponibles}</p>
          <button class="bg-[#11ccc7]">
            <a href="./reservas.html?id=${habitacion.id}">Reserva YA</a>
          </button>
        `;

        habitacionesContainer.appendChild(habitacionDiv);
      });
    })
    .catch((error) => {
      console.error("Error al obtener las habitaciones:", error);
    });
});
