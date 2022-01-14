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
		let item = await chrome.storage.sync.get(itemName);
		return item;
	} else {
		await chrome.storage.sync.get(itemName, (result) => {
			callback(result[itemName]);
		});
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
