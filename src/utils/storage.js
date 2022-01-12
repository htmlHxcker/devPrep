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
const updateAnecdote = async (id) => {
	const anecdotes = await getAll();
	const anecdoteToChange = anecdotes.find((n) => n.id === id);
	const changedAnecdote = {
		...anecdoteToChange,
		votes: anecdoteToChange.votes + 1,
	};
	const req = await axios.put(`${baseUrl}/${id}`, changedAnecdote);
	return req.data;
};
export const editStorage = async (id, editedItem, storageItem = 'cards') => {
	const itemsObj = await getStorage(storageItem);
	let updatedStorage = itemsObj[storageItem].map((card) =>
		card.id !== id ? card : editedItem
	);
	setStorage({ [storageItem]: updatedStorage });
	return updatedStorage;
};
