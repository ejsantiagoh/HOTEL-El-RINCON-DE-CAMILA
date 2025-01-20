document.addEventListener("DOMContentLoaded", function () {
  const btnDisponibilidad = document.getElementById("disponibilidad");
  const btnReservar = document.getElementById("reservar");
  const modalCalendar = document.createElement("div");
  modalCalendar.id = "modal-calendar";
  modalCalendar.style.display = "none"; // Inicialmente oculto

  // Crear el modal para el calendario
  modalCalendar.innerHTML = `
    <div id="calendar-container" class="fixed inset-0 bg-gray-500 bg-opacity-50 flex items-center justify-center z-50">
      <div class="bg-white p-4 rounded-lg">
        <h2 class="text-xl font-semibold mb-2">Selecciona las fechas disponibles</h2>
        <input type="text" id="calendar" class="flatpickr" placeholder="Selecciona una fecha">
        <button id="closeCalendar" class="mt-3 bg-red-500 text-white p-2 rounded-lg">Cerrar</button>
      </div>
    </div>
  `;
  document.body.appendChild(modalCalendar);

  // Inicializar Flatpickr para el calendario
  flatpickr("#calendar", {
    minDate: "today", // No se pueden seleccionar fechas anteriores
    onChange: function (selectedDates, dateStr, instance) {
      console.log("Fecha seleccionada:", dateStr);
    },
  });

  // Mostrar el modal del calendario
  btnDisponibilidad.addEventListener("click", function () {
    modalCalendar.style.display = "block"; // Mostrar el modal
  });

  // Cerrar el modal
  document
    .getElementById("closeCalendar")
    .addEventListener("click", function () {
      modalCalendar.style.display = "none"; // Cerrar el modal
    });

  // Manejar la reserva
  btnReservar.addEventListener("click", function () {
    const usuarioId = localStorage.getItem("usuarioLogueado"); // Obtener el ID del usuario logueado

    if (!usuarioId) {
      alert("Debes iniciar sesión para realizar una reserva.");
      return; // Detener la acción si el usuario no está logueado
    }

    // Obtener la fecha seleccionada del calendario
    const fechaInicio = document.getElementById("calendar").value;
    if (!fechaInicio) {
      alert("Por favor, selecciona una fecha.");
      return;
    }

    const fechaFin = new Date(fechaInicio);
    fechaFin.setDate(fechaFin.getDate() + 1); // La reserva es por 1 día por defecto

    // Crear la reserva en el servidor (json-server)
    const reserva = {
      habitacionId: 1, // Suponiendo que la habitación es la 1, puedes cambiar esto
      fechaInicio: fechaInicio,
      fechaFin: fechaFin.toISOString().split("T")[0],
      usuarioId: usuarioId,
    };

    // Enviar la reserva a la API de json-server
    fetch("http://localhost:3000/reservas", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(reserva),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Reserva realizada con éxito:", data);
        alert("¡Tu reserva ha sido realizada!");

        // Cambiar el color del botón y el texto
        btnReservar.disabled = true; // Deshabilitar el botón para evitar más reservas
        btnReservar.style.backgroundColor = "#e63946"; // Cambiar el color del botón
        btnReservar.innerText = "Reservado"; // Cambiar el texto del botón
      })
      .catch((error) => {
        console.error("Error al realizar la reserva:", error);
        alert("Hubo un error al realizar la reserva.");
      });
  });
});
