window.onload = function() {
    const imgElement = document.querySelector('.k1');
    
    if (imgElement) {
        imgElement.addEventListener('click', function() {
            // 相对路径：当前目录下的跳转33文件夹中的m1.html（省略./更简洁）
            location.href = '../跳转33/m1.html';
        });
    }
};