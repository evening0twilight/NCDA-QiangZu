document.addEventListener('DOMContentLoaded', function() {
  const video = document.getElementById('main-video');
  
  // 视频在不在视口
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        // 进入视口播放
        video.play().catch(e => {
          console.log('自动播放被阻止，需要用户交互');
        });
      } else {
        // 离开视口暂停
        video.pause();
      }
    });
  }, { threshold: 0.5 });
  
  // 观察视频元素
  observer.observe(video);
});