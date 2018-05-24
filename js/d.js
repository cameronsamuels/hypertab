chrome.storage.local.get("a", function(l) {
	var e = document.querySelectorAll(l.a?"a[href]:not([target=_blank]):not([href|='#']):not([href|='?']):not([download])":"[hypertab]");
	if (l.a) for (i = 0; i < e.length; i++) e[i].setAttribute('target', '_blank'), e[i].setAttribute('hypertab', '');
	else for (i = 0; i < e.length; i++) e[i].removeAttribute('target');
})
