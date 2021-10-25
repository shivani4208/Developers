import React from 'react';
import Post from './Post/Post';
import { useSelector } from "react-redux";
import './postsStyle.css';
import { Heading } from '../PageStyles/Heading';

const Posts = ({ setCurrentId }) => {
    const posts = useSelector((state) => state.posts);

    return (
        <div className="post-container">
            <Heading className="text-warning">Your Posts</Heading>
            <div className="All-posts">
                {posts.map((post) => (
                    <div key={post._id}>
                        <Post post={post} setCurrentId={setCurrentId} />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Posts;