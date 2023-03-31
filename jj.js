gsap.registerPlugin(ScrollTrigger);

gsap.to(".content p", {
  backgroundPositionY: "100%",
  stagger: 1,
  scrollTrigger: {
    trigger: ".content",
    markers: true,
    pin:".container",
    scrub: 1,
    start: "top 37%",
    end: "bottom top",
  },
});
