document.addEventListener('DOMContentLoaded', function() {
  const hiddenElements = document.querySelectorAll('.hidden-element');
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      // 当元素进入视口时
      if (entry.isIntersecting) {
        // 移除隐藏，添加显示
        entry.target.classList.add('show-element');
        
        // 应用动画
        const animationClass = entry.target.dataset.animation;
        if (animationClass) {
          entry.target.classList.add('animate__animated', animationClass);
        }
        
        // 停止观察
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  });
  
  // 隐藏所有
  hiddenElements.forEach(el => {
    observer.observe(el);
  });
});