import React, { useState, useEffect } from "react";
import { PostList } from "./PostList";

export function PostListPage() {
    const [posts, setPosts] = useState([]);

    useEffect(function() {
        async function fetchPosts() {
            const response = await fetch("http://localhost:3001/posts");
            const responseJson = await response.json();

            setPosts(responseJson.results);
        }

        fetchPosts();
    }, []);

    return <>
        <h2>Posts</h2>
        <PostList posts={posts} />
    </>
}
