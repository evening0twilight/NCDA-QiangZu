document.addEventListener('DOMContentLoaded', function() {
  // 获取所有需要动画的元素
  const fadeElements = document.querySelectorAll('.fade-in-element');
  
  // 创建观察器
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        // 添加visible类触发动画
        setTimeout(() => {
          entry.target.classList.add('visible');
        }, 100);
        
        // 停止观察
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.1 // 元素10%可见时触发
  });
  
  // 开始观察
  fadeElements.forEach(el => {
    observer.observe(el);
  });
  
  // 立即触发第一个元素动画
  setTimeout(() => {
    document.querySelector('.time').classList.add('visible');
  }, 300);
});