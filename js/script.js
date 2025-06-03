// Toggle class active
const navbarNav = document.querySelector(".navbar-nav");
// ketika hamburger menu di klik
document.querySelector("#hamburger-menu").onclick = () => {
  navbarNav.classList.toggle("active");
};

//klik di luar sidebar untuk menghilangkan nav
const hamburger = document.querySelector("#hamburger-menu");

document.addEventListener("click", function (e) {
  if (!hamburger.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classlist.remove("active");
  }
});

$("#carouselExample").carousel({
  interval: 2000,
  keyboard: true,
  pause: "hover",
});

const slides = document.querySelectorAll(".slide");
const prevBtn = document.querySelectorAll(".prev");
const nextBtn = document.querySelectorAll(".next");

let currentslide = 0;

function showslide(index) {
  slides.forEach((slide) => slide.classList.remove("active"));
  slides[index].classlist.add("active");
}

function nextslide() {
  currentslide = (currentslide + 1) % slide.length;
  showslide(currentslide);
}

function prevslide() {
  currnetslide = (currentslide - 1 + slide.length) % slides.length;
  showslide(currentslide);
}

prevBtn.addEventListener("click", prevslide);
nextBtn.addEventListener("click", nextslide);

showslide(0);
