const cardReducer = async (state = [], action) => {
	switch (action.type) {
		case 'ADD_CARD':
			return [...state, action.data];
		case 'EDIT_CARD':
			return state.map((card) =>
				card.id !== action.data.id ? card : action.data
			);
		case 'DELETE_CARD':
			return state.filter((card) => card.id !== action.data.id);
	}
};
