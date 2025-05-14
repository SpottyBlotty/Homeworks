document.addEventListener("scroll", () => {
  const nav = document.querySelector("nav");
  if (window.scrollY > 10) {
    nav.classList.add("scroll_blur");
  } else {
    nav.classList.remove("scroll_blur");
  }
});

document.addEventListener("DOMContentLoaded", function () {
  const questions = document.querySelectorAll(".question-block");

  questions.forEach((question) => {
    question.addEventListener("click", function () {
      const parent = this.parentElement;
      parent.classList.toggle("active");

      questions.forEach((q) => {
        if (q !== this && q.parentElement.classList.contains("active")) {
          q.parentElement.classList.remove("active");
        }
      });
    });
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const scrollToTopBtn = document.getElementById("scrollToTop");

  scrollToTopBtn.addEventListener("click", function () {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });

  window.addEventListener("scroll", function () {
    if (window.pageYOffset > 300) {
      scrollToTopBtn.style.opacity = "1";
      scrollToTopBtn.style.visibility = "visible";
    } else {
      scrollToTopBtn.style.opacity = "0";
      scrollToTopBtn.style.visibility = "hidden";
    }
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const burger = document.querySelector(".burger");
  const mobileMenu = document.querySelector(".mobile_menu");
  const closeBtn = document.querySelector(".mobile_close");

  if (!burger || !mobileMenu) return;

  burger.addEventListener("click", function (e) {
    e.stopPropagation();
    mobileMenu.classList.toggle("active");
  });

  document.addEventListener("click", function () {
    mobileMenu.classList.remove("active");
  });

  mobileMenu.addEventListener("click", function (e) {
    e.stopPropagation();
  });

  closeBtn?.addEventListener("click", function () {
    mobileMenu.classList.remove("active");
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const slider = document.querySelector(".swiper_Hall");
  const slides = document.querySelectorAll(".swiper_card");
  const prevBtns = document.querySelectorAll(".swiper_btn_prev");
  const nextBtns = document.querySelectorAll(".swiper_btn_next");
  const paginations = document.querySelectorAll(".swiper_pagination span");

  let currentIndex = 0;
  const slideCount = slides.length;
  let slideWidth = slides[0].offsetWidth + 100;
  const visibleSlides = 1;

  function updateSlider() {
    slider.scrollTo({
      left: currentIndex * slideWidth,
      behavior: "smooth",
    });

    paginations.forEach((pagination) => {
      pagination.textContent = currentIndex + 1;
    });

    slides.forEach((slide, index) => {
      if (index === currentIndex) {
        slide.classList.remove("opct-disActive");
        const img = slide.querySelector(".img");
        if (img) {
          img.classList.remove("inactive");
          img.classList.add("active");
        }
      } else {
        slide.classList.add("opct-disActive");
        const img = slide.querySelector(".img");
        if (img) {
          img.classList.add("inactive");
          img.classList.remove("active");
        }
      }
    });

    prevBtns.forEach((btn) => {
      btn.style.opacity = currentIndex === 0 ? "0.5" : "1";
      btn.style.pointerEvents = currentIndex === 0 ? "none" : "auto";
    });

    nextBtns.forEach((btn) => {
      btn.style.opacity =
        currentIndex >= slideCount - visibleSlides ? "0.5" : "1";
      btn.style.pointerEvents =
        currentIndex >= slideCount - visibleSlides ? "none" : "auto";
    });
  }

  prevBtns.forEach((btn) => {
    btn.addEventListener("click", function () {
      if (currentIndex > 0) {
        currentIndex--;
        updateSlider();
      }
    });
  });

  nextBtns.forEach((btn) => {
    btn.addEventListener("click", function () {
      if (currentIndex < slideCount - visibleSlides) {
        currentIndex++;
        updateSlider();
      }
    });
  });

  updateSlider();

  window.addEventListener("resize", function () {
    slideWidth = slides[0].offsetWidth + 100;
    updateSlider();
  });
});
