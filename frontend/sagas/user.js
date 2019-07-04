import { all, fork, takeEvery, call, put } from "redux-saga/effects"
import { LOG_IN_SUCCESS, LOG_IN_FAILURE, LOG_IN_REQUEST, SIGN_UP_REQUEST } from "../reducers/user";
import axios from "axios"

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
  yield takeEvery(LOG_IN_REQUEST, login)
}

function signUpAPI() {
  // make request to server regarding login action
}

function* signUp() {
  try {
    yield call(signUpPI)
    // put == dispatch
    yield put({
      type: SIGN_UP_SUCCESS
    })
  } catch (error) {
    console.error(error)
    yield put({
      type: SIGN_UP_FAILURE
    })
  }
}

function* watchSignUp() {
  yield takeEvery(SIGN_UP_REQUEST, signUp)
}

export default function* userSaga() {
  yield all([
    fork(watchLogin),
    fork(watchSignUp)
  ])
}
