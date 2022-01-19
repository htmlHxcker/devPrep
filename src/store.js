import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import cardReducer from './reducers/cardReducer';
import currentReducer from './reducers/currentReducer';
import modalReducer from './reducers/modalReducer';
import settingsReducer from './reducers/settingsReducer';

const reducer = combineReducers({
	cards: cardReducer,
	current: currentReducer,
	modal: modalReducer,
	settings: settingsReducer,
});
const store = createStore(reducer, applyMiddleware(thunk));
export default store;
