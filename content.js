(function() {
  const playBtn = document.createElement('div');
  playBtn.id = 'imdb-play-btn';
  playBtn.innerHTML = '&#9658; Play';
  playBtn.onclick = function() {
    const currentUrl = window.location.href;
    const playUrl = currentUrl.replace('www.imdb.com', 'www.playimdb.com');
    window.location.href = playUrl;
  };
  
  document.body.appendChild(playBtn);
  
  const style = document.createElement('style');
  style.textContent = `
    #imdb-play-btn {
      position: fixed;
      top: 80px;
      right: 20px;
      background: #f5c518;
      color: #000;
      padding: 12px 20px;
      font-size: 14px;
      font-weight: bold;
      cursor: pointer;
      border-radius: 4px;
      z-index: 999999;
      font-family: Arial, sans-serif;
      box-shadow: 0 2px 8px rgba(0,0,0,0.3);
    }
    #imdb-play-btn:hover {
      background: #e5b515;
    }
  `;
  document.head.appendChild(style);
})();