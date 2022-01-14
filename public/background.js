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

	chrome.contextMenus.create({
		id: 'createprepcard',
		title: 'Create PrepCard with Selected Text!: %s',
		contexts: ['selection'],
	});

	chrome.contextMenus.onClicked.addListener((info, tab) => {
		if (info.menuItemId === 'createprepcard') {
			console.log('It works!');
		}
	});
});
