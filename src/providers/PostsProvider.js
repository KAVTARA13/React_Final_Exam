import React, { useState, useEffect } from 'react';

import { getPostsData } from '../services';

export const PostsProvider = React.createContext(null);

function PostsProviderComponent({ children }) {
  const [postsList, setPostsList] = useState([]);

  const loadPostsData = async () => {
    const data = await getPostsData({
      limit: 10,
      start: 0,
    });
    if (data) {
      setPostsList(data);
    }
  };

  useEffect(() => {
    loadPostsData();
  }, []);

  const onPostDelete = (post) => {
    const index = postsList.findIndex((el) => el.id === post.id);

    const newState = [
      ...postsList.slice(0, index),
      ...postsList.slice(index + 1),
    ];

    setPostsList(newState);
  };

  const onTodoAdd = (newPost) => {
    const newList = [newPost, ...postsList];
    setPostsList(newList);
  };

  return (
    <PostsProvider.Provider
      value={{
        postsList,
        setPostsList,
        onPostDelete,
        onTodoAdd,
      }}>
      {children}
    </PostsProvider.Provider>
  );
}

export default PostsProviderComponent;
