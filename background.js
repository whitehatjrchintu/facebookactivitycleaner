chrome.webNavigation.onCompleted.addListener(function(details) {
    if(details.frameId === 0) {
        chrome.tabs.executeScript(details.tabId, {"file": "content.js"}); 
    }
});

chrome.runtime.onInstalled.addListener(function (details) {
  if (details.reason === "install") {
    chrome.tabs.create({ url: "https://github.com/whitehatjrchintu/" });
	var audio = new Audio("/gta.mp3");
	audio.play();
	alert("Thank you for using my extension. :)");
  } else if (details.reason === "update") {
    chrome.tabs.create({ url: "https://github.com/whitehatjrchintu/" });
	var audio = new Audio("/gta.mp3");
	audio.play();
	alert("Thank you for using my extension. :)");
  }
});

chrome.browserAction.onClicked.addListener(function(tab) {
    chrome.tabs.create({ url: "https://github.com/whitehatjrchintu/" });
	var audio = new Audio("/gta.mp3");
	audio.play();
	alert("Thank you for using my extension. :)");
});