
gsap.to(".box", { rotation: 27, x: 100, duration: 1 });
gsap.to(".green", { rotation: 360, x: 10, duration: 1 });

gsap.from(".purple", {rotation: -360, x: -100, duration: 1});

gsap.fromTo(".blue", {x: -100},{rotation: 360, x: 100, duration: 1});