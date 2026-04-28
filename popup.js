document.addEventListener('DOMContentLoaded', function() {
  const messageEl = document.getElementById('message');
  const playBtn = document.getElementById('playBtn');

  chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
    const currentUrl = tabs[0].url;
    const urlObj = new URL(currentUrl);
    const pathname = urlObj.pathname;

    const titleMatch = pathname.match(/\/title\/(tt\d+)/);
    
    if (titleMatch) {
      const movieId = titleMatch[1];
      const playUrl = currentUrl.replace('www.imdb.com', 'www.playimdb.com');
      
      messageEl.textContent = 'Movie detected: ' + movieId;
      playBtn.onclick = function() {
        chrome.tabs.update({ url: playUrl });
        window.close();
      };
    } else {
      messageEl.textContent = 'No movie page detected';
      playBtn.disabled = true;
      playBtn.textContent = 'Not on IMDB';
    }
  });
});