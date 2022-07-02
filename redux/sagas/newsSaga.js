import axios from 'axios';
import { call, put, takeEvery } from 'redux-saga/effects';
import qs from 'querystring';
import config from '../../config';

const { api } = config;

async function getApi(path, resourceType) {
	const res = await axios.get(`${api.baseUrl}?q=mental`, {
		headers: {
			Authorization: `Bearer ${api.apiKey}`,
			'Access-Control-Allow-Origin': '*',
		},
	});

	return res.data.articles;
}

function* fetchNewNews(action) {
	try {
		const newNews = yield call(getApi);
		yield put({ type: 'GET_NEW_NEWS_SUCCESS', newNews: newNews });
	} catch (e) {
		yield put({ type: 'GET_NEW_NEWS_FAILED', message: e.message });
	}
}

export function* newNewsSaga() {
	yield takeEvery('GET_NEW_NEWS_REQUESTED', fetchNewNews);
}
