gsap.registerPlugin(ScrollTrigger, MotionPathPlugin);

// background main animation
gsap.to(".background-main__circle-orange", {
  duration: 5,
  rotation: -330,
  repeat: -1,
  yoyo: true,
});

gsap.to(".background-main__circle-blue", {
  duration: 20,
  rotation: -330,
  repeat: -1,
  yoyo: true,
});

gsap.to("#four-pointed-star", {
  duration: 2,
  scale: 0.9,
  rotationX: 45,
  autoAlpha: 0.8,
  transformOrigin: "center 40%",
  repeat: -1,
  yoyo: true,
  repeatDelay: 0.2,
});

gsap.to("#eight-pointed-star", {
  duration: 3,
  scale: 0.9,
  rotationX: 45,
  autoAlpha: 0.8,
  transformOrigin: "center 40%",
  repeat: -1,
  yoyo: true,
  repeatDelay: 0.2,
});

gsap.to(".background-main__glow-green", {
  duration: 5,
  scale: 2,
  autoAlpha: 0.8,
  repeat: -1,
  yoyo: true,
  repeatDelay: 0.2,
});

gsap.to(".background-main__glow-blue", {
  duration: 5,
  scale: 2,
  repeat: -1,
  yoyo: true,
  repeatDelay: 0.2,
});

gsap.to(".background-main__img-bitcoin", {
  duration: 10,
  rotation: -330,
  repeat: -1,
  yoyo: true,
});

gsap.to(".background-main__img-etherium", {
  duration: 10,
  rotation: -330,
  repeat: -1,
  yoyo: true,
});

const orangePlanetAnimation = gsap.to(".background-main__circle-orange", {
  motionPath: {
    path: ".small",
    align: ".small",
    alignOrigin: [0.5, 0.5],
    start: 0.3,
    end: 1,
  },
  paused: true,
});

const bluePlanetAnimation = gsap.to(".background-main__circle-blue", {
  motionPath: {
    path: ".middle",
    align: ".middle",
    alignOrigin: [0.5, 0.5],
    start: 0.7,
    end: 1.5,
  },
  paused: true,
});

const bitcoinAnimation = gsap.to(".background-main__img-bitcoin", {
  motionPath: {
    path: ".small",
    align: ".small",
    alignOrigin: [0.5, 0.5],
    start: 0.45,
    end: 1,
  },
  paused: true,
});

const etheriumAnimation = gsap.to(".background-main__img-etherium", {
  motionPath: {
    path: ".small",
    align: ".small",
    alignOrigin: [0.5, 0.5],
    start: 0.8,
    end: 1.6,
  },
  paused: true,
});

const moneroAnimation = gsap.to(".background-main__img-monero", {
  motionPath: {
    path: ".middle",
    align: ".middle",
    alignOrigin: [0.5, 0.5],
    start: 1,
    end: 2,
  },
  paused: true,
});

ScrollTrigger.create({
  animation: orangePlanetAnimation,
  trigger: "",
  start: "top center",
  end: "bottom center",
  scrub: true,
});
ScrollTrigger.create({
  animation: bluePlanetAnimation,
  trigger: "",
  start: "top center",
  end: "bottom center",
  scrub: true,
});
ScrollTrigger.create({
  animation: bitcoinAnimation,
  trigger: "",
  start: "top center",
  end: "bottom center",
  scrub: true,
});
ScrollTrigger.create({
  animation: etheriumAnimation,
  trigger: "",
  start: "top center",
  end: "bottom center",
  scrub: true,
});
ScrollTrigger.create({
  animation: moneroAnimation,
  trigger: "",
  start: "top center",
  end: "bottom center",
  scrub: true,
});

// background main animation end

// const tl = gsap.timeline();

// tl.from(".main__title", {
//   opacity: 0,
//   duration: 1,
//   x: -50,
// })
//   .from(".main__subtitle", {
//     opacity: 0,
//     duration: 0.5,
//     x: -50,
//   })
//   .to(".main", {
//     scrollTrigger: {
//       trigger: ".main", // Элемент, с которого начинается анимация
//       start: "bottom bottom", // Начальная точка триггера прокрутки
//       end: "bottom ",
//       scrub: true,
//       pin: true,
//       duration: 10,
//     },
//     opacity: 0, // Параметры анимации
//     scale: 0,
//   })
//   .to(".columns", {
//     scrollTrigger: {
//       trigger: ".columns", // Элемент, с которого начинается анимация
//       start: "bottom bottom", // Начальная точка триггера прокрутки
//       end: "bottom ",
//       scrub: true,
//       pin: true,
//       duration: 20,
//     },
//     opacity: 0, // Параметры анимации
//     scale: 0,
//   })
//   .to(".investment", {
//     scrollTrigger: {
//       trigger: ".investment", // Элемент, с которого начинается анимация
//       start: "bottom bottom", // Начальная точка триггера прокрутки
//       end: "bottom ",
//       scrub: true,
//       pin: true,
//       duration: 20,
//     },
//     opacity: 0, // Параметры анимации
//     scale: 0,
//   });

// gsap.timeline().to(".background-main", {
//   scrollTrigger: {
//     trigger: ".support", // Элемент, с которого начинается анимация
//     start: "top bottom", // Начальная точка триггера прокрутки
//     end: "+=200 ",
//     scrub: true,
//     pin: true,
//     duration: 20,
//   },
//   opacity: 0, // Параметры анимации
//   scale: 0,
// });

// gsap.to(".support__glow-1", {
//   duration: 3,
//   repeat: -1,
//   scale: 1.5,
//   yoyo: true,
// });
// gsap.to(".support__glow-2", {
//   duration: 1,
//   repeat: -1,
//   scale: 1.5,
//   yoyo: true,
// });
// gsap.to(".support__svg", {
//   duration: 10,
//   repeat: -1,
//   rotate: 360,
//   yoyo: true,
// });

// const tlSupport = gsap.timeline();

// tlSupport.from(".support__glow", {
//   scrollTrigger: {
//     trigger: ".support",
//     start: "-150 0",
//     end: "top",
//     duration: 20,
//     //  markers: true,
//     scrub: true,
//   },
//   y: -130,
//   opacity: 0.7,
// });
