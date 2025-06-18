// 图标变化
gsap.registerPlugin(MorphSVGPlugin);

function initMorphingPlayPauseToggle() {
  const playPath =
    "M3.5 5L3.50049 3.9468C3.50049 3.177 4.33382 2.69588 5.00049 3.08078L20.0005 11.741C20.6672 12.1259 20.6672 13.0882 20.0005 13.4731L17.2388 15.1412L17.0055 15.2759M3.50049 8L3.50049 21.2673C3.50049 22.0371 4.33382 22.5182 5.00049 22.1333L14.1192 16.9423L14.4074 16.7759";
  const pausePath =
    "M15.5004 4.05859V5.0638V5.58691V8.58691V15.5869V19.5869V21.2549M8.5 3.96094V10.3721V17V19L8.5 21";

  const buttonToggle = document.querySelector('[data-play-pause="toggle"]');
  const iconPath = buttonToggle.querySelector('[data-play-pause="path"]');
  let isPlaying = false;

  buttonToggle.addEventListener("click", () => {
    gsap.to(iconPath, {
      duration: 0.5,
      morphSVG: {
        type: "rotational",
        map: "complexity",
        shape: isPlaying ? playPath : pausePath
      },
      ease: "power4.inOut"
    });
    isPlaying = !isPlaying;
  });
}

function initConfettiClick() {
  document.addEventListener("click", (event) => {
    const dotCount = gsap.utils.random(15, 30, 1);
    const colors = ["#0ae448", "#abff84", "#fffce1"];

    for (let i = 0; i < dotCount; i++) {
      const dot = document.createElement("div");
      dot.classList.add("dot");

      document.body.appendChild(dot);

      const randomX = gsap.utils.random(-300, 300);
      const randomY = gsap.utils.random(-500, -200);
      const randomRotation = gsap.utils.random(-180, 180);
      
      gsap.set(dot, {
        backgroundColor: gsap.utils.random(colors),
        top: event.clientY,
        left: event.clientX,
        scale: 0
      });


      gsap
        .timeline({
          onComplete: () => dot.remove()
        })
        .to(dot, {
          scale: gsap.utils.random(0.3, 1),
          duration: 0.3,
          ease: "power3.out"
        })
        .to(
          dot,
          {
            x: randomX,
            y: randomY,
            rotation: randomRotation,
            duration: 1.5,
            autoAlpha: 0,
            ease: "power2.out"
          },
          "<"
        );
    }
  });
}

document.addEventListener("DOMContentLoaded", () => {
  initMorphingPlayPauseToggle();
  initConfettiClick();
});



// 播放音频
function initMorphingPlayPauseToggle() {
  const playPath =
    "M3.5 5L3.50049 3.9468C3.50049 3.177 4.33382 2.69588 5.00049 3.08078L20.0005 11.741C20.6672 12.1259 20.6672 13.0882 20.0005 13.4731L17.2388 15.1412L17.0055 15.2759M3.50049 8L3.50049 21.2673C3.50049 22.0371 4.33382 22.5182 5.00049 22.1333L14.1192 16.9423L14.4074 16.7759";
  const pausePath =
    "M15.5004 4.05859V5.0638V5.58691V8.58691V15.5869V19.5869V21.2549M8.5 3.96094V10.3721V17V19L8.5 21";

  const buttonToggle = document.querySelector('[data-play-pause="toggle"]');
  const iconPath = buttonToggle.querySelector('[data-play-pause="path"]');
  const buttonText = document.querySelector('.svgContext');
  const audioElement = document.getElementById('flute-audio');
  let isPlaying = false;

  buttonToggle.addEventListener("click", () => {
    // 形状变形动画
    gsap.to(iconPath, {
      duration: 0.5,
      morphSVG: {
        type: "rotational",
        map: "complexity",
        shape: isPlaying ? playPath : pausePath
      },
      ease: "power4.inOut"
    });
    
    // 控制音频播放
    if (isPlaying) {
      audioElement.pause();
      buttonText.textContent = '播放音乐';
    } else {
      audioElement.play();
      buttonText.textContent = '暂停音乐';
    }
    
    isPlaying = !isPlaying;
  });
  
  // 音频播放结束时重置状态
  audioElement.addEventListener('ended', function() {
    isPlaying = false;
    gsap.to(iconPath, {
      duration: 0.5,
      morphSVG: {
        type: "rotational",
        map: "complexity",
        shape: playPath
      },
      ease: "power4.inOut"
    });
    buttonText.textContent = '播放音乐';
  });
}