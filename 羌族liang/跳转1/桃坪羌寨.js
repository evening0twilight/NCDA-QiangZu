window.onload = function() {
    const imgElement = document.querySelector('.k1');
    
    if (imgElement) {
        imgElement.addEventListener('click', function() {
            // 相对路径：当前目录下的跳转11文件夹中的m1.html
            location.href = '../跳转11/m1.html';
            // 或省略./直接写：location.href = '跳转11/m1.html';
        });
    }
};