import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import moment from 'moment';
import { useParams, useHistory, Link } from 'react-router-dom';
import './open-post.css';
import { getPost, getPostsBySearch } from '../../actions/posts';

const Post = () => {
  const { post, posts, isLoading } = useSelector((state) => state.posts);
  const dispatch = useDispatch();
  const history = useHistory();
  const { id } = useParams();

  useEffect(() => {
    dispatch(getPost(id));
  }, [id]);

  useEffect(() => {
    if (post) {
      dispatch(getPostsBySearch({ search: 'none', tags: post?.tags.join(',') }));
    }
  }, [post]);

  if (!post) return null;

  const openPost = (_id) => history.push(`/posts/${_id}`);

  if (isLoading) {
    return (
      <div>loading</div>
    );
  }

  const recommendedPosts = posts.filter(({ _id }) => _id !== post._id);

  return (
    <div className="post-container">
      <div>
        <div>
          <h1>{post.title}</h1>
          <h5 className="pb-5">{post.tags.map((tag) => (
            <Link to={`/tags/${tag}`} style={{ textDecoration: 'none', color: '#3f51b5' }}>
              {` #${tag} `}
            </Link>
          ))}
          </h5>
          <h4 className="post-msg pb-5">{post.message}</h4>
          <h6>
            Posted by:
            <Link to={`/creators/${post.name}`} style={{ textDecoration: 'none', color: '#3f51b5' }}>
              {` ${post.name}`}
            </Link>
          </h6>
          <h6 className="text-muted pb-5">{moment(post.createdAt).fromNow()}</h6>
        </div>
        <div className="post-img p-3">
          <img src={post.selectedFile || 'https://user-images.githubusercontent.com/194400/49531010-48dad180-f8b1-11e8-8d89-1e61320e1d82.png'} alt={post.title}/>
        </div>
      </div>
      {!!recommendedPosts.length && (
        <div className="post-suggestions">
          <div className="suggest-title">You might also like:</div>
          <div className="suggest-content">
            {recommendedPosts.map(({ title, name, message, likes, selectedFile, _id }) => (
              <div style={{ margin: '20px', cursor: 'pointer' }} onClick={() => openPost(_id)} key={_id}>
                <div>{title}</div>
                <div>{name}</div>
                <div>{message}</div>
                <div>Likes: {likes.length}</div>
                <img src={selectedFile} width="200px" />
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Post;
