import { all, fork, takeEvery, call, put, delay } from "redux-saga/effects"
import {
  LOG_IN_REQUEST, LOG_IN_SUCCESS, LOG_IN_FAILURE,
  SIGN_UP_REQUEST, SIGN_UP_SUCCESS, SIGN_UP_FAILURE
} from "../reducers/user";
import axios from "axios"

function loginAPI() {
  // make request to server regarding login action
  return axios.post("/login")
}

function* login() {
  try {
    yield delay(1000)
    // yield call(loginAPI)
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

function signUpAPI(signUpData) {
  // make request to server regarding login action
  return axios.post("http://localhost:8080/api/user/", signUpData)
}

function* signUp(action) {
  try {
    yield call(signUpAPI, action.data)
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
