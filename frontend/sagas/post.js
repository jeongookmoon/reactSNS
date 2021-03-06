import { all, fork, takeLatest, put, call } from "redux-saga/effects"
import axios from "axios"
import {
  ADD_POST_REQUEST, ADD_POST_SUCCESS, ADD_POST_FAILURE,
  ADD_COMMENT_REQUEST, ADD_COMMENT_SUCCESS, ADD_COMMENT_FAILURE,
  LOAD_MAIN_POSTS_REQUEST, LOAD_MAIN_POSTS_SUCCESS, LOAD_MAIN_POSTS_FAILURE,
  LOAD_HASHTAG_POSTS_REQUEST, LOAD_HASHTAG_POSTS_SUCCESS, LOAD_HASHTAG_POSTS_FAILURE,
  LOAD_USER_POSTS_REQUEST, LOAD_USER_POSTS_SUCCESS, LOAD_USER_POSTS_FAILURE,
  LOAD_COMMENTS_REQUEST, LOAD_COMMENTS_SUCCESS, LOAD_COMMENTS_FAILURE,
  UPLOAD_IMAGES_REQUEST, UPLOAD_IMAGES_SUCCESS, UPLOAD_IMAGES_FAILURE
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
    console.error(error)
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
    console.error(error)
    yield put({
      type: LOAD_MAIN_POSTS_FAILURE,
      error
    })
  }
}

function* watchLoadMainPosts() {
  yield takeLatest(LOAD_MAIN_POSTS_REQUEST, loadMainPosts)
}

function loadHashtagPostsAPI(tag) {
  return axios.get(`/hashtag/${tag}`)
}

function* loadHashtagPosts(action) {
  try {
    const result = yield call(loadHashtagPostsAPI, action.data)
    yield put({
      type: LOAD_HASHTAG_POSTS_SUCCESS,
      data: result.data
    })
  } catch (error) {
    console.error(error)
    yield put({
      type: LOAD_HASHTAG_POSTS_FAILURE,
      error
    })
  }
}

function* watchLoadHashtagPosts() {
  yield takeLatest(LOAD_HASHTAG_POSTS_REQUEST, loadHashtagPosts)
}

function loadUserPostsAPI(id) {
  return axios.get(`/user/${id}/posts`)
}

function* loadUserPosts(action) {
  try {
    const result = yield call(loadUserPostsAPI, action.data)
    yield put({
      type: LOAD_USER_POSTS_SUCCESS,
      data: result.data
    })
  } catch (error) {
    console.error(error)
    yield put({
      type: LOAD_USER_POSTS_FAILURE,
      error
    })
  }
}

function* watchLoadUserPosts() {
  yield takeLatest(LOAD_USER_POSTS_REQUEST, loadUserPosts)
}

function addCommentAPI(data) {
  return axios.post(`/post/${data.postId}/comment`, { content: data.content },
    { withCredentials: true })
}

function* addComment(action) {
  try {
    const result = yield call(addCommentAPI, action.data)
    console.log('result', result)
    console.log('action.data', action.data)
    yield put({
      type: ADD_COMMENT_SUCCESS,
      data: {
        postId: action.data.postId,
        comment: result.data
      }
    })
  } catch (error) {
    console.error(error)
    yield put({
      type: ADD_COMMENT_FAILURE,
      error
    })
  }
}

function* watchAddComment() {
  yield takeLatest(ADD_COMMENT_REQUEST, addComment)
}

function loadCommentsAPI(postId) {
  return axios.get(`/post/${postId}/comments`)
}

function* loadComments(action) {
  try {
    const result = yield call(loadCommentsAPI, action.data)
    yield put({
      type: LOAD_COMMENTS_SUCCESS,
      data: {
        postId: action.data,
        comments: result.data
      }
    })
  } catch (error) {
    console.error(error)
    yield put({
      type: LOAD_COMMENTS_FAILURE,
      error
    })
  }
}

function* watchLoadComments() {
  yield takeLatest(LOAD_COMMENTS_REQUEST, loadComments)
}

function uploadImagesAPI(formData) {
  return axios.get(`/post/images`, formData, {
    withCredentials: true
  })
}

function* uploadImages(action) {
  try {
    const result = yield call(uploadImagesAPI, action.data)
    yield put({
      type: UPLOAD_IMAGES_SUCCESS,
      data: result.data
    })
  } catch (error) {
    console.error(error)
    yield put({
      type: UPLOAD_IMAGES_FAILURE,
      error
    })
  }
}

function* watchUploadImages() {
  yield takeLatest(UPLOAD_IMAGES_REQUEST, uploadImages)
}

export default function* postSaga() {
  yield all([
    fork(watchLoadMainPosts),
    fork(watchAddPost),
    fork(watchAddComment),
    fork(watchLoadComments),
    fork(watchLoadHashtagPosts),
    fork(watchLoadUserPosts),
    fork(watchUploadImages)
  ])
}
