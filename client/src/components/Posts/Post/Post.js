import React, { useState } from 'react';
import moment from 'moment';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { deletePost, likePost } from "../../../actions/posts";
import { AiOutlineEdit, AiOutlineLike, AiFillLike } from "react-icons/ai";
import { MdDelete } from 'react-icons/md';
import { CardLayout } from "../../PageStyles/Cards";
import { ButtonElement } from "../../PageStyles/Button";
import { PostCreator, PostDate, PostTitle, PostTag, PostMessage } from "../../PageStyles/Heading";

const Post = ({ post, setCurrentId }) => {

    const dispatch = useDispatch();
    const user = JSON.parse(localStorage.getItem('profile'));
    const [likes, setLikes] = useState(post?.likes);
    const history = useHistory();

    const userId = user?.result.googleId || user?.result?._id;
    const hasLikedPost = post.likes.find((like) => like === userId);

    const handleLike = async () => {
        dispatch(likePost(post._id));

        if (hasLikedPost) {
        setLikes(post.likes.filter((id) => id !== userId));
        } else {
        setLikes([...post.likes, userId]);
        }
    };

    const Likes = () => {
        if (likes.length > 0) {
            return likes.find((like) => like === userId)
                ? (
                    <><AiFillLike className="like-btn"/>&nbsp;{post.likes.length > 2 ? `You and ${post.likes.length - 1} others` : `${post.likes.length} like${post.likes.length > 1 ? 's' : ''}`}</>
                ) : (
                    <><AiOutlineLike className="like-btn"/>&nbsp;{post.likes.length} {post.likes.length === 1 ? 'Like' : 'Likes'}</>
                );
        }
        return <div className="likebtn"><AiOutlineLike className="like-btn"/>&nbsp;Like</div>;
    };

    const openPost = (e) => {
        // dispatch(getPost(post._id, history));
    
        history.push(`/posts/${post._id}`);
      };

    return (
        <CardLayout style={{ maxWidth: "55vh" }}>
            <ButtonElement onClick={openPost} className="m-5">Open</ButtonElement>
            <PostCreator>By -{post.name}</PostCreator>
            <PostDate>{moment(post.createdAt).fromNow()}</PostDate>
            {(user?.result?.googleId === post?.creator || user?.result?._id === post?.creator) && (
                <div>
                    <ButtonElement onClick={() => setCurrentId(post._id)} style={{ color: 'white' }} className="m-3">
                        <AiOutlineEdit />
                    </ButtonElement>
                </div>
            )}
            <PostTag>{post.tags.map((tag) => `#${tag} `)}</PostTag>
            <PostTitle className="p-2">{post.title}</PostTitle>
            <PostMessage className="p-3">{post.message}</PostMessage>
            <ButtonElement style={{ width: "40%" }} disabled={!user?.result} onClick={() => dispatch(likePost(post._id))}><Likes /> &nbsp;</ButtonElement>
            {(user?.result?.googleId === post?.creator || user?.result?._id === post?.creator) && (
                <ButtonElement style={{ background: "orange", width: "30%" }} onClick={() => dispatch(deletePost(post._id))}>
                    <MdDelete />
                </ButtonElement>
            )}
        </CardLayout>
    )
}

export default Post;