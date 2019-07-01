import { all, fork, takeLatest, call, put } from "redux-saga/effects"
import { LOG_IN, LOG_IN_SUCCESS, LOG_IN_FAILURE } from "../reducers/user";

function loginAPI() {
  // make request to server regarding login action
}

function* login() {
  try {
    yield call(loginAPI)
    // put == dispatch
    yield put({
      type: LOG_IN_SUCCESS
    })
  } catch (error) {
    console.error(error)
    yield put({
      type: LOG_IN_FAILURE
    })
  }
}

function* watchLogin() {
  yield takeLatest(LOG_IN, login)
}

export default function* userSaga() {
  yield all([
    fork(watchLogin)
  ])
}
