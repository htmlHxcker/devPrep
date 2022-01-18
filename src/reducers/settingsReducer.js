import { getStorage, setStorage } from '../utils/storage';

const settingsReducer = (state = {}, { type, payload }) => {
	switch (type) {
		case 'GET_SETTINGS':
			console.log('payload for getSettings', payload);
			console.log('State for getSettings', state);
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
		console.log('settingsObj.settings', settingsObj.settings);
		dispatch({
			type: 'GET_SETTINGS',
			payload:
				Object.keys(settingsObj.settings).length === 0
					? {}
					: settingsObj.settings,
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
