document.addEventListener('DOMContentLoaded', function() {
  // 选择所有需要观察的元素
  const hiddenElements = document.querySelectorAll('.hidden-element');
  
  // 创建Intersection Observer
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      // 当元素进入视口时
      if (entry.isIntersecting) {
        // 移除隐藏类，添加显示类
        entry.target.classList.add('show-element');
        
        // 获取并应用动画类
        const animationClass = entry.target.dataset.animation;
        if (animationClass) {
          entry.target.classList.add('animate__animated', animationClass);
        }
        
        // 停止观察该元素
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  });
  
  // 开始观察所有隐藏元素
  hiddenElements.forEach(el => {
    observer.observe(el);
  });
});