function resizeBorder() {
  const img = document.getElementById('border-image');
  const leaf = document.getElementById('leaf-decoration');
  const imgRatio = 1920 / 1200; // 原图比例
  const windowRatio = window.innerWidth / window.innerHeight;
  
  if (windowRatio > imgRatio) {
    // 窗口更宽，高度优先
    img.style.height = '100%';
    img.style.width = 'auto';
    img.style.left = `${(window.innerWidth - img.clientWidth)/2}px`;
    img.style.top = '0';
    
    // 调整叶子位置
    leaf.style.left = `${(window.innerWidth - img.clientWidth)/2 + img.clientWidth * 0.76}px`;
    leaf.style.bottom = `${window.innerHeight * 0.55}px`;
  } else {
    // 窗口更高，宽度优先
    img.style.width = '100%';
    img.style.height = 'auto';
    img.style.top = `${(window.innerHeight - img.clientHeight)/2}px`;
    img.style.left = '0';
    
    // 调整叶子位置
    leaf.style.left = `${window.innerWidth * 0.8}px`;
    leaf.style.top = `${(window.innerHeight - img.clientHeight)/2 + img.clientHeight * 0.2}px`;
  }
  
  // 同步调整按钮位置
  positionButton();
}

// 按钮定位函数
function positionButton() {
  const btn = document.querySelector('.close-btn');
  const img = document.getElementById('border-image');
  
  // 计算边框可见区域的右上角坐标
  const borderRight = (window.innerWidth + img.clientWidth) / 2;
  const borderTop = (window.innerHeight - img.clientHeight) / 2;
  
  // 设置按钮位置（向右上角偏移20px）
  btn.style.right = `${window.innerWidth - borderRight + 20}px`;
  btn.style.top = `${borderTop + 20}px`;
}

// 初始加载和窗口变化时都调整
window.addEventListener('load', resizeBorder);
window.addEventListener('resize', resizeBorder);