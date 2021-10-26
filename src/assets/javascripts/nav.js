import { button, nav, info, body, projetEl } from "./variables";
import { copy, numberOfProjetc } from "./projets";

const content2 = document.querySelector(".content-2");
const buttonNav = document.querySelector(".button-nav");
let verificateur = false;
let verificateurNav = true;

function projet(index) {
  button.classList.add("button--close");
  content2.classList.add("blur");
  info.classList.remove("display");
  verificateur = true;
  copy(index);
}

projetEl.forEach((element, index) => {
  element.addEventListener("click", projet.bind(event, index));
});

button.addEventListener("click", () => {
  if (verificateur === true) {
    content2.classList.remove("blur");
    button.classList.remove("button--close");
    info.classList.add("display");
    verificateur = false;
  } else {
    if (window.matchMedia("(min-width: 1300px)").matches) {
      button.style.opacity = "0";
      nav.classList.remove("nav--close");
      buttonNav.classList.add("button-nav-anim");

      buttonNav.addEventListener("click", (e) => {
        console.log("click");
        buttonNav.style.opacity = "0";
        nav.classList.add("nav--close");
        button.style.opacity = "1";
        buttonNav.classList.remove("button-nav-anim");
      });
    } else {
      button.style.opacity = "1";
      nav.classList.toggle("nav--close");
      button.classList.toggle("button--close");
      button.classList.toggle("display");
    }

    if (verificateurNav) {
      for (let i = 0; i < 4; i++) {
        projetEl[i].removeEventListener("click", projet);
      }

      verificateurNav = false;
    } else {
      verificateurNav = true;

      for (let i = 0; i < 4; i++) {
        projetEl[i].addEventListener("click", projet);
      }
    }
  }
});
