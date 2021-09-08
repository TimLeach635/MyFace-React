import React from "react";
import { Post } from "./Post";

export function PostList({ posts }) {
    if (posts.length === 0) {
        return <p>No posts to display!</p>
    }

    return <ol>
        {posts.map(function(post, index) {
            return <li>
                <Post post={post} postedBy={post.postedBy} key={index} />
            </li>
        })}
    </ol>
}
