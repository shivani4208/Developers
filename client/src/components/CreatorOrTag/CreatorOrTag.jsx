import React, { useEffect } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import Post from '../Posts/Post/Post';
import { getPostsByCreator, getPostsBySearch } from '../../actions/posts';

const CreatorOrTag = () => {
  const { name } = useParams();
  const dispatch = useDispatch();
  const { posts, isLoading } = useSelector((state) => state.posts);

  const location = useLocation();

  useEffect(() => {
    if (location.pathname.startsWith('/tags')) {
      dispatch(getPostsBySearch({ tags: name }));
    } else {
      dispatch(getPostsByCreator(name));
    }
  }, []);

  if (!posts.length && !isLoading) return 'No posts';

  return (
    <div>
      <h2>{name}</h2>
      <div style={{ margin: '20px 0 50px 0' }} />
      {isLoading ? <div>loading</div> : (
        <div>
          {posts?.map((post) => (
            <div key={post._id} >
              <Post post={post} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CreatorOrTag;
