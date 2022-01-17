chrome.runtime.onInstalled.addListener(() => {
	let optionsUrl = chrome.runtime.getURL('/options.html');
	chrome.tabs.create({
		url: optionsUrl,
		active: true,
	});
});
