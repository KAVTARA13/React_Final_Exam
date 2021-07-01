import {
  SET_POSTS,
  GET_POSTS,
  FILTER_POSTS,
  EDIT_POSTS,
  DELETE_POSTS,
} from '../action-types/posts-types';

const initialState = {
  posts: [],
};

export const postsReducer = (state = initialState, action) => {
  switch (action.type) {
    // Counter
    case GET_POSTS:
      return {
        ...state,
        posts: action.payload,
      };
    case DELETE_POSTS:
      return {
        ...state,
        posts: action.payload,
      };
    case SET_POSTS:
      return {};
    case FILTER_POSTS:
      return {};
    case EDIT_POSTS:
      return {};

    default:
      return state;
  }
};

export default postsReducer;
