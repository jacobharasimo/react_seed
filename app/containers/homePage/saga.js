import { takeLatest, put } from 'redux-saga/effects';
import { errorSample, loadedSample, loadSample } from './actions';

/**
 * Root saga manages watcher lifecycle
 */

function* loadDeviceEvent() {
  try {
    yield put(loadedSample({ sample: {} }));
  } catch (err) {
    yield put(errorSample(err));
  }
}

export default function* LoadhomeSaga() {
  // Watches for LOAD_REPOS actions and calls getRepos when one comes in.
  // By using `takeLatest` only the result of the latest API call is applied.
  // It returns task descriptor (just like fork) so we can continue execution
  // It will be cancelled automatically on component unmount
  yield takeLatest(loadSample().type, loadDeviceEvent);
}
