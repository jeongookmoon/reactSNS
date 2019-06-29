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
  imagePaths: []
}

export const ADD_POST = "ADD_POST"
export const ADD_DUMMY = "ADD_DUMMY"

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

const reducer = (state = initialState, action) => {
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

export default reducer
