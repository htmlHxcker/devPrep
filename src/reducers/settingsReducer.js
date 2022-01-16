const initialState = {};

export default (state = initialState, { type, payload }) => {
	switch (type) {
		case 'GET_SETTINGS':
			return state;
		case 'SET_SETTINGS':
			return payload;
		default:
			return state;
	}
};
