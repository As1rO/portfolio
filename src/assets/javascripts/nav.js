import { button, nav, info, body } from "./variables";

const projetEl = document.querySelectorAll(".projet__el");
const content2 = document.querySelector(".content-2");
let verificateur = false;
let verificateurNav = true;
// var i = 0;

function projet() {
  button.classList.add("button--close");
  content2.classList.add("blur");
  info.classList.remove("display");
  verificateur = true;
}

for (let i = 0; i < 4; i++) {
  if (verificateurNav) {
    projetEl[i].addEventListener("click", projet);
  }
}

button.addEventListener("click", () => {
  if (verificateur === true) {
    content2.classList.remove("blur");
    button.classList.remove("button--close");
    info.classList.add("display");
    verificateur = false;
  } else {
    nav.classList.toggle("nav--close");
    button.classList.toggle("button--close");
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
