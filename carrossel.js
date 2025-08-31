// carrossel.js
function inicializarCarrossel() {
  const images = document.querySelectorAll("#mingw-carousel img");
  const dots = document.querySelectorAll(".mingw-dot");
  const prevBtn = document.getElementById("mingw-prev");
  const nextBtn = document.getElementById("mingw-next");

  if (!prevBtn || !nextBtn || images.length === 0) {
    console.warn("Carrossel não encontrado no DOM.");
    return;
  }

  let current = 0;

  function showImage(index) {
    images.forEach((img, i) => {
      img.style.display = i === index ? "block" : "none";
    });

    dots.forEach((dot, i) => {
      dot.classList.toggle("bg-blue-400", i === index);
      dot.classList.toggle("bg-gray-300", i !== index);
    });

    current = index;
  }

  prevBtn.addEventListener("click", () => {
    showImage((current - 1 + images.length) % images.length);
  });

  nextBtn.addEventListener("click", () => {
    showImage((current + 1) % images.length);
  });

  dots.forEach((dot, i) => {
    dot.addEventListener("click", () => showImage(i));
  });

  showImage(current);
}
