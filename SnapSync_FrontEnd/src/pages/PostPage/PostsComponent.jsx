import React, { useEffect } from 'react';
import PostComponent from './PostComponent';
import { getPosts } from '../../redux/actions/postActions';
import { useDispatch, useSelector } from 'react-redux';
// import PropTypes from 'prop-types';

const PostsComponent = () => {
  const posts  = useSelector((state) => state.posts.posts);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);
  
  if (!Array.isArray(posts)) {
    return (
      <div>
        No posts to display.
      </div>
    );
  }

  return (
    <>
      {posts?.map((post, index) => (
        <PostComponent key={post._id || index} post={post} 
        />
      ))}
    </>
  );
};



export default PostsComponent;
