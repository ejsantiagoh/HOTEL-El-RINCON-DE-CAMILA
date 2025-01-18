// JavaScript para el carrusel de imágenes
document.addEventListener("DOMContentLoaded", function () {
  // Función para crear un carrusel
  function createCarousel(prevId, nextId, carouselId) {
    const prevButton = document.getElementById(prevId);
    const nextButton = document.getElementById(nextId);
    const carouselImages = document.getElementById(carouselId);

    let currentIndex = 0;
    const images = carouselImages.children; // Obtener todas las imágenes

    // Función para mover el carrusel a la izquierda
    function moveToPrev() {
      if (currentIndex > 0) {
        currentIndex--;
      } else {
        currentIndex = images.length - 1; // Volver a la última imagen
      }
      updateCarousel();
    }

    // Función para mover el carrusel a la derecha
    function moveToNext() {
      if (currentIndex < images.length - 1) {
        currentIndex++;
      } else {
        currentIndex = 0; // Volver a la primera imagen
      }
      updateCarousel();
    }

    // Función para actualizar el carrusel
    function updateCarousel() {
      const newTransformValue = -currentIndex * 100; // Calcular el desplazamiento
      carouselImages.style.transform = `translateX(${newTransformValue}%)`; // Aplicar desplazamiento
    }

    // Asignar eventos a los botones
    prevButton.addEventListener("click", moveToPrev);
    nextButton.addEventListener("click", moveToNext);
  }

  // Crear carruseles para cada habitación
  // createCarousel("prev-index", "next-index", "carousel-images0");
  createCarousel("prev-habitacion1", "next-habitacion1", "carousel-images1");
  createCarousel("prev-habitacion2", "next-habitacion2", "carousel-images2");
  createCarousel("prev-habitacion3", "next-habitacion3", "carousel-images3");
});

// // controlar el carrusel
// let currentIndex = 0;
// const images = document.querySelectorAll("#carousel-images > div");
// const totalImages = images.length;
// const carousel = document.getElementById("carousel-images");

// // Función para mostrar la siguiente imagen
// function showNext() {
//   if (currentIndex < totalImages - 1) {
//     currentIndex++;
//   } else {
//     currentIndex = 0;
//   }
//   updateCarousel();
// }

// // Función para mostrar la imagen anterior
// function showPrev() {
//   if (currentIndex > 0) {
//     currentIndex--;
//   } else {
//     currentIndex = totalImages - 1;
//   }
//   updateCarousel();
// }

// // Actualizar la posición del carrusel
// function updateCarousel() {
//   carousel.style.transform = `translateX(-${currentIndex * 100}%)`;
// }

// // Configurar los botones
// document.getElementById("next").addEventListener("click", showNext);
// document.getElementById("prev").addEventListener("click", showPrev);

// // Función para mover automáticamente el carrusel cada x segundos
// setInterval(showNext, 9000);
