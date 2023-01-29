// content_script.js
var seekTimeDe = 1;
var seekTimeIn = 2.5;
chrome.storage.sync.get(['seekTimeDe', 'seekTimeIn'], function(result) {
  seekTimeDe = result.seekTimeDe;
  seekTimeIn = result.seekTimeIn;
});

document.addEventListener("keydown", customSeekHandler);
function customSeekHandler(event) {
  if (event.keyCode === 189) {
      // Decrement the current time by the seek time
      var video = document.querySelector("video");
      video.currentTime -= seekTimeDe*1;
    } else if (event.keyCode === 187) {
      // Increment the current time by the seek time
      var video = document.querySelector("video");
      video.currentTime += seekTimeIn*1;
    }
}