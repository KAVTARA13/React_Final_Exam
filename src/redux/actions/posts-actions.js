import {
  GET_POSTS,
  SET_POSTS,
  FILTER_POSTS,
  EDIT_POSTS,
  DELETE_POSTS,
} from '../action-types/posts-types';

export const getPostsAction = (payload) => ({
  type: GET_POSTS,
  payload,
});

export const deletePostsAction = (payload) => ({
  type: DELETE_POSTS,
  payload,
});

export const setPostsAction = (payload) => ({
  type: SET_POSTS,
  payload,
});

export const filterPostsAction = (payload) => ({
  type: FILTER_POSTS,
  payload,
});

export const editPostsAction = (payload) => ({
  type: EDIT_POSTS,
  payload,
});
