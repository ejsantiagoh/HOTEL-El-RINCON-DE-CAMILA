
// controlar el carrusel
let currentIndex = 0;
const images = document.querySelectorAll("#carousel-images > div");
const totalImages = images.length;
const carousel = document.getElementById("carousel-images");

// Función para mostrar la siguiente imagen
function showNext() {
  if (currentIndex < totalImages - 1) {
    currentIndex++;
  } else {
    currentIndex = 0;
  }
  updateCarousel();
}

// Función para mostrar la imagen anterior
function showPrev() {
  if (currentIndex > 0) {
    currentIndex--;
  } else {
    currentIndex = totalImages - 1;
  }
  updateCarousel();
}

// Actualizar la posición del carrusel
function updateCarousel() {
  carousel.style.transform = `translateX(-${currentIndex * 100}%)`;
}

// Configurar los botones
document.getElementById("next").addEventListener("click", showNext);
document.getElementById("prev").addEventListener("click", showPrev);

// Función para mover automáticamente el carrusel cada x segundos
setInterval(showNext, 9000);
