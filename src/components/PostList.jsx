import React, { useState, useEffect } from "react";
import { Post } from "./Post";

export function PostList(props) {
    const [posts, setPosts] = useState([]);

    useEffect(function() {
        async function fetchData() {
            const response = await fetch("http://localhost:3001/posts");
            const json = await response.json();

            setPosts(json.results);
        }

        fetchData();
    }, []);

    if (posts.length === 0) {
        return <p>No posts to display!</p>
    }

    return <ol>
        {posts.map(function(post, index) {
            return <Post post={post} />
        })}
    </ol>
}
