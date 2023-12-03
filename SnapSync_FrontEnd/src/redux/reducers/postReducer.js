import * as actionTypes from "../actions/actionTypes";

const initialState = {
  selectedPost: null,
  posts: [],
  
};

const postReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.GET_POSTS:
      return {
        ...state,
        posts: action.payload.data, 
        numberOfPages: action.payload.numberOfPages,
      };
     
  
    case actionTypes.ADD_POST:
      return { ...state, posts: [...state.posts, action.payload.post] };

    case actionTypes.UPDATE_POST:
      return {
        ...state,
        posts: state.posts.map((post) =>
          post._id === action.payload._id
            ? { ...post, ...action.payload }
            : post
        ),
      };

    case actionTypes.SELECT_POST:
      return {
        ...state,
        selectedPost: action.payload,
      };


    case actionTypes.CLEAR_FORM:
      return {
        ...state,
        selectedPost: null,
      };
    case actionTypes.DELETE_POST:
      console.log(action.payload);
      return {
        ...state,
        posts: state.posts.filter((post) => post._id !== action.payload),
      };
    case actionTypes.LIKE_POST:
      return {
        ...state,
        posts: state.posts.map((post) =>
          post._id === action.payload.postId
            ? { ...post, likes: action.payload.likes }
            : post
        ),
      };

    default:
      return state;
  }
};

export default postReducer;
