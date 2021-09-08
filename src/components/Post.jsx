import React from "react";
import { Link } from "react-router-dom";

export function Post({ post, postedBy }) {
    return <>
        <h2>{post.message}</h2>
        <img src={post.imageUrl} alt={post.message} width="200" />
        <Link to={`/users/${postedBy.id}`}>
            Posted by {postedBy.name}
        </Link>
    </>
}
