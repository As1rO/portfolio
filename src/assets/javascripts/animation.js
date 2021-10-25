// import { gsap } from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// import { CustomEase } from "gsap/CustomEase";

// const sec2 = document.querySelector(".section--1");
// const button = document.querySelector("#buttonOpen");
// const buttonC = document.querySelector("#buttonClose");
// const nav = document.querySelector(".nav");
// const sec3 = document.querySelector(".section--2");

// gsap.registerPlugin(ScrollTrigger, CustomEase);

// function ftlIn() {
//   var tlIn = gsap.timeline();

//   tlIn.to(".hide-bar", {
//     y: 600,
//     duration: 0.9,
//     ease: CustomEase.create("custom", "M0,0 C1,0 0,1 1,1 "),
//     display: "none",
//     delay: 0.5,
//   });

//   tlIn.to(".hide-bar2", {
//     y: -600,
//     delay: -0.9,
//     duration: 0.9,
//     ease: CustomEase.create("custom", "M0,0 C1,0 0,1 1,1 "),
//     display: "none",
//   });
//   tlIn.to(".line", {
//     right: "75%",
//     duration: 1.2,
//     ease: CustomEase.create("custom", "M0,0 C1,0 0,1 1,1 "),
//   });
//   tlIn.to(".hide-red", {
//     x: -950,
//     duration: 1.27,
//     ease: CustomEase.create("custom", "M0,0 C1,0 0,1 1,1 "),
//     delay: -1.2,
//   });
//   tlIn.to("#link1", {
//     opacity: 1,
//     y: 10,
//     scale: 1,
//     duration: 0.2,

//     ease: "power2",
//   });
//   tlIn.to("#link2", {
//     opacity: 1,
//     y: 10,
//     scale: 1,
//     duration: 0.2,
//     ease: "power2",
//   });
//   tlIn.to("#link3", {
//     opacity: 1,
//     y: 10,
//     scale: 1,
//     duration: 0.2,
//     ease: "power2",
//   });

//   tlIn.to(".scrollDown", {
//     duration: 0.4,
//     opacity: 1,
//   });
//   tlIn.to(".button", {
//     duration: 0.4,
//     opacity: 1,
//     delay: -0.4,
//   });

//   tlIn.to(".content-2", {
//     gap: 50,
//     delay: 0.1,
//     duration: 0.3,
//   });
// }

// ///////////////

// function ftlOut() {
//   var tlOut = gsap.timeline();

//   tlOut.to(".scrollDown", {
//     duration: 0.4,
//     opacity: 0,
//     delay: -0.4,
//   });

//   tlOut.to("#link1", {
//     opacity: 0,
//     y: 10,
//     scale: 1,
//     duration: 0.2,

//     ease: "power2.out",
//   });
//   tlOut.to("#link2", {
//     opacity: 0,
//     y: 10,
//     scale: 1,
//     duration: 0.2,
//     ease: "power2.out",
//   });
//   tlOut.to("#link3", {
//     opacity: 0,
//     y: 10,
//     scale: 1,
//     duration: 0.2,
//     ease: "power2.out",
//   });

//   tlOut.to(".hide-red", {
//     x: 0,
//     duration: 1.1,
//     ease: CustomEase.create("custom", "M0,0 C1,0 0,1 1,1 "),
//   });

//   tlOut.to(".line", {
//     right: "10%",

//     duration: 1.2,
//     delay: -1.1,
//     ease: CustomEase.create("custom", "M0,0 C1,0 0,1 1,1 "),
//   });

//   tlOut.to(".hide-bar", {
//     y: 0,
//     duration: 0.4,
//     ease: CustomEase.create("custom", "M0,0 C1,0 0,1 1,1 "),
//     display: "block",
//   });

//   tlOut.to(".hide-bar2", {
//     y: 0,
//     delay: -0.4,
//     duration: 0.4,
//     ease: CustomEase.create("custom", "M0,0 C1,0 0,1 1,1 "),
//     display: "block",
//   });

//   tlOut.to(".content-2", {
//     gap: 0,
//     delay: 0.5,
//     duration: 0.7,
//     ease: "power2.in",
//   });
// }

// ////////////

// ftlIn();

// let bool = true;
// let bool2 = false;
// window.addEventListener("wheel", (event) => {
//   const delta = Math.sign(event.deltaY);
//   if (delta == 1 && bool == true) {
//     sec2.classList.remove("translate-content");
//     nav.classList.add("nav--open");

//     ftlOut();
//     gsap.to("#buttonOpen", {
//       duration: 0,
//       delay: 1.5,
//       opacity: 0,
//     });
//     gsap.to(".content", {
//       duration: 0.5,
//       delay: 2.5,
//       x: "-50%",
//       ease: CustomEase.create("custom", "M0,0 C1,0 0,1 1,1 "),
//       overflowY: "auto",
//       overflowX: "hidden",
//     });

//     gsap.to("#buttonOpen", {
//       duration: 0.5,
//       delay: 2.2,
//       x: "100vw",
//     });

//     gsap.to("#buttonOpen", {
//       duration: 0.1,
//       delay: 2.7,
//       opacity: 1,
//       display: "block",
//     });

//     bool = false;
//     bool2 = true;
//   }

//   if (delta == -1 && bool2 == true) {
//     sec3.classList.remove("translate-content");
//     nav.classList.remove("nav--openb");
//     nav.classList.add("nav--open");

//     ftlIn();
//     gsap.to("#buttonOpen", {
//       duration: 0.1,
//       delay: -0.7,
//       x: "100vw",
//       opacity: 0,
//     });

//     gsap.to(".content", {
//       duration: 0.5,
//       delay: 0.5,
//       x: "0",
//       ease: "power2.out",
//       ease: "power2.out",
//       overflowY: "hidden",
//       overflowX: "hidden",
//     });

//     gsap.to("#buttonOpen", {
//       duration: 0.5,
//       delay: -0.5,
//       x: "0",
//       opacity: 1,
//       display: "block",
//     });
//     bool = true;
//     bool2 = false;
//   }
// });

// //////////////

// button.addEventListener("click", (e) => {
//   button.classList.add("display");
//   buttonC.classList.remove("display");

//   if (bool2 == true) {
//     nav.classList.remove("nav--open");
//     nav.classList.toggle("nav--openb");
//     sec3.classList.toggle("translate-content");
//   } else {
//     nav.classList.remove("nav--openb");
//     nav.classList.toggle("nav--open");
//     sec2.classList.toggle("translate-content");
//   }

//   buttonC.addEventListener("click", (e) => {
//     nav.classList.add("nav--open");
//     nav.classList.remove("nav--openb");
//     buttonC.classList.add("display");
//     button.classList.remove("display");
//     sec3.classList.remove("translate-content");
//     sec2.classList.remove("translate-content");
//   });
// });
