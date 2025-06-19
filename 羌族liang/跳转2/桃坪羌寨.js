window.onload = function() {
    const imgElement = document.querySelector('.k1');
    
    if (imgElement) {
        imgElement.addEventListener('click', function() {
            // 相对路径：当前目录下的跳转22文件夹中的m1.html
            location.href = '../跳转22/m1.html';
            // 或省略./直接写（更简洁）：
            // location.href = '跳转22/m1.html';
        });
    }
};
  const jiantou = document.querySelector('.fanhui');
      jiantou.addEventListener('click', function() {
        window.location.href = "../../index.html";
      });