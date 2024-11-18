let currentIndex = 0;

function changeSlide(direction) {
  const slides = document.querySelectorAll(".slide");
  const totalSlides = slides.length;

  // Atualiza o índice da imagem atual
  currentIndex += direction;

  // Se o índice for maior que o total de slides, reseta para o primeiro slide
  if (currentIndex >= totalSlides) {
    currentIndex = 0;
  }

  // Se o índice for menor que 0, reseta para o último slide
  if (currentIndex < 0) {
    currentIndex = totalSlides - 1;
  }

  // Ajusta a posição do slideshow para exibir o slide correto
  const slideshow = document.querySelector(".slideshow");
  slideshow.style.transform = `translateX(-${currentIndex * 100}%)`;
}
