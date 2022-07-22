const settingsObj = chrome.storage.sync.get('settings');
const syncToCloud = settingsObj.settings ? settingsObj.settings.sync : '';

export const setStorage = (item) => {
  if (syncToCloud === 'YES') {
    chrome.storage.sync.set(item);
  } else {
    chrome.storage.local.set(item);
  }
};
export const getStorage = async (itemName) => {
  if (syncToCloud === 'YES') {
    const item = await chrome.storage.sync.get(itemName);
    return item;
  }
  const item = await chrome.storage.local.get(itemName);
  return item;
};
export const editStorage = async (id, editedItem, storageItem = 'cards') => {
  const itemsObj = await getStorage(storageItem);
  const updatedStorage = itemsObj[storageItem].map((item) =>
    item.id !== id ? item : editedItem
  );
  setStorage({ [storageItem]: updatedStorage });
  return updatedStorage;
};

export const deleteStorageItem = async (id, storageItem = 'cards') => {
  const itemsObj = await getStorage(storageItem);
  const updatedStorage = itemsObj[storageItem].filter((item) => item.id !== id);
  setStorage({ [storageItem]: updatedStorage });
  return updatedStorage;
};
