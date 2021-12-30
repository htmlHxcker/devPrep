export const setStorage = (item, callback) => {
	if (callback === undefined) {
		chrome.storage.sync.set(item);
	} else {
		chrome.storage.sync.set(item, () => {
			callback(item);
		});
	}
};
export const getStorage = async (itemName, callback) => {
	if (callback === undefined) {
		chrome.storage.sync.get(itemName);
	} else {
		await chrome.storage.sync.get(itemName, (result) => {
			callback(result[itemName]);
		});
	}
};
