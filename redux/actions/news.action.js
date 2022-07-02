import * as type from '../types';

export function getNewNews() {
	return {
		type: type.GET_NEW_NEWS_REQUESTED,
	};
}
