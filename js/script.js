const hero = document.querySelector(".hero");
const herovideo = document.querySelector("video");
const heroh1 = hero.querySelector(".hero h1");
const textMarq = hero.querySelector(".text-marq-wrap");

const artist = document.querySelector(".artist");
// const herovideo = document.querySelector("video");
// const heroh1 = hero.querySelector(".hero h1");
const textMarqArt = artist.querySelector(".text-marq-wrap");

// console.log(herovideo);

const controller = new ScrollMagic.Controller();

const scene = new ScrollMagic.Scene({
  duration: 2900,
  triggerElement: hero,
  triggerHook: 0,
})
  // .addIndicators()
  .setPin(hero)
  .addTo(controller);

//   videoHero
const videoAnim = gsap.fromTo(
  herovideo,
  { width: "63%", height: "60%" },
  { width: "100%", height: "100%" }
);

const scene2 = new ScrollMagic.Scene({
  duration: 1000,
  triggerElement: hero,
  triggerHook: 0,
})
  .setTween(videoAnim)
  // .addIndicators()
  .addTo(controller);

//   h1 hero
const h1Anim = gsap.to(heroh1, { y: -600, ease: "steps(5)" });

const scene3 = new ScrollMagic.Scene({
  duration: 500,
  triggerElement: hero,
  triggerHook: 0,
  //   ease: linear,
})
  .setTween(h1Anim)
  // .addIndicators()
  .addTo(controller);

//   textMarq hero
const textMarqAnim = gsap.to(textMarq, { left: 50, ease: Power1.easeInOut });

const scene4 = new ScrollMagic.Scene({
  duration: 500,
  triggerElement: hero,
  triggerHook: 0,
  offset: 600,
})
  .setTween(textMarqAnim)
  //   .addIndicators()
  .addTo(controller);

//   textMarq2 hero
const textMarqAnim2 = gsap.to(textMarq, { opacity: 0, ease: Power1.easeInOut });

const scene5 = new ScrollMagic.Scene({
  duration: 400,
  triggerElement: hero,
  triggerHook: 0,
  offset: 1400,
})
  .setTween(textMarqAnim2)
  //   .addIndicators()
  .addTo(controller);

//   textMarq hero
const lineSplit = gsap.fromTo(
  ".line-split .split-line",
  {
    opacity: 0,
    y: 100,
    ease: "power1.inOut",
    stagger: 0.5,
  },
  {
    opacity: 1,
    y: 0,
    ease: "power1.inOut",
    stagger: 0.5,
  }
);

const scene6 = new ScrollMagic.Scene({
  duration: 700,
  triggerElement: hero,
  triggerHook: 0,
  offset: 2200,
})
  .setTween(lineSplit)
  //   .addIndicators()
  .addTo(controller);

//   ARTIST

const sceneArtist = new ScrollMagic.Scene({
  duration: 1200,
  triggerElement: artist,
  triggerHook: 0,
})
  .setPin(artist)
  .addTo(controller);

// textMarqArtAnim
const textMarqArtAnim = gsap.to(textMarqArt, {
  left: 50,
  ease: Power1.easeInOut,
});

const scene7 = new ScrollMagic.Scene({
  duration: 400,
  triggerElement: artist,
  triggerHook: 0,
  offset: 200,
})
  .setTween(textMarqArtAnim)
  // .addIndicators()
  .addTo(controller);

// textMarqArtAnim
const textMarqArtAnim2 = gsap.to(textMarqArt, {
  opacity: 0,
  ease: Power1.easeInOut,
});

const scene8 = new ScrollMagic.Scene({
  duration: 300,
  triggerElement: artist,
  triggerHook: 0,
  offset: 900,
})
  .setTween(textMarqArtAnim2)
  // .addIndicators()
  .addTo(controller);

// nav-animation
const nav = document.querySelector("nav");

let lastScrollTop = 0;
window.addEventListener("scroll", (e) => {
  let st = window.pageYOffset || document.documentElement.scrollTop; // Credits: "https://github.com/qeremy/so/blob/master/so.dom.js#L426"
  if (st > lastScrollTop) {
    nav.classList.add("hide");
  } else {
    nav.classList.remove("hide");
  }
  lastScrollTop = st <= 0 ? 0 : st;
});
