const initialState = {
	addCard: false,
	editCard: false,
	deleteCard: false,
};

export default (state = initialState, { type }) => {
	switch (type) {
		case 'OPEN_ADD_CARD_MODAL':
			return { ...state, addCard: true };
		case 'CLOSE_ADD_CARD_MODAL':
			return { ...state, addCard: false };
		case 'OPEN_EDIT_CARD_MODAL':
			return { ...state, editCard: true };
		case 'CLOSE_EDIT_CARD_MODAL':
			return { ...state, editCard: false };
		case 'OPEN_DELETE_CARD_MODAL':
			return { ...state, deleteCard: true };
		case 'CLOSE_DELETE_CARD_MODAL':
			return { ...state, deleteCard: false };
		default:
			return state;
	}
};
