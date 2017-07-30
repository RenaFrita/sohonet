import { all } from 'redux-saga/effects';
import { filesSaga } from './files';

export default function* rootSaga() {
  yield all([
    filesSaga(),
  ]);
}
