document.addEventListener("DOMContentLoaded", function () {
  /* ================= MOBILE NAVBAR ================= */
  const menuToggle = document.getElementById("menuToggle");
  const navMenu = document.getElementById("navMenu");

  if (menuToggle && navMenu) {
    menuToggle.addEventListener("click", function (e) {
      e.stopPropagation();
      navMenu.classList.toggle("active");
      menuToggle.textContent = navMenu.classList.contains("active") ? "✕" : "☰";
    });

    document.addEventListener("click", function () {
      navMenu.classList.remove("active");
      menuToggle.textContent = "☰";
    });

    navMenu.addEventListener("click", (e) => e.stopPropagation());

    window.addEventListener("resize", function () {
      if (window.innerWidth > 768) {
        navMenu.classList.remove("active");
        menuToggle.textContent = "☰";
      }
    });
  }

  /* ================= PRODUCT SLIDER ================= */
  const slider = document.getElementById("productSlider");
  const next = document.querySelector(".next");
  const prev = document.querySelector(".prev");

  if (slider && next && prev) {
    next.addEventListener("click", () =>
      slider.scrollBy({ left: 300, behavior: "smooth" })
    );

    prev.addEventListener("click", () =>
      slider.scrollBy({ left: -300, behavior: "smooth" })
    );
  }

  /* ================= FESTIVE GIFT ================= */
  window.changeImage = function (el) {
    const mainImage = document.getElementById("mainImage");
    if (mainImage) mainImage.src = el.src;
  };

  window.addToCart = function () {
    alert("Product added to cart (demo)");
  };

  /* ================= TIMELINE ================= */
  const slides = document.querySelectorAll(".timeline-slide");
  const timelineButtons = document.querySelectorAll(".timeline-nav button");

  if (slides.length && timelineButtons.length) {
    window.showSlide = function (index) {
      slides.forEach((slide) => slide.classList.remove("active"));
      timelineButtons.forEach((btn) => btn.classList.remove("active"));

      slides[index].classList.add("active");
      timelineButtons[index].classList.add("active");
    };

    window.scrollTimeline = function (index) {
      const timeline = document.getElementById("timeline");
      if (!timeline) return;

      const item = timeline.children[index];
      timeline.scrollLeft = item.offsetLeft - timeline.offsetLeft;

      timelineButtons.forEach((btn) => btn.classList.remove("active"));
      timelineButtons[index].classList.add("active");
    };
  }

  /* ================= NEWSLETTER ================= */
  const form = document.querySelector(".newsletter-form");

  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      const email = form.querySelector("input").value.trim();
      if (!email) return alert("Please enter an email");
      alert("Thank you for subscribing!");
      form.reset();
    });
  }

  /* ================= FAQ ================= */
  const faqItems = document.querySelectorAll(".faq-item");

  if (faqItems.length) {
    faqItems.forEach((item) => {
      const question = item.querySelector(".faq-question");
      if (!question) return;

      question.addEventListener("click", (e) => {
        e.stopPropagation();
        faqItems.forEach((i) => i !== item && i.classList.remove("active"));
        item.classList.toggle("active");
      });
    });
  }
});
