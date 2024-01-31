const persons = [
  '<article class="team__carousel-item"><img src="img/team_photo_mstone.webp" alt="Mary Stone, Gourmet Chef"/><h3 class="team__carousel-name">Mary Stone</h3><p class="team__carousel-job">Gourmet Chef</p></article>',
  '<article class="team__carousel-item"><img src="img/team_photo_jpalmer.webp" alt="John Palmer, Sauce Chef"/><h3 class="team__carousel-name">John Palmer</h3><p class="team__carousel-job">Sauce Chef</p></article>',
  '<article class="team__carousel-item"><img src="img/team_photo_jclower.webp" alt="Jessica Clower, Meat Specialist"/><h3 class="team__carousel-name">Jessica Clower</h3><p class="team__carousel-job">Meat Specialist</p></article>',
  '<article class="team__carousel-item"><img src="img/team_photo_hsmith.webp" alt="Helen Smith, Burger Master"/><h3 class="team__carousel-name">Helen Smith</h3><p class="team__carousel-job">Burger Master</p></article>',
];

let personsIdx = 0;

const personsContainer = document.querySelector(".team__carousel");

function renderPersons() {
  personsContainer.innerHTML = persons[personsIdx];
  if (window.matchMedia("(min-width: 768px)").matches) {
    const secondPersonIdx =
      personsIdx + 1 >= persons.length ? 0 : personsIdx + 1;
    personsContainer.innerHTML += persons[secondPersonIdx];
    if (window.matchMedia("(min-width: 991px)").matches) {
        const thirdPersonIdx =
        secondPersonIdx + 1 >= persons.length ? 0 : secondPersonIdx + 1;
      personsContainer.innerHTML += persons[thirdPersonIdx];
    }
  }
}

function nextPerson() {
  if (personsIdx + 1 >= persons.length) {
    personsIdx = 0;
  } else personsIdx = personsIdx + 1;
  renderPersons();
}

function prevPerson() {
  if (personsIdx - 1 < 0) {
    personsIdx = persons.length - 1;
  } else personsIdx = personsIdx - 1;
  renderPersons();
}

const buttonNext = document.querySelector(".team__next_button");
buttonNext.addEventListener("click", nextPerson);

const buttonPrev = document.querySelector(".team__prev_button");
buttonPrev.addEventListener("click", prevPerson);

renderPersons();

window.addEventListener("resize", renderPersons);
