// The Environement (The Data That we want to work with)
const sliderContainer = document.querySelector(".slider-container");
const sliderContainerWidth = sliderContainer.offsetWidth;
const slides = document.querySelectorAll(".slide");
let itemPerSlide = 0;
let currentSlide = 0;
let autoSlide = 0;
let slideDots;
const responsive = [
  { breakPoint: { width: 0, item: 1 } },
  { breakPoint: { width: 991, item: 2 } }
];

// The Functions (manipulating Data)
function load() {
  for (let i = 0; i < responsive.length; i++) {
    if (window.innerWidth > responsive[i].breakPoint.width) {
      itemPerSlide = responsive[i].breakPoint.item;
    }
  }
  start();
}

function start() {
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.flexBasis = `${100 / itemPerSlide}%`;
  }
  slideDots = Math.ceil(slides.length / itemPerSlide);
  for (let i = 0; i < slideDots; i++) {
    const div = document.createElement("div");
    div.id = i;
    div.setAttribute("onclick", "controlSlide(this)");
    if (i == 0) {
      div.classList.add("active");
    }
    document.querySelector(".slide-controls").appendChild(div);
  }
}
function controlSlide(element) {
  currentSlide = element.id;
  changeSlide(currentSlide);
}
function changeSlide() {
  controlButtons = document.querySelector(".slide-controls").children;
  for (let i = 0; i < controlButtons.length; i++) {
    if (controlButtons[i].id == currentSlide) {
      controlButtons[i].classList.add("active");
    } else {
      controlButtons[i].classList.remove("active");
    }
  }
  if (currentSlide == 0) {
    sliderContainer.style.transform = "translateX(0%)";
  }
  if (currentSlide == 1) {
    sliderContainer.style.transform = "translateX(-100%)";
  }
  if (currentSlide == 2) {
    sliderContainer.style.transform = "translateX(-200%)";
  }
  if (currentSlide == 3) {
    sliderContainer.style.transform = "translateX(-300%)";
  }
  if (currentSlide == 4) {
    sliderContainer.style.transform = "translateX(-400%)";
  }
  if (currentSlide == 5) {
    sliderContainer.style.transform = "translateX(-500%)";
  }
  if (currentSlide == 6) {
    sliderContainer.style.transform = "translateX(-600%)";
  }
}
// The Event
window.onload = load();
