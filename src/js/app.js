gsap.registerPlugin(ScrollTrigger, MotionPathPlugin);

const or = gsap.to(".background-main__circle-orange", {
  duration: 10, // Продолжительность анимации в секундах
  repeat: -1, // Бесконечное повторение
  ease: "linear", // Линейная функция распределения времени
  motionPath: {
    path: ".small", // ID пути, по которому будет двигаться элемент
    align: ".small", // Элемент, по отношению к которому будет выравниваться движение
    alignOrigin: [0.5, 0.5], // Точка выравнивания (центр)
    autoRotate: true, // Автоматическое вращение объекта вдоль пути
    start: 0, // Начальная позиция на пути (0-1)
    end: 1, // Конечная позиция на пути (0-1)
  },
});

gsap.to(".background-main__circle-orange", {
  duration: 10,
  rotation: -330,
  repeat: -1,
  yoyo: true,
});

gsap.to(".background-main__circle-blue", {
  duration: 30, // Продолжительность анимации в секундах
  repeat: -1, // Бесконечное повторение
  ease: "linear", // Линейная функция распределения времени
  motionPath: {
    path: ".middle", // ID пути, по которому будет двигаться элемент
    align: ".middle", // Элемент, по отношению к которому будет выравниваться движение
    alignOrigin: [0.5, 0.5], // Точка выравнивания (центр)
    autoRotate: true, // Автоматическое вращение объекта вдоль пути
    start: 0, // Начальная позиция на пути (0-1)
    end: 1, // Конечная позиция на пути (0-1)
  },
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
  duration: 20, // Продолжительность анимации в секундах
  repeat: -1, // Бесконечное повторение
  ease: "linear", // Линейная функция распределения времени
  motionPath: {
    path: ".small", // ID пути, по которому будет двигаться элемент
    align: ".small", // Элемент, по отношению к которому будет выравниваться движение
    alignOrigin: [0.5, 0.5], // Точка выравнивания (центр)
    autoRotate: true, // Автоматическое вращение объекта вдоль пути
    start: 0, // Начальная позиция на пути (0-1)
    end: 1, // Конечная позиция на пути (0-1)
  },
});
gsap.to(".background-main__img-bitcoin", {
  duration: 10,
  rotation: -330,
  repeat: -1,
  yoyo: true,
});

gsap.to(".background-main__img-etherium", {
  duration: 30, // Продолжительность анимации в секундах
  repeat: -1, // Бесконечное повторение
  ease: "linear", // Линейная функция распределения времени
  motionPath: {
    path: ".small", // ID пути, по которому будет двигаться элемент
    align: ".small", // Элемент, по отношению к которому будет выравниваться движение
    alignOrigin: [0.5, 0.5], // Точка выравнивания (центр)
    autoRotate: true, // Автоматическое вращение объекта вдоль пути
    start: 0, // Начальная позиция на пути (0-1)
    end: 1, // Конечная позиция на пути (0-1)
  },
});
gsap.to(".background-main__img-etherium", {
  duration: 10,
  rotation: -330,
  repeat: -1,
  yoyo: true,
});

const path = document.querySelector(".middle");
const startingPoint = MotionPathPlugin.pointsToSegment(path, 0.1);
console.log(MotionPathPlugin.pointsToSegment(path, 0.7));

gsap.to(".background-main__img-monero", {
  duration: 20, // Продолжительность анимации в секундах
  repeat: -1, // Бесконечное повторение
  ease: "linear", // Линейная функция распределения времени
  motionPath: {
    path: ".middle", // ID пути, по которому будет двигаться элемент
    align: ".middle", // Элемент, по отношению к которому будет выравниваться движение
    alignOrigin: [0.5, 0.5], // Точка выравнивания (центр)
    autoRotate: true, // Автоматическое вращение объекта вдоль пути
    start: startingPoint.x / path.getTotalLength(), // Начальная позиция на пути (0-1)
    end: 1, // Конечная позиция на пути (0-1)
  },
});

const tl = gsap.timeline();

tl.from(".main__title", {
  opacity: 0,
  duration: 1,
  x: -50,
})
  .from(".main__subtitle", {
    opacity: 0,
    duration: 0.5,
    x: -50,
  })
  .to(".main", {
    scrollTrigger: {
      trigger: ".main", // Элемент, с которого начинается анимация
      start: "bottom bottom", // Начальная точка триггера прокрутки
      end: "bottom ",
      scrub: true,
      pin: true,
      duration: 10,
    },
    opacity: 0, // Параметры анимации
    scale: 0,
  })
  .to(".columns", {
    scrollTrigger: {
      trigger: ".columns", // Элемент, с которого начинается анимация
      start: "bottom bottom", // Начальная точка триггера прокрутки
      end: "bottom ",
      scrub: true,
      pin: true,
      duration: 20,
    },
    opacity: 0, // Параметры анимации
    scale: 0,
  })
  .to(".investment", {
    scrollTrigger: {
      trigger: ".investment", // Элемент, с которого начинается анимация
      start: "bottom bottom", // Начальная точка триггера прокрутки
      end: "bottom ",
      scrub: true,
      pin: true,
      duration: 20,
    },
    opacity: 0, // Параметры анимации
    scale: 0,
  });

gsap.timeline().to(".background-main", {
  scrollTrigger: {
    trigger: ".support", // Элемент, с которого начинается анимация
    start: "top bottom", // Начальная точка триггера прокрутки
    end: "+=200 ",
    scrub: true,
    pin: true,
    duration: 20,
  },
  opacity: 0, // Параметры анимации
  scale: 0,
});

gsap.to(".support__glow-1", {
  duration: 3,
  repeat: -1,
  scale: 1.5,
  yoyo: true,
});
gsap.to(".support__glow-2", {
  duration: 1,
  repeat: -1,
  scale: 1.5,
  yoyo: true,
});
gsap.to(".support__svg", {
  duration: 10,
  repeat: -1,
  rotate: 360,
  yoyo: true,
});

const tlSupport = gsap.timeline();

tlSupport.from(".support__glow", {
  scrollTrigger: {
    trigger: ".support",
    start: "-150 0",
    end: "top",
    duration: 20,
    //  markers: true,
    scrub: true,
  },
  y: -130,
  opacity: 0.7,
});
//   .from(".support__title", {
//     scrollTrigger: {
//       trigger: ".support",
//       start: "0 100",
//       end: "center",
//       duration: 10,
//       markers: true,
//       scrub: true,
//       //  pin: true,
//     },
//     x: 300,
//     opacity: 0,
//   });
//   .to(".support__glow", {
//     scrollTrigger: {
//       trigger: ".support",
//       start: "top center",
//       // end: "center",
//       duration: 10,
//       markers: true,
//       scrub: true,
//       //  pin: true,
//     },
//     //  y: 0,
//   })
//   .from(".support__title", {
//     scrollTrigger: {
//       // trigger: ".support",
//       // start: "top center",
//       // end: "center",
//       duration: 1,
//       markers: true,
//       scrub: true,
//       //  pin: true,
//     },
//     x: 0,
//     opacity: 1,
//   });
