import { combineReducers } from 'redux';
import { newNews } from './news.reducer';

const rootReducer = combineReducers({
	newNews: newNews,
});

export default rootReducer;
