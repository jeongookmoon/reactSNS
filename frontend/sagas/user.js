import { all, fork, takeEvery, call, put } from "redux-saga/effects"
import {
  LOG_IN_REQUEST, LOG_IN_SUCCESS, LOG_IN_FAILURE,
  SIGN_UP_REQUEST, SIGN_UP_SUCCESS, SIGN_UP_FAILURE,
  LOG_OUT_REQUEST, LOG_OUT_SUCCESS, LOG_OUT_FAILURE,
  LOAD_USER_REQUEST, LOAD_USER_SUCCESS, LOAD_USER_FAILURE
} from "../reducers/user"
import axios from "axios"

axios.defaults.baseURL = "http://localhost:8080/api"

function loginAPI(loginData) {
  // make request to server regarding login action
  return axios.post("/user/login", loginData, {
    withCredentials: true
  })
}

function* login(action) {
  try {
    const result = yield call(loginAPI, action.data)
    // put == dispatch
    yield put({
      type: LOG_IN_SUCCESS,
      data: result.data
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
  return axios.post("/user/", signUpData)
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

function logoutAPI() {
  return axios.post("/user/logout", {}, {
    withCredentials: true,
  })
}

function* logout() {
  try {
    yield call(logoutAPI)
    yield put({
      type: LOG_OUT_SUCCESS
    })
  } catch (error) {
    console.error(error)
    yield put({
      type: LOG_OUT_FAILURE,
      error
    })
  }
}

function* watchLogout() {
  yield takeEvery(LOG_OUT_REQUEST, logout)
}

function loadUserAPI() {
  return axios.get("/user/", {
    withCredentials: true
  })
}

function* loadUser() {
  try {
    const result = yield call(loadUserAPI)
    // put == dispatch
    yield put({
      type: LOAD_USER_SUCCESS,
      data: result.data
    })
  } catch (error) {
    console.error(error)
    yield put({
      type: LOAD_USER_FAILURE,
      error
    })
  }
}

function* watchLoadUser() {
  yield takeEvery(LOAD_USER_REQUEST, loadUser)
}

export default function* userSaga() {
  yield all([
    fork(watchLogin),
    fork(watchSignUp),
    fork(watchLogout),
    fork(watchLoadUser)
  ])
}
