chrome.storage.local.get("a", function(l) {
  if (!l.a) chrome.storage.local.set({a: true}), l.a = true;
  chrome.browserAction.setBadgeText({text: (l.a ? "on" : "off")});
  chrome.browserAction.setBadgeBackgroundColor({color: (l.a ? "green" : "red")});
  chrome.browserAction.onClicked.addListener(function(tab) {
  	chrome.storage.local.set({a: (l.a ? false : true)});
  	l.a = l.a ? false : true;
  	chrome.browserAction.setBadgeText({text: (l.a ? "on" : "off")});
  	chrome.browserAction.setBadgeBackgroundColor({color: (l.a ? "green" : "red")});
  	chrome.tabs.executeScript(tab.ib, {file: "js/d.js"});
	})
});
