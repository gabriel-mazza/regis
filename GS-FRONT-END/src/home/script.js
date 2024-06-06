  function mostrarSlide(carroselId, index) {
    const slides = document.querySelectorAll(`#carrosel-${carroselId} img`);
    slides.forEach((slide, i) => {
      slide.classList.remove('active');
      if (i === index) {
        slide.classList.add('active');
      }
    });
  }

  function proximoSlide(carroselId) {
    const slides = document.querySelectorAll(`#carrosel-${carroselId} img`);
    slideAtual[carroselId] = (slideAtual[carroselId] + 1) % slides.length;
    mostrarSlide(carroselId, slideAtual[carroselId]);
  }

  function slideAnterior(carroselId) {
    const slides = document.querySelectorAll(`#carrosel-${carroselId} img`);
    slideAtual[carroselId] = (slideAtual[carroselId] - 1 + slides.length) % slides.length;
    mostrarSlide(carroselId, slideAtual[carroselId]);
  }

  const slideAtual = {
    'problema': 0,
    'tecnologia': 0,
    'beneficios': 0,
    'impacto-diario': 0
  };

  document.addEventListener('DOMContentLoaded', () => {
    for (let key in slideAtual) {
      mostrarSlide(key, slideAtual[key]);
    }
  });