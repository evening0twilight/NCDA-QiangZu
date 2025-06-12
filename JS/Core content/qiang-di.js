document.addEventListener('DOMContentLoaded', function() {
  const audio = document.getElementById('flute-audio');
  const playButton = document.getElementById('play-button');
  const playImage = playButton.querySelector('img');
  const playText = playButton.querySelector('span');
  
  playButton.addEventListener('click', function() {
    if (audio.paused) {
      // 播放音频
      audio.play();
      playButton.classList.add('playing');
      playImage.src = '../../Images/核心文化/羌笛/暂停.png'; // 如果有暂停图标
      playText.textContent = '点击暂停羌笛音乐';
    } else {
      // 暂停音频
      audio.pause();
      playButton.classList.remove('playing');
      playImage.src = '../../Images/核心文化/羌笛/start.png';
      playText.textContent = '点击播放羌笛音乐';
      }
  });
    
  // 音频播放结束后重置按钮状态
  audio.addEventListener('ended', function() {
    playButton.classList.remove('playing');
    playImage.src = '../../Images/核心文化/羌笛/start.png';
    playText.textContent = '点击播放羌笛音乐';
  });
});