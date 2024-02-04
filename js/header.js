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
});

const currentURLQueryString = window.location.href;
const splittedArray = currentURLQueryString.split("/");
const thisPage = splittedArray[splittedArray.length - 1];

if (thisPage != null && thisPage !== "") {
  changeStatusMenu(thisPage);
}
function changeStatusMenu(idElement) {
  const activElement = document.getElementById(idElement);
  if (activElement !== null) {
    activElement.classList.add("header__active-menu");
  }
}
