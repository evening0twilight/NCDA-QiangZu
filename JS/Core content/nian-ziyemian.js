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
        }, 100); // 小延迟确保浏览器渲染
        
        // 停止观察已显示的元素
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.1 // 元素10%可见时触发
  });
  
  // 开始观察元素
  fadeElements.forEach(el => {
    observer.observe(el);
  });
  
  // 如果希望页面加载立即触发第一个元素动画
  setTimeout(() => {
    document.querySelector('.time').classList.add('visible');
  }, 300);
});