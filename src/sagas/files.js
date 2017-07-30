import { call, put, takeLatest } from 'redux-saga/effects';
import { fetchFiles } from '../services/files';

export function* getFiles(action) {
  const data = yield call(fetchFiles, action.payload.page)
  yield put({
    type: "LOAD_FILES",
    payload: {
      data,
    },
  })
}

export function* filesSaga() {
  yield takeLatest('GET_FILES', getFiles)
}
