export const initialState = {
  isLoggedIn: false,
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

const dummyUser = {
  name: "Maison Margiella",
  post: [],
  following: [],
  follower: [],
  userInfo: {}
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

// For Synchronous Request, no need for saga
export const INCREMENT_NUMBER = {

}

export const loginAction = {
  type: LOG_IN_REQUEST
}

export const logoutAction = {
  type: LOG_OUT_REQUEST
}

export const signUpAction = (data) => {
  return {
    type: SIGN_UP_REQUEST,
    data
  }
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case LOG_IN_REQUEST: {
      return {
        ...state,
        loginData: action.data,
        isLoading: true
      }
    }
    case LOG_IN_SUCCESS: {
      return {
        ...state,
        isLoggedIn: true,
        isLoading: false,
        myInfo: dummyUser
      }
    }
    case LOG_IN_FAILURE: {
      return {
        ...state,
        isLoggedIn: false,
        isLoading: false,
        myInfo: null
      }
    }
    case LOG_OUT_REQUEST: {
      return {
        ...state,
        isLoggedIn: false,
        myInfo: null
      }
    }
    case SIGN_UP_REQUEST: {
      return {
        ...state,
        userInfo: action.data
      }
    }
    default: {
      return {
        ...state
      }
    }
  }
}

export default reducer
