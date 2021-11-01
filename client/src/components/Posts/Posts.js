import React from 'react';
import Post from './Post/Post';
import { useSelector } from "react-redux";
import './postsStyle.css';
import { Heading, LoginHeading } from '../PageStyles/Heading';
import Noposts from './Noposts';

const Posts = ({ setCurrentId }) => {
    // const posts = useSelector((state) => state.posts);

    const { posts, isLoading } = useSelector((state) => state.posts);

    if (!posts.length && !isLoading) return <Noposts />;

    return (
        isLoading ? <p>Loading...</p> : (
            <div className="post-container">
                <Heading className="text-warning">Posts</Heading>
                <div className="All-posts">
                    {posts?.map((post) => (
                        <div key={post._id}>
                            <Post post={post} setCurrentId={setCurrentId} />
                        </div>
                    ))}
                </div>
            </div>
        )
    );
};

export default Posts;