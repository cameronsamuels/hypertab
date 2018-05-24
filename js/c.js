chrome.storage.local.get("a", function(l) {
	if (l.a) {
    var e = document.querySelectorAll("a[href]:not([target=_blank]):not([href|='#']):not([href|='?']):not([download])");
		for (i = 0; i < e.length; i++) e[i].setAttribute('target', '_blank'), e[i].setAttribute('hypertab', '');
	}
})
