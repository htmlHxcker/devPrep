import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import cardReducer from './reducers/cardReducer';
import currentReducer from './reducers/currentReducer';

const reducer = combineReducers({
	cards: cardReducer,
	current: currentReducer,
});
const store = createStore(reducer, applyMiddleware(thunk));
export default store;
