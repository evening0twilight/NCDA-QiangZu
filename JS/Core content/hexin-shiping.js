document.addEventListener('DOMContentLoaded', function() {
  const video = document.getElementById('main-video');
  
  // 创建观察器检测视频是否在视口中
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        // 当视频进入视口，尝试播放
        video.play().catch(e => {
          console.log('自动播放被阻止，需要用户交互');
        });
      } else {
        // 当视频离开视口，暂停播放
        video.pause();
      }
    });
  }, { threshold: 0.5 });
  
  // 开始观察视频元素
  observer.observe(video);
});