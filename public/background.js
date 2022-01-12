let initialCards = [
	{
		CARD_FRONT: 'What is PrepCards?',
		CARD_BACK:
			'PrepCards is a Chrome Extension that helps you remember things using a Spaced Repetition System.',
		id: 001,
	},
];
let initialSettings = {
	import: [],
	username: '',
};

chrome.runtime.onInstalled.addListener(() => {
	chrome.storage.sync.set({ cards: initialCards });
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
