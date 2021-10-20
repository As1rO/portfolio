import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function ftlIn() {
  var tlIn = gsap.timeline();

  tlIn.to(".hide-bar", {
    y: 600,
    duration: 0.9,
    ease: "power2.in",
    display: "none",
    delay: 0.5,
  });

  tlIn.to(".hide-bar2", {
    y: -600,
    delay: -0.9,
    duration: 0.9,
    ease: "power2.in",
    display: "none",
  });
  tlIn.to(".line", {
    right: "75%",
    duration: 1.2,
    ease: "power2.out",
  });
  tlIn.to(".hide-red", {
    x: -950,
    duration: 1.27,
    ease: "power2.out",
    delay: -1.2,
  });
  tlIn.to("#link1", {
    opacity: 1,
    y: 10,
    scale: 1,
    duration: 0.3,

    ease: "power2",
  });
  tlIn.to("#link2", {
    opacity: 1,
    y: 10,
    scale: 1,
    duration: 0.3,
    ease: "power2",
  });
  tlIn.to("#link3", {
    opacity: 1,
    y: 10,
    scale: 1,
    duration: 0.3,
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
}
///////////////
function ftlOut() {
  var tlOut = gsap.timeline();

  // tlOut.to(".button", {
  //   duration: 0.4,
  //   opacity: 0,
  // });

  tlOut.to(".scrollDown", {
    duration: 0.4,
    opacity: 0,
    delay: -0.4,
  });

  tlOut.to("#link1", {
    opacity: 0,
    y: 10,
    scale: 1,
    duration: 0.3,

    ease: "power2.out",
  });
  tlOut.to("#link2", {
    opacity: 0,
    y: 10,
    scale: 1,
    duration: 0.3,
    ease: "power2.out",
  });
  tlOut.to("#link3", {
    opacity: 0,
    y: 10,
    scale: 1,
    duration: 0.3,
    ease: "power2.out",
  });

  tlOut.to(".hide-red", {
    x: 0,
    duration: 1.1,
    ease: "power2.out",
  });

  tlOut.to(".line", {
    right: "10%",

    duration: 1.2,
    delay: -1.1,
    ease: "power2.out",
  });

  tlOut.to(".hide-bar", {
    y: 0,
    duration: 0.4,
    ease: "power2.out",
    display: "block",
  });

  tlOut.to(".hide-bar2", {
    y: 0,
    delay: -0.4,
    duration: 0.4,
    ease: "power2.out",
    display: "block",
  });
}

// // gsap.to(".hide-bar", {
// //   y: 600,
// //   duration: 1.4,
// //   ease: "power1.in",
// //   display: "none",
// // });
// // gsap.to(".hide-bar2", {
// //   y: -600,
// //   duration: 1.4,
// //   ease: "power1.in",
// //   display: "none",
// // });
// // gsap.to(".line", { x: -950, duration: 1.8, ease: "power2", delay: 1.5 });
// // gsap.to(".hide-red", {
// //   x: -950,
// //   duration: 1.8,
// //   ease: "power2",
// //   delay: 1.5,
// // });
// // gsap.to(".hide-red", { opacity: 0, delay: 3, ease: "power2" });

// // tl.to("#link1", {
// //   opacity: 1,
// //   y: 10,
// //   scale: 1,
// //   duration: 0.3,
// //   delay: 3.1,
// //   ease: "power2",
// // });
// // tl.to("#link2", {
// //   opacity: 1,
// //   y: 10,
// //   scale: 1,
// //   duration: 0.3,
// //   ease: "power2",
// // });
// // tl.to("#link3", {
// //   opacity: 1,
// //   y: 10,
// //   scale: 1,
// //   duration: 0.3,
// //   ease: "power2",
// // });

// // function sectionIn() {
// //   var tl2 = gsap.timeline();
// //   tl2.to(".hide-red", { opacity: 1 });
// //   tl2.to(".line", { x: 0, duration: 1.8, ease: "power2" });
// //   tl2.to(".hide-red", {
// //     x: 200,
// //     duration: 1.8,
// //     ease: "power2",
// //     delay: -1.8,
// //   });
// //   tl2.to(".line", { x: 0, duration: 0.3, opacity: 0 });
// //   tl2.to(".section--1", { display: "none" });
// //   tl2.to(".section--2", { display: "flex" });
// //   tl2.to(".hide-red", {
// //     width: "25px",
// //     height: "25px",
// //     y: "290",
// //     x: "-450",
// //     display: "none",
// //     duration: 0.4,
// //     delay: -0.5,
// //     ease: "power2",
// //   });
// // }

// // function sectionOut() {
// //   var tl3 = gsap.timeline();

// //   gsap.to(".hide-bar", {
// //     display: "block",
// //     y: 0,
// //   });
// //   gsap.to(".hide-bar2", {
// //     display: "block",
// //     y: 0,
// //   });
// //   gsap.to(".hide-red", {
// //     height: "100vh",
// //     width: "100%",
// //     right: "0",
// //     y: "0",
// //     x: "0",
// //     duration: 0.7,
// //   });
// //   gsap.to(".hide-bar", {
// //     y: 600,
// //     duration: 1.4,
// //     ease: "power1.in",
// //     delay: 0.5,
// //     display: "none",
// //   });
// //   gsap.to(".hide-bar2", {
// //     y: -600,
// //     duration: 1.4,
// //     ease: "power1.in",
// //     delay: 0.5,
// //     display: "none",
// //   });
// //   gsap.to("#link1", {
// //     opacity: 0,
// //   });
// //   gsap.to("#link2", {
// //     opacity: 0,
// //   });
// //   gsap.to("#link3", {
// //     opacity: 0,
// //   });
// //   gsap.to(".line", { x: 0, opacity: 1 });
// //   tl3.to(".section--2", { display: "none" });
// //   tl3.to(".section--1", { display: "flex" });
// //   tl3.to(".hide-red", {
// //     right: "0",
// //   });
// //   tl3.to("#link1", {
// //     opacity: 1,
// //     y: 10,
// //     scale: 1,
// //     duration: 0.3,
// //     delay: 2,
// //     ease: "power2",
// //   });
// //   tl3.to("#link2", {
// //     opacity: 1,
// //     y: 10,
// //     scale: 1,
// //     duration: 0.3,
// //     ease: "power2",
// //   });
// //   tl3.to("#link3", {
// //     opacity: 1,
// //     y: 10,
// //     scale: 1,
// //     duration: 0.3,
// //     ease: "power2",
// //   });

// //   gsap.to(".line", { x: -950, duration: 1.8, ease: "power2", delay: 1.5 });
// //   gsap.to(".hide-red", {
// //     x: -950,
// //     duration: 1.8,
// //     ease: "power2",
// //     delay: 1.5,
// //   });
// //   gsap.to(".hide-red", { opacity: 0, delay: 3, ease: "power2" });
// // }
// // var bool = true;
// // var bool2 = false;
// // window.addEventListener("wheel", (event) => {
// //   const delta = Math.sign(event.deltaY);
// //   if (delta == 1 && bool == true) {
// //     sectionIn();
// //     bool = false;
// //     bool2 = true;
// //     console.log("bas");
// //   }

// //   if (delta == -1 && bool2 == true) {
// //     sectionOut();
// //     bool = true;
// //     bool2 = false;
// //     console.log("haut");
// //   }
// // });

// ///////////////////

// const tctContent = document.querySelector(".txt-content");
// const projetEl = document.querySelectorAll(".projet__el");

// // projetEl.forEach((element) => {
// //   element.addEventListener("mouseenter", (e) => {
// //     let contentEl = element.childNodes[1].childNodes[3];
// //     contentEl.style.opacity = "0";
// //     contentEl.style.display = "block";
// //     contentEl.classList.add("txt-content--open");
// //   });
// // });

// // projetEl.forEach((element) => {
// //   let contentEl = element.childNodes[1].childNodes[3];
// //   element.addEventListener("mouseleave", (e) => {
// //     contentEl.style.display = "none";
// //     contentEl.classList.remove("txt-content--open");
// //   });
// // });

var check = true;
const buttonNav = document.querySelector(".button");
const nav = document.querySelector(".nav");
ftlIn();
buttonNav.addEventListener("click", (e) => {
  if (check === true) {
    ftlOut();

    gsap.to(".content", {
      duration: 0.5,
      delay: 3.6,
      x: "-50%",
      ease: "power2.out",
      overflowY: "auto",
      overflowX: "hidden",
    });

    gsap.to(".button", {
      duration: 0.5,
      delay: 3.1,
      x: "100vw",
    });
    // gsap.to(".content-1", {
    //   duration: 0.5,
    //   delay: 3.6,
    //   x: -1150,
    //   position: "absolute",
    //   ease: "power2.out",
    // });
    // gsap.to(".section--3", {
    //   opacity: "1",
    //   duration: 0.4,
    //   delay: 4.1,
    //   ease: "power2.in",
    // });
    check = false;
  } else {
    ftlIn();

    gsap.to(".content", {
      duration: 0.5,
      delay: 0.5,
      x: "0",
      ease: "power2.out",
      ease: "power2.out",
      overflowY: "hidden",
      overflowX: "hidden",
    });

    gsap.to(".button", {
      duration: 0.5,
      delay: -0.5,
      x: "0",
    });

    // gsap.to(".content-1", {
    //   x: 0,
    //   duration: 0.5,
    //   position: "relative",
    //   ease: "power2.in",
    //   delay: 0.5,
    // });

    // gsap.to(".section--3", {
    //   opacity: "0",
    //   duration: 0.4,
    //   ease: "power2.in",
    // });
    check = true;
  }

  // nav.classList.toggle("nav--open");
  // buttonNav.classList.toggle("button--open");
});
var data = require("../javascripts/json/projets.json");

const dataString = document.querySelectorAll("[data-key]");

var contentEl = document.querySelector(".content-3").children;
var sec3 = document.querySelector(".section--3");
var ct3 = document.querySelector(".content-3");
var buttonInfo = document.querySelector(".button-info");
var info = document.querySelector(".info");

for (let i = 0; i < 5; i++) {
  contentEl[i].addEventListener("click", (e) => {
    ct3.classList.add("blur");
    info.classList.remove("display");
    dataString.forEach((element) => {
      let value = element.getAttribute("data-key");
      element.innerHTML = data[i][value];
    });
  });
}
// contentEl.forEach((element) => {
//   element.addEventListener("click", (e) => {
//     ct3.classList.add("blur");
//     info.classList.remove("display");
//   });
// });

buttonInfo.addEventListener("click", (e) => {
  ct3.classList.remove("blur");
  info.classList.add("display");
});

console.log(contentEl);
