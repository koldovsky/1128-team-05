const menuIconBurgers = document.querySelector('.burgers');
const menuIconSalads = document.querySelector('.salads');
const menuIconDrinks = document.querySelector('.drinks');


const menuWrapperBurgers = document.querySelector('.menu-wrapper-burgers');
const menuWrapperSalads = document.querySelector('.menu-wrapper-salads');
const menuWrapperDrinks = document.querySelector('.menu-wrapper-drinks');



menuIconBurgers.addEventListener('click', function () {
    menuWrapperSalads.style.display = "none";
    menuWrapperDrinks.style.display = "none";
    menuWrapperBurgers.style.display = "grid";
})

menuIconSalads.addEventListener('click', function () {
    menuWrapperBurgers.style.display = "none";
    menuWrapperDrinks.style.display = "none";
    menuWrapperSalads.style.display = "grid";
})

menuIconDrinks.addEventListener('click', function () {
    menuWrapperBurgers.style.display = "none";
    menuWrapperSalads.style.display = "none";
    menuWrapperDrinks.style.display = "grid";
})


