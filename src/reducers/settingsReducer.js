import { getStorage, setStorage } from '../utils/storage';

const settingsReducer = (state = {}, { type, payload }) => {
	switch (type) {
		case 'GET_SETTINGS':
			return payload || state;
		case 'SET_SETTINGS':
			return payload;
		default:
			return state;
	}
};

export const getSettings = () => {
	return async (dispatch) => {
		const settingsObj = await getStorage('settings');
		dispatch({
			type: 'GET_SETTINGS',
			payload: settingsObj.settings === undefined ? {} : settingsObj.settings,
		});
	};
};

export const setSettings = (values) => {
	return async (dispatch) => {
		setStorage({ settings: values });
		dispatch({
			type: 'SET_SETTINGS',
			payload: values,
		});
	};
};

export default settingsReducer;
