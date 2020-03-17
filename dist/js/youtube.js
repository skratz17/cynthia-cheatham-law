var tag = document.createElement('script');

tag.src = 'https://www.youtube.com/iframe_api';
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

var player;
function onYouTubeIframeAPIReady() {
  player = new YT.Player('player', {
    height: '390',
    width: '640',
    videoId: '5Cl6AXq2DpA',
    host: 'https://www.youtube.com'
  });
}

var changeVideo = function(videoId) {
  var url = 'https://www.youtube.com/v/' + videoId + '?version=3';
  player.loadVideoByUrl(url);
};

var buttons = document.querySelectorAll('.video-button');
buttons.forEach(function(b) {
  b.onclick = function() {
    var selected = document.querySelector('.btn-medium');
    selected.classList.remove('btn-medium');
    selected.classList.add('btn-dark');

    changeVideo(b.dataset.videoid);

    b.classList.remove('btn-dark');
    b.classList.add('btn-medium');

    var recusalText = document.querySelector('.recusal-text');
    b.dataset.trigger === 'recusal' ? recusalText.classList.remove('nodisplay') : recusalText.classList.add('nodisplay');
  }
});