import { all } from 'redux-saga/effects';
import { newNewsSaga } from './newsSaga';

export default function* rootSaga() {
	yield all([newNewsSaga()]);
}
