let moon= document.querySelector(".fa-moon");
let sun= document.querySelector(".fa-sun");
let body_content_all= document.querySelector("body");
let black= document.querySelector(".black");
let nav_div_content= document.querySelector(".nav_div_content");
let body= document.querySelector("body h1");
let nav_ul_background= document.querySelector(".nav_ul");
let entente_name= document.querySelector(".nav_div_content_one");
let white= document.querySelector(".white");
let fa_times= document.querySelector(".fa-times");
let fa_bars= document.querySelector(".fa-bars");



fa_bars.addEventListener("click",function(e){
    fa_times.classList.add("white");
    // fa_bars.classList.add("white");
});

fa_times.addEventListener("click",function(e){
    fa_times.classList.remove("white");
});

moon.addEventListener("click",function(e){
    sun.style.display='block';
    moon.style.display='none';
    body_content_all.classList.add("black");
    // nav_ul_background.style.backgroundColor= "black";
    nav_div_content.classList.add("black_fonce");
    entente_name.classList.add("white");
    fa_bars.classList.add("white");
    sun.classList.add("white");
    fa_times.classList.add("white");
});
sun.addEventListener("click",function(e){
    sun.style.display='none';
    moon.style.display='block';
    body_content_all.classList.remove("black");
    nav_div_content.classList.remove("black_fonce");
    entente_name.classList.remove("white");
    fa_bars.classList.remove("white");
    sun.classList.remove("white");
    // fa_times.classList.remove("white");
});


let swiper = new Swiper(".mySwiper", {
slidesPerView: 1,
//   espace entre les images ou les contenu defilable
spaceBetween: 30,
//   luùinausiter des icon de defilement
loop: false,
pagination: {
el: ".swiper-pagination",
clickable: true,
},
//   Rend clickable les icon de defilement
navigation: {
nextEl: ".swiper-button-next",
prevEl: ".swiper-button-prev",
},
//   quand l'ecrand arrivera a 1200px l'images afficher sera deux images
breakpoints: {
1200: {
  slidesPerView: 2,
//   espace entre les images ou les contenu defilable
  spaceBetween: -285,
},
},
});
let swipeer = new Swiper(".mySwipeer", {
loop: true,
// rewind: true,
navigation: {
nextEl: ".swiper-button-next",
prevEl: ".swiper-button-prev",
},
});

window.sr = ScrollReveal();

sr.reveal('.animate-left', {
origin: 'left',
duration: 1000,
distance: '25rem',
delay: 300
});

sr.reveal('.animate-right', {
origin: 'right',
duration: 1000,
distance: '25rem',
delay: 300
});

sr.reveal('.animate-top', {
origin: 'top',
duration: 1000,
distance: '25rem',
delay: 300
});

sr.reveal('.animate-bottom', {
origin: 'bottom',
duration: 1000,
distance: '25rem',
delay: 300
});

// For The Nav Bars Party
let display_bars = document.querySelector(".fa-bars");
let display_times = document.querySelector(".fa-times");
let nav_ul = document.querySelector(".nav_ul");
let body_content = document.querySelector(".body_content_all");
let nav_li_icon = document.querySelector(".nav_li_icon");
let body_g = document.body;


display_bars.addEventListener("click",function(e){
nav_ul.classList.add("class_block");
display_times.classList.add("class_block");
display_bars.classList.add("class_none");
body_g.classList.add("background-color");
nav_li_icon.style="color:white";
});
display_times.addEventListener("click",function(e){
nav_ul.classList.remove("class_block");
display_times.classList.remove("class_block");
display_bars.classList.remove("class_none");
body_g.classList.remove("background-color");
body_g.style="transition:background-color 1s";
nav_li_icon.style="color:black";
});
// Cette partie concerne le navbar
function openNav() {
  document.getElementById("sidebar").style.left = "0";
  document.getElementById("main-content").style.marginLeft = "250px";
}

function closeNav() {
  document.getElementById("sidebar").style.left = "-250px";
  document.getElementById("main-content").style.marginLeft= "0";
}