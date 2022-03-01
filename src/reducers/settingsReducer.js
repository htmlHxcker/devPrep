import { getStorage, setStorage } from '../utils/storage';

const settingsReducer = (
  state = { username: '', sync: 'NO' },
  { type, payload },
) => {
  switch (type) {
    case 'GET_SETTINGS':
      return payload || state;
    case 'SET_SETTINGS':
      return payload;
    default:
      return state;
  }
};

export const getSettings = () => async (dispatch) => {
  const settingsObj = await getStorage('settings');
  dispatch({
    type: 'GET_SETTINGS',
    payload: !settingsObj.settings
      ? {}
      : settingsObj.settings,
  });
};

export const setSettings = (values) => async (dispatch) => {
  const previousSettings = await getStorage('settings');
  const newSettings = { ...previousSettings.settings, ...values };
  setStorage({ settings: newSettings });
  dispatch({
    type: 'SET_SETTINGS',
    payload: newSettings,
  });
};

export default settingsReducer;
