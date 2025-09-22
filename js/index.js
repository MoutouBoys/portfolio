document.addEventListener("DOMContentLoaded", function() {

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
    moon.addEventListener("click", () => {
      moon.style.display = "none";
      sun.style.display = "block";
      bodyContent.classList.add("black");
      bodyContent.style.minHeight = "100vh";
      navDivContent?.classList.add("black_fonce");
      ententeName?.classList.add("white");
      faBars?.classList.add("white");
      sun.classList.add("white");
      faTimes?.classList.add("white");
    });

    sun.addEventListener("click", () => {
      sun.style.display = "none";
      moon.style.display = "block";
      bodyContent.classList.remove("black");
      bodyContent.style.minHeight = "100vh";
      navDivContent?.classList.remove("black_fonce");
      ententeName?.classList.remove("white");
      faBars?.classList.remove("white");
      sun.classList.remove("white");
      faTimes?.classList.remove("white");
    });
  }

  // ======== Toggle Navbar (Bars / Times) =========
  if (faBars && faTimes && navUl) {
    faBars.addEventListener("click", () => {
      navUl.classList.add("class_block");
      faTimes.classList.add("class_block");
      faBars.classList.add("class_none");
      bodyContent.classList.add("background-color");
      bodyContent.style.minHeight = "100vh";
      if (navLiIcon) navLiIcon.style.color = "white";
    });

    faTimes.addEventListener("click", () => {
      navUl.classList.remove("class_block");
      faTimes.classList.remove("class_block");
      faBars.classList.remove("class_none");
      bodyContent.classList.remove("background-color");
      bodyContent.style.transition = "background-color 1s";
      if (navLiIcon) navLiIcon.style.color = "black";
    });
  }

  // ======== Swiper =========
  window.addEventListener('resize', () => {
    swiper?.update();
    swipeer?.update();
  });

  if (typeof Swiper !== "undefined") {
    const swiper = new Swiper(".mySwiper", {
      slidesPerView: 1,
      spaceBetween: 30,
      loop: false,
      pagination: { el: ".swiper-pagination", clickable: true },
      navigation: { nextEl: ".swiper-button-next", prevEl: ".swiper-button-prev" },
      breakpoints: {
        1200: { slidesPerView: 2, spaceBetween: 30 } // espace positif
      }
    });

    const swipeer = new Swiper(".mySwipeer", {
      loop: true,
      navigation: { nextEl: ".swiper-button-next", prevEl: ".swiper-button-prev" }
    });
  }

  // ======== ScrollReveal =========
 if (typeof ScrollReveal !== "undefined") {
  const sr = ScrollReveal({ reset: false, mobile: true });

  const distanceDesktop = "25rem";
  const distanceMobile = "15rem";

  const distance = window.innerWidth <= 780 ? distanceMobile : distanceDesktop;

  sr.reveal(".animate-left", { origin: "left", duration: 1000, distance: distance, delay: 300 });
  sr.reveal(".animate-right", { origin: "right", duration: 1000, distance: distance, delay: 300 });
  sr.reveal(".animate-top", { origin: "top", duration: 1000, distance: distance, delay: 300 });
  sr.reveal(".animate-bottom", { origin: "bottom", duration: 1000, distance: distance, delay: 300 });
}


  // ======== Sidebar Functions =========
  window.openNav = function() {
    const sidebar = document.getElementById("sidebar");
    const mainContent = document.getElementById("main-content");
    if (sidebar && mainContent) {
      sidebar.style.left = "0";
      mainContent.style.marginLeft = "250px";
    }
  };

  window.closeNav = function() {
    const sidebar = document.getElementById("sidebar");
    const mainContent = document.getElementById("main-content");
    if (sidebar && mainContent) {
      sidebar.style.left = "-250px";
      mainContent.style.marginLeft = "0";
    }
  };

});
