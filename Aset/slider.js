// slider.js
const prevButton = document.querySelector(".prev-slide");
const nextButton = document.querySelector(".next-slide");
const slider = document.querySelector(".testimonial-container");
let currentSlide = 0;

prevButton.addEventListener("click", () => {
  if (currentSlide > 0) {
    currentSlide--;
    slider.style.transform = `translateX(-${currentSlide * 50}%)`;
  }
});

nextButton.addEventListener("click", () => {
  if (currentSlide < 1) {
    currentSlide++;
    slider.style.transform = `translateX(-${currentSlide * 50}%)`;
  }
});

//icon-hidden
function setupToggle(toggleButtonId, toggleContentId) {
  const toggleButton = document.getElementById(toggleButtonId);
  const toggleContent = document.getElementById(toggleContentId);

  toggleButton.addEventListener("click", () => {
    if (toggleContent.classList.contains("show")) {
      toggleContent.classList.remove("show");
      toggleButton.textContent = "+";
    } else {
      toggleContent.classList.add("show");
      toggleButton.textContent = "-";
    }
  });
}

// Setup toggle untuk setiap box
setupToggle("toggleButton-1", "toggleContent-1");
setupToggle("toggleButton-2", "toggleContent-2");
setupToggle("toggleButton-3", "toggleContent-3");
setupToggle("toggleButton-4", "toggleContent-4");
