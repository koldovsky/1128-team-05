const body = document.querySelector("body");
const header = document.querySelector(".header");
const btnSub = document.querySelector(".header__menu-btn");
const navLinks = document.querySelector(".header__nav");

btnSub.addEventListener("click", () => {
    body.classList.toggle("fixed-body");
    header.classList.toggle("mobile-header");
})

navLinks.addEventListener("click", () => {
    body.classList.remove("fixed-body");
    header.classList.remove("mobile-header");
})