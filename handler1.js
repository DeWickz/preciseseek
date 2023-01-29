document.getElementById("options-form").addEventListener("submit", function() {
  var seekTimeDe = document.getElementById("seek-time-de").value;
  var seekTimeIn = document.getElementById("seek-time-in").value;

  chrome.storage.sync.set({seekTimeDe: seekTimeDe, seekTimeIn: seekTimeIn}, function() {
    console.log("Seek time saved");
  });
});
