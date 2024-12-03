import { servicesCopy } from "./services.js";

document.addEventListener("DOMContentLoaded", () => {
    gsap.registerPlugin(ScrollTrigger);


const lenis = new Lenis();


lenis.on('scroll', ScrollTrigger.update);

gsap.ticker.add((time) => {
  lenis.raf(time * 1000);
});

gsap.ticker.lagSmoothing(0);


const stickySection = document.querySelector(".sticky");
const stickyHeight = window.innerHeight * 8;
const services = document.querySelectorAll(".service");
const indicator = document.querySelector(".indicator");
const currentCount = document.querySelector("#current-count");
const serviceImg = document.querySelector(".service-img");
const serviceCopy = document.querySelector(".service-copy p");
const serviceHeight = 38;
const imgHeight = 250;



serviceCopy.textContent = serviceCopy[0][0];
let currentSplitText = new SplitType(serviceCopy, {types: "lines"});

const measureContainer = document.createElement("div");
measureContainer.style.cssText = `
  positon: absolute;
  visibility: hidden;
  height: auto;
  width: auto;
  white-space: nowrap;
  font-family: "plain-light";
  font-size: 60px;
  font-weight: 600;
  text-transform: uppercase;
`;
document.body.appendChild(measureContainer);

//stopped at 11:02
})