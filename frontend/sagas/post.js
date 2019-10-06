import { all, fork, takeLatest, put, delay } from "redux-saga/effects"
import axios from "axios"
import {
  ADD_POST_REQUEST, ADD_POST_SUCCESS, ADD_POST_FAILURE,
  ADD_COMMENT_REQUEST, ADD_COMMENT_SUCCESS, ADD_COMMENT_FAILURE
} from "../reducers/post";

function addPostAPI(postData) {
  console.log('ran before111')
  return axios.post("/post", postData, {
    withCredentials: true
  })
}

function* addPost(action) {
  try {
    console.log('ran before')
    const result = yield call(addPostAPI, action.data)
    console.log('ran')
    yield put({
      type: ADD_POST_SUCCESS,
      data: result.data
    })
  } catch (error) {
    console.log("error", error)
    yield put({
      type: ADD_POST_FAILURE,
      error
    })
  }
}

function* watchAddPost() {
  yield takeLatest(ADD_POST_REQUEST, addPost)
}

function addCommentAPI() {

}

function* addComment(action) {
  try {
    yield delay(1000)
    yield put({
      type: ADD_COMMENT_SUCCESS,
      data: {
        postId: action.data.postId
      }
    })
  } catch (error) {
    yield put({
      type: ADD_COMMENT_FAILURE,
      error
    })
  }
}

function* watchAddComment() {
  yield takeLatest(ADD_COMMENT_REQUEST, addComment)
}

export default function* postSaga() {
  yield all([
    fork(watchAddPost),
    fork(watchAddComment)
  ])
}
