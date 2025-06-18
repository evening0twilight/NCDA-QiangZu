// ------- Osmo [https://osmo.supply/] ------- //

gsap.registerPlugin(MorphSVGPlugin);

function initMorphingPlayPauseToggle() {
  const playPath =
    "M3.5 5L3.50049 3.9468C3.50049 3.177 4.33382 2.69588 5.00049 3.08078L20.0005 11.741C20.6672 12.1259 20.6672 13.0882 20.0005 13.4731L17.2388 15.1412L17.0055 15.2759M3.50049 8L3.50049 21.2673C3.50049 22.0371 4.33382 22.5182 5.00049 22.1333L14.1192 16.9423L14.4074 16.7759";
  const pausePath =
    "M15.5004 4.05859V5.0638V5.58691V8.58691V15.5869V19.5869V21.2549M8.5 3.96094V10.3721V17V19L8.5 21";

  const buttonToggle = document.querySelector('[data-play-pause="toggle"]');
  const iconPath = buttonToggle.querySelector('[data-play-pause="path"]');
  let isPlaying = false; // keep track of state to control the morph

  buttonToggle.addEventListener("click", () => {
    gsap.to(iconPath, {
      duration: 0.5,
      morphSVG: {
        type: "rotational",
        map: "complexity", // morphs the shape based on the amount of anchor points, it's fastest!
        shape: isPlaying ? playPath : pausePath // if button is 'playing', morph to pause and vice versa
      },
      ease: "power4.inOut"
    });
    isPlaying = !isPlaying; // control play/pause state again
  });
}

function initConfettiClick() {
  document.addEventListener("click", (event) => {
    // Generate a random number of dots
    const dotCount = gsap.utils.random(15, 30, 1);
    const colors = ["#0ae448", "#abff84", "#fffce1"]; // Define colors once

    for (let i = 0; i < dotCount; i++) {
      // Create a dot element
      const dot = document.createElement("div");
      dot.classList.add("dot");

      // Append the dot to the body
      document.body.appendChild(dot);

      // 随机生成参数
      const randomX = gsap.utils.random(-300, 300);
      const randomY = gsap.utils.random(-500, -200);
      const randomRotation = gsap.utils.random(-180, 180);
      
      // Set initial position and styles of the dot
      gsap.set(dot, {
        backgroundColor: gsap.utils.random(colors), // Pick a random color
        top: event.clientY, // position dot at coordinates of the click
        left: event.clientX,
        scale: 0 // Start at scale 0
      });

      // 使用标准动画代替物理效果
      gsap
        .timeline({
          onComplete: () => dot.remove() // Remove the dot after animation
        })
        .to(dot, {
          scale: gsap.utils.random(0.3, 1), // Scale between 0.5 and 1
          duration: 0.3, // Quick pop-in effect
          ease: "power3.out"
        })
        .to(
          dot,
          {
            x: randomX,
            y: randomY,
            rotation: randomRotation,
            duration: 1.5,
            autoAlpha: 0, // Fade out towards the end
            ease: "power2.out"
          },
          "<" // Start together with the previous tween
        );
    }
  });
}

// Initialize Functions
document.addEventListener("DOMContentLoaded", () => {
  initMorphingPlayPauseToggle();
  initConfettiClick();
});