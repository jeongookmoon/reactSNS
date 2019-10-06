export const initialState = {
  isLoggingIn: false,
  isLoggingOut: false,
  loginErrorDetail: "",
  isSignedUp: false,
  isSigningUp: false,
  signUpErrorDetail: "",
  isLoading: false,
  followingList: [],
  followerList: [],
  myInfo: null,
  userInfo: null
}

// Action Name
export const LOG_IN_REQUEST = "LOG_IN_REQUEST"
export const LOG_IN_SUCCESS = "LOG_IN_SUCCESS"
export const LOG_IN_FAILURE = "LOG_IN_FAILURE"

export const LOG_OUT_REQUEST = "LOG_OUT_REQUEST"
export const LOG_OUT_SUCCESS = "LOG_OUT_SUCCESS"
export const LOG_OUT_FAILURE = "LOG_OUT_FAILURE"

export const SIGN_UP_REQUEST = "SIGN_UP_REQUEST"
export const SIGN_UP_SUCCESS = "SIGN_UP_SUCCESS"
export const SIGN_UP_FAILURE = "SIGN_UP_FAILURE"

export const LOAD_USER_REQUEST = "LOAD_USER_REQUEST"
export const LOAD_USER_SUCCESS = "LOAD_USER_SUCCESS"
export const LOAD_USER_FAILURE = "LOAD_USER_FAILURE"

export const FOLLOWER_USER_REQUEST = "FOLLOWER_USER_REQUEST"
export const FOLLOWER_USER_SUCCESS = "FOLLOWER_USER_SUCCESS"
export const FOLLOWER_USER_FAILURE = "FOLLOWER_USER_FAILURE"

export const UNFOLLOW_USER_REQUEST = "UNFOLLOW_USER_REQUEST"
export const UNFOLLOW_USER_SUCCESS = "UNFOLLOW_USER_SUCCESS"
export const UNFOLLOW_USER_FAILURE = "UNFOLLOW_USER_FAILURE"

export const REMOVE_USER_REQUEST = "REMOVE_USER_REQUEST"
export const REMOVE_USER_SUCCESS = "REMOVE_USER_SUCCESS"
export const REMOVE_USER_FAILURE = "REMOVE_USER_FAILURE"

export const ADD_POST_TO_ME = "ADD_POST_TO_ME"

// For Synchronous Request, no need for saga
export const INCREMENT_NUMBER = {

}

export const loginRequestAction = data => ({
  type: LOG_IN_REQUEST,
  data
})

export const logoutRequestAction = {
  type: LOG_OUT_REQUEST
}

export const signUpRequestAction = (data) => ({
  type: SIGN_UP_REQUEST,
  data
})

export default (state = initialState, action) => {
  switch (action.type) {
    case LOG_IN_REQUEST: {
      return {
        ...state,
        loginData: action.data,
        isLoggingIn: true,
        loginErrorDetail: ""
      }
    }
    case LOG_IN_SUCCESS: {
      return {
        ...state,
        isLoggingIn: false,
        isLoading: false,
        myInfo: action.data
      }
    }
    case LOG_IN_FAILURE: {
      return {
        ...state,
        isLoggingIn: false,
        isLoading: false,
        loginErrorDetail: action.error,
        myInfo: null
      }
    }
    case LOG_OUT_REQUEST: {
      return {
        ...state,
        isLoggingOut: true
      }
    }
    case LOG_OUT_SUCCESS: {
      return {
        ...state,
        isLoggingOut: false,
        myInfo: null
      }
    }
    case SIGN_UP_REQUEST: {
      return {
        ...state,
        isSigningUp: true,
        isSignedUp: false,
        signUpErrorDetail: ""
      }
    }
    case SIGN_UP_SUCCESS: {
      return {
        ...state,
        isSigningUp: false,
        isSignedUp: true,
        userInfo: action.data
      }
    }
    case SIGN_UP_FAILURE: {
      return {
        ...state,
        isSigningUp: false,
        signUpErrorDetail: action.error
      }
    }
    case LOAD_USER_REQUEST: {
      return {
        ...state
      }
    }
    case LOAD_USER_SUCCESS: {
      return {
        ...state,
        myInfo: action.data
      }
    }
    case LOAD_USER_FAILURE: {
      return {
        ...state,
      }
    }
    default: {
      return {
        ...state
      }
    }
  }
}
