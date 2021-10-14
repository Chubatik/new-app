import React from 'react';
import PostItem from "./PostItem";

const PostList = ({posts, remove}) => {
    return (
        <div>
            <h1 style={{textAlign: 'center', marginTop: '15px'}}>
                Posts list
            </h1>
            {posts.map((post, index) =>
                <PostItem remove={remove} post={post} num={index + 1}  key={post.id}/>
            )}
        </div>
    );
};

export default PostList;
