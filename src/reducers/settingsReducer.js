import { getStorage, setStorage } from '../utils/storage';

export default (state, { type, payload }) => {
	switch (type) {
		case 'GET_SETTINGS':
			return payload;
		case 'SET_SETTINGS':
			return payload;
		default:
			return state;
	}
};
export const getSettings = () => {
	return async (dispatch) => {
		const settingsObj = await getStorage('settings');
		const initialSettings = {
			import: [],
			contextMenu: 'YES',
			username: '',
		};
		dispatch({
			type: 'GET_SETTINGS',
			payload: !settingsObj.settings ? initialSettings : settingsObj.settings,
		});
	};
};

export const setSettings = (values) => {
	return async (dispatch) => {
		await setStorage({ settings: values });
		dispatch({
			type: 'SET_SETTINGS',
			payload: values,
		});
	};
};
