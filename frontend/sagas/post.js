import { all, fork, takeLatest, put, call, delay } from "redux-saga/effects"
import axios from "axios"
import {
  ADD_POST_REQUEST, ADD_POST_SUCCESS, ADD_POST_FAILURE,
  ADD_COMMENT_REQUEST, ADD_COMMENT_SUCCESS, ADD_COMMENT_FAILURE,
  LOAD_MAIN_POSTS_REQUEST, LOAD_MAIN_POSTS_SUCCESS, LOAD_MAIN_POSTS_FAILURE
} from "../reducers/post";

function addPostAPI(postData) {
  return axios.post("/post", postData, {
    withCredentials: true
  })
}

function* addPost(action) {
  try {
    const result = yield call(addPostAPI, action.data)
    yield put({
      type: ADD_POST_SUCCESS,
      data: result.data
    })
  } catch (error) {
    yield put({
      type: ADD_POST_FAILURE,
      error
    })
  }
}

function* watchAddPost() {
  yield takeLatest(ADD_POST_REQUEST, addPost)
}

function loadMainPostsAPI() {
  return axios.get("/posts")
}

function* loadMainPosts() {
  try {
    const result = yield call(loadMainPostsAPI)
    yield put({
      type: LOAD_MAIN_POSTS_SUCCESS,
      data: result.data
    })
  } catch (error) {
    yield put({
      type: LOAD_MAIN_POSTS_FAILURE,
      error
    })
  }
}

function* watchLoadMainPosts() {
  yield takeLatest(LOAD_MAIN_POSTS_REQUEST, loadMainPosts)
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
    fork(watchLoadMainPosts),
    fork(watchAddPost),
    fork(watchAddComment)
  ])
}
