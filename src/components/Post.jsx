import React from "react";

export function Post({ post, postedBy }) {
    return <>
        <h2>{post.message}</h2>
        <img src={post.imageUrl} alt={post.message} width="200" />
        <p>
            Posted by {postedBy.name}
        </p>
    </>
}
