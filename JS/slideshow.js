const slides = document.querySelectorAll(".slide");
const dotsContainer = document.querySelector(".dots");

let currentSlide = 0;
let intervalTime = 5000;
let slideInterval;

/* CREATE DOTS */
slides.forEach((_, i) => {
  const dot = document.createElement("span");
  dot.addEventListener("click", () => {
    goToSlide(i);
    resetAutoSlide();
  });
  dotsContainer.appendChild(dot);
});

const dots = document.querySelectorAll(".dots span");

/* SLIDE FUNCTIONS */
function goToSlide(index) {
  slides[currentSlide].classList.remove("active");
  dots[currentSlide].classList.remove("active");

  currentSlide = index;

  slides[currentSlide].classList.add("active");
  dots[currentSlide].classList.add("active");
}

function nextSlide() {
  goToSlide((currentSlide + 1) % slides.length);
}

function prevSlide() {
  goToSlide((currentSlide - 1 + slides.length) % slides.length);
}

/* AUTO SLIDE */
function startAutoSlide() {
  slideInterval = setInterval(nextSlide, intervalTime);
}

function resetAutoSlide() {
  clearInterval(slideInterval);
  startAutoSlide();
}

/* INIT */
slides[0].classList.add("active");
dots[0].classList.add("active");
startAutoSlide();

/* ===============================
   SWIPE / DRAG FUNCTIONALITY
================================ */

let startX = 0;
let isDragging = false;
const slider = document.querySelector(".slider"); // parent container

/* TOUCH EVENTS (MOBILE) */
slider.addEventListener("touchstart", (e) => {
  startX = e.touches[0].clientX;
});

slider.addEventListener("touchend", (e) => {
  const endX = e.changedTouches[0].clientX;
  handleSwipe(startX, endX);
});

/* MOUSE EVENTS (DESKTOP) */
slider.addEventListener("mousedown", (e) => {
  isDragging = true;
  startX = e.clientX;
});

slider.addEventListener("mouseup", (e) => {
  if (!isDragging) return;
  isDragging = false;
  handleSwipe(startX, e.clientX);
});

/* SWIPE LOGIC */
function handleSwipe(start, end) {
  const diff = start - end;

  if (Math.abs(diff) > 50) {
    // swipe threshold
    if (diff > 0) {
      nextSlide();
    } else {
      prevSlide();
    }
    resetAutoSlide();
  }
}
