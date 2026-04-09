const slides = document.querySelectorAll(".slide");
const dots   = document.querySelectorAll(".dot");
const nextBtn = document.querySelector(".arrow-right");
const prevBtn = document.querySelector(".arrow-left");

let current = 0;

function showSlide(index) {
  // wrap around
  if (index < 0) index = slides.length - 1;
  if (index >= slides.length) index = 0;

  // remove active from all
  slides.forEach(slide => slide.classList.remove("active"));
  dots.forEach(dot => dot.classList.remove("active"));

  // add active to current
  slides[index].classList.add("active");
  dots[index].classList.add("active");

  current = index;
}

nextBtn.addEventListener("click", () => {
  showSlide(current + 1);
});

prevBtn.addEventListener("click", () => {
  showSlide(current - 1);
});

dots.forEach(dot => {
  dot.addEventListener("click", () => {
    const index = Number(dot.dataset.slide);
    showSlide(index);
  });
});

// OPTIONAL: auto-play every 7 seconds
// setInterval(() => showSlide(current + 1), 7000);
