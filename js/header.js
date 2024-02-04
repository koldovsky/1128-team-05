const body = document.querySelector("body");
const header = document.querySelector(".header");
const menuButton = document.querySelector(".header__menu-btn");
const navLinks = document.querySelector(".header__nav");

menuButton.addEventListener("click", () => {
  body.classList.toggle("fixed-body");
  header.classList.toggle("responsive");
});

navLinks.addEventListener("click", () => {
  body.classList.remove("fixed-body");
  header.classList.remove("responsive");
})
