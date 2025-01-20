document.addEventListener("DOMContentLoaded", function () {
  function createCarousel(prevId, nextId, carouselId) {
    const prevButton = document.getElementById(prevId);
    const nextButton = document.getElementById(nextId);
    const carouselImages = document.getElementById(carouselId);

    if (!prevButton || !nextButton || !carouselImages) {
      console.error(
        "Uno o más elementos no fueron encontrados:",
        prevId,
        nextId,
        carouselId
      );
      return; // Si alguno de los elementos no se encuentra, no seguimos con el carrusel.
    }

    let currentIndex = 0;
    const images = carouselImages.children; // Obtener todas las imágenes

    function moveToPrev() {
      if (currentIndex > 0) {
        currentIndex--;
      } else {
        currentIndex = images.length - 1; // Volver a la última imagen
      }
      updateCarousel();
    }

    function moveToNext() {
      if (currentIndex < images.length - 1) {
        currentIndex++;
      } else {
        currentIndex = 0; // Volver a la primera imagen
      }
      updateCarousel();
    }

    function updateCarousel() {
      const newTransformValue = -currentIndex * 100;
      carouselImages.style.transform = `translateX(${newTransformValue}%)`;
    }

    prevButton.addEventListener("click", moveToPrev);
    nextButton.addEventListener("click", moveToNext);

    setInterval(moveToNext, 5000);
  }

  // Crear carruseles solo si los elementos existen en la página
  if (document.getElementById("carousel-images0")) {
    createCarousel("prev-index", "next-index", "carousel-images0");
  }

  if (document.getElementById("carousel-images1")) {
    createCarousel("prev-habitacion1", "next-habitacion1", "carousel-images1");
  }

  if (document.getElementById("carousel-images2")) {
    createCarousel("prev-habitacion2", "next-habitacion2", "carousel-images2");
  }

  if (document.getElementById("carousel-images3")) {
    createCarousel("prev-habitacion3", "next-habitacion3", "carousel-images3");
  }
 
});

//  controlar el carrusel
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
