import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { CustomEase } from "gsap/CustomEase";
import { body, button, nav } from "./variables";

gsap.registerPlugin(ScrollTrigger, CustomEase);

function ftlIn() {
  var tlIn = gsap.timeline();

  tlIn.to(".hide-bar", {
    y: 600,
    duration: 0.9,
    ease: CustomEase.create("custom", "M0,0 C1,0 0,1 1,1 "),
    display: "none",
    delay: 0.5,
  });

  tlIn.to(".hide-bar2", {
    y: -600,
    delay: -0.9,
    duration: 0.9,
    ease: CustomEase.create("custom", "M0,0 C1,0 0,1 1,1 "),
    display: "none",
  });

  tlIn.to(".line", {
    right: "80%",
    duration: 1.2,
    ease: CustomEase.create("custom", "M0,0 C1,0 0,1 1,1 "),
  });
  tlIn.to(".hide-red", {
    x: "-100%",
    duration: 1.27,
    ease: CustomEase.create("custom", "M0,0 C1,0 0,1 1,1 "),
    delay: -1.2,
  });

  tlIn.to("#link1", {
    opacity: 1,
    y: 10,
    duration: 0.2,
    ease: "power2",
  });
  tlIn.to("#link2", {
    opacity: 1,
    y: 10,
    duration: 0.2,
    ease: "power2",
  });
  tlIn.to("#link3", {
    opacity: 1,
    y: 10,
    duration: 0.2,
    ease: "power2",
  });

  tlIn.to(".scrollDown", {
    duration: 0.4,
    opacity: 1,
  });
  tlIn.to(".button", {
    duration: 0.4,
    opacity: 1,
    delay: -0.4,
  });

  tlIn.to(".content-2", {
    gap: 50,
    delay: 0.1,
    duration: 0.3,
  });
}

ftlIn();

function ftlOut() {
  var tlOut = gsap.timeline();
  tlOut.to(".scrollDown", {
    duration: 0.4,
    opacity: 0,
    delay: -0.4,
  });

  tlOut.to("#link1", {
    opacity: 0,
    y: 10,
    scale: 1,
    duration: 0.2,

    ease: "power2.out",
  });
  tlOut.to("#link2", {
    opacity: 0,
    y: 10,
    scale: 1,
    duration: 0.2,
    ease: "power2.out",
  });
  tlOut.to("#link3", {
    opacity: 0,
    y: 10,
    scale: 1,
    duration: 0.2,
    ease: "power2.out",
  });
  tlOut.to(".hide-red", {
    x: 0,
    duration: 1.1,
    ease: CustomEase.create("custom", "M0,0 C1,0 0,1 1,1 "),
  });

  tlOut.to(".line", {
    right: "5%",
    duration: 1.2,
    delay: -1.1,
    ease: CustomEase.create("custom", "M0,0 C1,0 0,1 1,1 "),
  });

  tlOut.to(".hide-bar", {
    y: 0,
    duration: 0.4,
    ease: CustomEase.create("custom", "M0,0 C1,0 0,1 1,1 "),
    display: "block",
  });

  tlOut.to(".hide-bar2", {
    y: 0,
    delay: -0.4,
    duration: 0.4,
    ease: CustomEase.create("custom", "M0,0 C1,0 0,1 1,1 "),
    display: "block",
  });
}

let bool = true;
let bool2 = false;
let bool3 = false;

window.addEventListener("wheel", (event) => {
  window.addEventListener("scroll", (e) => {
    if (window.scrollY === 0) {
      bool3 = true;
    } else {
      bool3 = false;
    }
  });
  const delta = Math.sign(event.deltaY);
  if (delta == 1 && bool == true) {
    /// scroll down
    ftlOut();

    gsap.to(".body", {
      duration: 0.5,
      delay: 2.5,
      x: "-50%",
      ease: CustomEase.create("custom", "M0,0 C1,0 0,1 1,1 "),
      overflowY: "auto",
      overflowX: "hidden",
    });

    if (window.matchMedia("(min-width: 1300px)").matches) {
      setTimeout(() => {
        button.style.left = "55%";
      }, 3000);
    }

    setTimeout(() => {
      nav.style.marginLeft = "50%";
    }, 3000);

    bool = false;
    bool2 = true;
  }

  if (
    (delta == -1 && bool2 == true && bool3 === true) ||
    (window.matchMedia("(min-width: 1300px)").matches && delta == -1)
  ) {
    //// scroll up
    ftlIn();

    gsap.to(".body", {
      duration: 0.5,
      delay: 0.5,
      x: "0",
      ease: "power2.out",

      overflowY: "hidden",
      overflowX: "hidden",
    });
    if (window.matchMedia("(min-width: 1300px)").matches) {
      button.style.left = "5%";
    }
    setTimeout(() => {
      body.style.transform = "inherit";
    }, 2500);

    nav.style.marginLeft = "0%";

    bool = true;
    bool2 = false;
  }
});
