export const initialState = {
  mainPosts: [
    {
      User: {
        id: 1,
        name: "Maison Margiella"
      },
      content: "It's my first post!",
      img: "https://www.maisonmargiela.com/assets/2017-01/_GAS0853_6.jpg",
      createdAt: "06-23-2019 23:11:15"
    },
    {
      User: {
        id: 2,
        name: "Artist Panya"
      },
      content: "My first picture!",
      img: "https://www.armani.com/cloud/armanif31wp/uploads/2018/06/Men_Fashion_Show_Spring_Summer_2019_Giorgio_Armani_VideoBTS.jpg",
      createdAt: "06-23-2019 23:11:15"
    }
  ],
  imagePaths: [], // path for image thumnails
  addPostError: false,
  isAddingPost: false,
}

export const LOAD_MAIN_POSTS_REQUEST = "LOAD_MAIN_POSTS_REQUEST"
export const LOAD_MAIN_POSTS_SUCCESS = "LOAD_MAIN_POSTS_SUCCESS"
export const LOAD_MAIN_POSTS_FAILURE = "LOAD_MAIN_POSTS_FAILURE"

export const LOAD_HASHTAG_POSTS_REQUEST = "LOAD_HASHTAG_POSTS_REQUEST"
export const LOAD_HASHTAG_POSTS_SUCCESS = "LOAD_HASHTAG_POSTS_SUCCESS"
export const LOAD_HASHTAG_POSTS_FAILURE = "LOAD_HASHTAG_POSTS_FAILURE"

export const LOAD_USER_POSTS_REQUEST = "LOAD_USER_POSTS_REQUEST"
export const LOAD_USER_POSTS_SUCCESS = "LOAD_USER_POSTS_SUCCESS"
export const LOAD_USER_POSTS_FAILURE = "LOAD_USER_POSTS_FAILURE"

export const UPLOAD_IMAGES_REQUEST = "UPLOAD_IMAGES_REQUEST"
export const UPLOAD_IMAGES_SUCCESS = "UPLOAD_IMAGES_SUCCESS"
export const UPLOAD_IMAGES_FAILURE = "UPLOAD_IMAGES_FAILURE"

export const REMOVE_IMAGE = "REMOVE_IMAGE"

export const ADD_POST_REQUEST = "ADD_POST_REQUEST"
export const ADD_POST_SUCCESS = "ADD_POST_SUCCESS"
export const ADD_POST_FAILURE = "ADD_POST_FAILURE"
export const ADD_DUMMY = "ADD_DUMMY"

export const REMOVE_POST_REQUEST = "REMOVE_POST_REQUEST"
export const REMOVE_POST_SUCCESS = "REMOVE_POST_SUCCESS"
export const REMOVE_POST_FAILURE = "REMOVE_POST_FAILURE"

export const LIKE_POST_REQUEST = "LIKE_POST_REQUEST"
export const LIKE_POST_SUCCESS = "LIKE_POST_SUCCESS"
export const LIKE_POST_FAILURE = "LIKE_POST_FAILURE"

export const UNLIKE_POST_REQUEST = "UNLIKE_POST_REQUEST"
export const UNLIKE_POST_SUCCESS = "UNLIKE_POST_SUCCESS"
export const UNLIKE_POST_FAILURE = "UNLIKE_POST_FAILURE"

export const ADD_COMMENT_REQUEST = "ADD_COMMENT_REQUEST"
export const ADD_COMMENT_SUCCESS = "ADD_COMMENT_SUCCESS"
export const ADD_COMMENT_FAILURE = "ADD_COMMENT_FAILURE"

export const LOAD_COMMENTS_REQUEST = "LOAD_COMMENTS_REQUEST"
export const LOAD_COMMENTS_SUCCESS = "LOAD_COMMENTS_SUCCESS"
export const LOAD_COMMENTS_FAILURE = "LOAD_COMMENTS_FAILURE"

export const RETWEET_REQUEST = "RETWEET_REQUEST"
export const RETWEET_SUCCESS = "RETWEET_SUCCESS"
export const RETWEET_FAILURE = "RETWEET_FAILURE"

export const addPost = {
  type: ADD_POST,
}

export const addDummy = {
  type: ADD_DUMMY,
  data: {
    content: "Hello Hello Hello!",
    UserId: 1,
    User: {
      name: "Maison Margiella"
    }
  }
}

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST: {
      return {
        ...state
      }
    }
    case ADD_DUMMY: {
      return {
        ...state,
        mainPosts: [action.data, ...state.mainPosts]
      }
    }
    default: {
      return {
        ...state
      }
    }
  }
}
