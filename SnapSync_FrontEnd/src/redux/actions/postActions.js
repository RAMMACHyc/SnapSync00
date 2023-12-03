
import * as actionTypes from './actionTypes';
import ApiService from '../Api/api';

export const getPosts = (currentPage) => async (dispatch) => {
    try {
      const posts = await ApiService.getPosts(currentPage);
      dispatch({ type: actionTypes.GET_POSTS, payload: posts });
    } catch (error) {
      console.error('Error fetching posts:', error); 
    }
  };


export const addPost = (data) => async (dispatch) => {
  try {
    const newPost = await ApiService.createPost(data);
    dispatch({ type: actionTypes.ADD_POST, payload: newPost });
  } catch (error) {
    console.error('Error adding post:', error);
  }
};

export const deletePost = (postId) => async (dispatch) => {
  try {
    await ApiService.deletePost(postId);
    dispatch({ type: actionTypes.DELETE_POST, payload: postId });
  } catch (error) {
    console.error(`Error deleting post with id ${postId}:`, error);
  }
};



export const updatePost = ({_id:postId , ...post} ) => async (dispatch) => {
  try {
   const updatedPost = await ApiService.updatePost(postId, post);
    dispatch({ type: actionTypes.UPDATE_POST, payload: updatedPost });
  } catch (error) {
    console.error(`Error liking post with id ${post.postId}:`, error);
  }
};

export const selectPost =  (post) => {
  return {
    type: actionTypes.SELECT_POST,
    payload: post
  }
};



export const likePost = (postId) => async (dispatch) => {
  try {
   const likes = await ApiService.likePost(postId);
    dispatch({ type: actionTypes.LIKE_POST, payload: {postId , likes} });
  } catch (error) {
    console.error(`Error liking post with id ${postId}:`, error);
  }
};

