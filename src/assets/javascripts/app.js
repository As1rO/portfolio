import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

var tl = gsap.timeline();

gsap.to(".hide-bar", {
  y: 600,
  duration: 1.4,
  ease: "power1.in",
  display: "none",
});
gsap.to(".hide-bar2", {
  y: -600,
  duration: 1.4,
  ease: "power1.in",
  display: "none",
});
gsap.to(".line", { x: -950, duration: 1.8, ease: "power2", delay: 1.5 });
gsap.to(".hide-red", {
  x: -950,
  duration: 1.8,
  ease: "power2",
  delay: 1.5,
});
gsap.to(".hide-red", { opacity: 0, delay: 3, ease: "power2" });

tl.to("#link1", {
  opacity: 1,
  y: 10,
  scale: 1,
  duration: 0.3,
  delay: 3.1,
  ease: "power2",
});
tl.to("#link2", {
  opacity: 1,
  y: 10,
  scale: 1,
  duration: 0.3,
  ease: "power2",
});
tl.to("#link3", {
  opacity: 1,
  y: 10,
  scale: 1,
  duration: 0.3,
  ease: "power2",
});

function sectionIn() {
  var tl2 = gsap.timeline();
  tl2.to(".hide-red", { opacity: 1 });
  tl2.to(".line", { x: 0, duration: 1.8, ease: "power2" });
  tl2.to(".hide-red", {
    x: 200,
    duration: 1.8,
    ease: "power2",
    delay: -1.8,
  });
  tl2.to(".line", { x: 0, duration: 0.3, opacity: 0 });
  tl2.to(".section--1", { display: "none" });
  tl2.to(".section--2", { display: "flex" });
  tl2.to(".hide-red", {
    width: "25px",
    height: "25px",
    y: "290",
    x: "-450",
    duration: 0.4,
    delay: -0.5,
  });
}

function sectionOut() {
  var tl3 = gsap.timeline();

  gsap.to(".hide-bar", {
    display: "block",
    y: 0,
  });
  gsap.to(".hide-bar2", {
    display: "block",
    y: 0,
  });
  gsap.to(".hide-red", {
    height: "100vh",
    width: "100%",
    right: "0",
    y: "0",
    x: "0",
    duration: 0.7,
  });
  gsap.to(".hide-bar", {
    y: 600,
    duration: 1.4,
    ease: "power1.in",
    delay: 0.5,
    display: "none",
  });
  gsap.to(".hide-bar2", {
    y: -600,
    duration: 1.4,
    ease: "power1.in",
    delay: 0.5,
    display: "none",
  });
  gsap.to("#link1", {
    opacity: 0,
  });
  gsap.to("#link2", {
    opacity: 0,
  });
  gsap.to("#link3", {
    opacity: 0,
  });
  gsap.to(".line", { x: 0, opacity: 1 });
  tl3.to(".section--2", { display: "none" });
  tl3.to(".section--1", { display: "flex" });
  tl3.to(".hide-red", {
    right: "0",
  });
  tl3.to("#link1", {
    opacity: 1,
    y: 10,
    scale: 1,
    duration: 0.3,
    delay: 2,
    ease: "power2",
  });
  tl3.to("#link2", {
    opacity: 1,
    y: 10,
    scale: 1,
    duration: 0.3,
    ease: "power2",
  });
  tl3.to("#link3", {
    opacity: 1,
    y: 10,
    scale: 1,
    duration: 0.3,
    ease: "power2",
  });

  gsap.to(".line", { x: -950, duration: 1.8, ease: "power2", delay: 1.5 });
  gsap.to(".hide-red", {
    x: -950,
    duration: 1.8,
    ease: "power2",
    delay: 1.5,
  });
  gsap.to(".hide-red", { opacity: 0, delay: 3, ease: "power2" });
}
var bool = true;
var bool2 = false;
window.addEventListener("wheel", (event) => {
  const delta = Math.sign(event.deltaY);
  if (delta == 1 && bool == true) {
    sectionIn();
    bool = false;
    bool2 = true;
    console.log("bas");
  }

  if (delta == -1 && bool2 == true) {
    sectionOut();
    bool = true;
    bool2 = false;
    console.log("haut");
  }
});
