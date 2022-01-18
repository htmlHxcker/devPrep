const settingsObj = getStorage('settings');
const syncSettings = settingsObj.settings.sync;

export const setStorage = (item) => {
	if (syncSettings === 'YES') {
		chrome.storage.sync.set(item);
	} else {
		chrome.storage.local.set(item);
	}
};
export const getStorage = async (itemName) => {
	if (syncSettings === 'YES') {
		let item = await chrome.storage.sync.get(itemName);
		return item;
	} else {
		let item = await chrome.storage.local.get(itemName);
		return item;
	}
};
export const editStorage = async (id, editedItem, storageItem = 'cards') => {
	const itemsObj = await getStorage(storageItem);
	let updatedStorage = itemsObj[storageItem].map((item) =>
		item.id !== id ? item : editedItem
	);
	setStorage({ [storageItem]: updatedStorage });
	return updatedStorage;
};

export const deleteStorageItem = async (id, storageItem = 'cards') => {
	const itemsObj = await getStorage(storageItem);
	let updatedStorage = itemsObj[storageItem].filter((item) => item.id !== id);
	setStorage({ [storageItem]: updatedStorage });
	return updatedStorage;
};
