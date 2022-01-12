import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import cardReducer from './reducers/cardReducer';

const store = createStore(cardReducer, applyMiddleware(thunk));
export default store;
