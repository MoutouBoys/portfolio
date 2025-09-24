document.addEventListener("DOMContentLoaded", function () {
  // ======== Sélecteurs =========
  const moon = document.querySelector(".fa-moon");
  const sun = document.querySelector(".fa-sun");
  const bodyContent = document.body;
  const navDivContent = document.querySelector(".nav_div_content");
  const ententeName = document.querySelector(".nav_div_content_one");
  const faTimes = document.querySelector(".fa-times");
  const faBars = document.querySelector(".fa-bars");
  const navUl = document.querySelector(".nav_ul");
  const navLiIcon = document.querySelector(".nav_li_icon");

  // ======== Toggle Dark/Light =========
  if (moon && sun) {
    const toggleDarkMode = () => {
      bodyContent.classList.toggle("black");
      navDivContent?.classList.toggle("black_fonce");
      ententeName?.classList.toggle("white");
      faBars?.classList.toggle("white");
      faTimes?.classList.toggle("white");
      sun.classList.toggle("white");
      moon.style.display = moon.style.display === "none" ? "block" : "none";
      sun.style.display = sun.style.display === "block" ? "none" : "block";
    };

    moon.addEventListener("click", toggleDarkMode);
    sun.addEventListener("click", toggleDarkMode);
  }

  // ======== Toggle Navbar =========
  if (faBars && faTimes && navUl) {
    faBars.addEventListener("click", () => {
      navUl.classList.add("class_block");
      faTimes.classList.add("class_block");
      faBars.classList.add("class_none");
      bodyContent.classList.add("background-color");
      if (navLiIcon) navLiIcon.style.color = "white";
    });

    faTimes.addEventListener("click", () => {
      navUl.classList.remove("class_block");
      faTimes.classList.remove("class_block");
      faBars.classList.remove("class_none");
      bodyContent.classList.remove("background-color");
      if (navLiIcon) navLiIcon.style.color = "black";
    });
  }

  // ======== Swiper =========
  if (typeof Swiper !== "undefined") {
    const swiperMain = new Swiper(".mySwiper", {
      slidesPerView: 1,
      spaceBetween: 30,
      loop: false,
      pagination: { el: ".swiper-pagination", clickable: true },
      navigation: { nextEl: ".swiper-button-next", prevEl: ".swiper-button-prev" },
      breakpoints: {
        1200: { slidesPerView: 2, spaceBetween: 30 },
      },
    });

    const swiperTestimonial = new Swiper(".mySwipeer", {
      loop: true,
      autoplay: { delay: 4000, disableOnInteraction: false },
      navigation: { nextEl: ".swiper-button-next", prevEl: ".swiper-button-prev" },
    });
  }

  // ======== ScrollReveal =========
  if (typeof ScrollReveal !== "undefined") {
    const sr = ScrollReveal({ reset: false, mobile: true });
    const distance = window.innerWidth <= 200 ? "5rem" : "2rem";

    // Animation scale (équivalent à @keyframes scale)
    sr.reveal(".animate-scale", {
      scale: 2,            // correspond à transform: scale(2) au départ
      opacity: 0,          // départ invisible
      duration: 1000,      // durée en ms (comme animation-duration)
      easing: "ease-in-out",
      delay: 200,          // petit délai avant de commencer
    });
    sr.reveal(".animate-left", { origin: "left", distance, duration: 1000, delay: 300, easing: "ease-in-out" });
    sr.reveal(".animate-right", { origin: "right", distance, duration: 1000, delay: 300, easing: "ease-in-out" });
    sr.reveal(".animate-top", { origin: "top", distance, duration: 1000, delay: 300, easing: "ease-in-out" });
    sr.reveal(".animate-bottom", { origin: "bottom", distance, duration: 1000, delay: 300, easing: "ease-in-out" });
  }

  // ======== Sidebar =========
  window.openNav = function () {
    const sidebar = document.getElementById("sidebar");
    const mainContent = document.getElementById("main-content");
    if (sidebar && mainContent) {
      sidebar.style.left = "0";
      mainContent.style.marginLeft = "250px";
    }
  };

  window.closeNav = function () {
    const sidebar = document.getElementById("sidebar");
    const mainContent = document.getElementById("main-content");
    if (sidebar && mainContent) {
      sidebar.style.left = "-250px";
      mainContent.style.marginLeft = "0";
    }
  };

  // ======== Smooth Scroll for Anchors =========
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute("href"));
      if (target) target.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  });
});
