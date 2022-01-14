let initialSettings = {
	import: [],
	username: '',
};

chrome.runtime.onInstalled.addListener(() => {
	chrome.storage.sync.set({ settings: initialSettings });
	let optionsUrl = chrome.runtime.getURL('/options.html');
	chrome.tabs.create({
		url: optionsUrl,
		active: true,
	});
});
