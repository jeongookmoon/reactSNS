export const initialState = {
  mainPosts: [
    {
      id: 0,
      User: {
        id: 1,
        name: "Maison Margiella"
      },
      content: "It's my first post!",
      img: "https://www.maisonmargiela.com/assets/2017-01/_GAS0853_6.jpg",
      createdAt: "06-23-2019 23:11:15",
      comments: []
    },
    {
      id: 1,
      User: {
        id: 2,
        name: "Artist Panya"
      },
      content: "My first picture!",
      img: "https://www.armani.com/cloud/armanif31wp/uploads/2018/06/Men_Fashion_Show_Spring_Summer_2019_Giorgio_Armani_VideoBTS.jpg",
      createdAt: "06-23-2019 23:11:15",
      comments: []
    }
  ],
  imagePaths: [], // path for image thumnails
  addPostErrorDetail: "",
  isAddingPost: false,
  postAdded: false,
  addCommentErrorDetail: "",
  isAddingComment: false,
  commentAdded: false
}

const dummyPost = {
  id: 2,
  User: {
    id: 3,
    name: "Ralph Lauren"
  },
  content: "Third post!!",
  img: "https://cdn.shopify.com/s/files/1/0135/0280/8123/articles/Screen_Shot_2019-05-14_at_1.12.07_PM_1024x1024.png?v=1557855486",
  createdAt: "07-05-2019 11:12:13",
  comments: []
}

const dummyComment = {
  id: 4,
  User: {
    id: 3,
    name: "Ralph Lauren"
  },
  createdAt: new Date(),
  content: "This is a example comment!!"
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

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST_REQUEST: {
      return {
        ...state,
        isAddingPost: true,
        postAdded: false,
        addPostErrorDetail: ""
      }
    }
    case ADD_POST_SUCCESS: {
      return {
        ...state,
        isAddingPost: false,
        postAdded: true,
        mainPosts: [dummyPost, ...state.mainPosts]
      }
    }
    case ADD_POST_FAILURE: {
      return {
        ...state,
        isAddingPost: false,
        addPostErrorDetail: action.error
      }
    }
    case ADD_COMMENT_REQUEST: {
      return {
        ...state,
        isAddingComment: true,
        commentAdded: false,
        addCommentErrorDetail: ""
      }
    }
    case ADD_COMMENT_SUCCESS: {
      // to update the comment for the post and keep the rest
      const postIndex = state.mainPosts.findIndex(post => post.id === action.data.postId)
      const post = state.mainPosts[postIndex]
      const comments = [...post.comments, dummyComment]
      const mainPosts = [...state.mainPosts]
      mainPosts[postIndex] = { ...post, comments }

      return {
        ...state,
        isAddingComment: false,
        commentAdded: true,
        mainPosts: [dummyPost, ...state.mainPosts]
      }
    }
    case ADD_COMMENT_FAILURE: {
      return {
        ...state,
        isAddingComment: false,
        addCommentErrorDetail: action.error
      }
    }
    default: {
      return {
        ...state
      }
    }
  }
}
