import * as type from '../types';

const initialNewsState = {
	newNews: [],
	loading: false,
	error: null,
};

export function newNews(state = initialNewsState, action) {
	switch (action.type) {
		case type.GET_NEW_NEWS_REQUESTED:
			return {
				...state,
				loading: true,
			};
		case type.GET_NEW_NEWS_SUCCESS:
			return {
				...state,
				loading: false,
				newNews: action.newNews.splice(0, 3),
			};
		case type.GET_NEW_NEWS_FAILED:
			return {
				...state,
				loading: false,
				error: action.message,
			};
		default:
			return state;
	}
}
