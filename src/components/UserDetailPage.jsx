import React, { useState, useEffect } from "react";
import { BrowserRouter as useParams } from 'react-router-dom';
import { Post } from "./Post";

export function UserDetailPage() {
    const { userId } = useParams();
    const [user, setUser] = useState();

    useEffect(function() {
        async function fetchUser() {
            const response = await fetch(`http://localhost:3001/users/${userId}`);
            const responseJson = await response.json();

            setUser(responseJson);
        }

        fetchUser();
    }, [userId]);

    if (!user) {
        return <p>Loading user info...</p>
    }

    return <>
        <h2>User {user.name}</h2>
        <p>{user.username}</p>
        <p>{user.email}</p>
        <ol>
            {user.posts.map(function(post, index) {
                return <Post post={post} postedBy={user} key={index} />
            })}
        </ol>
    </>
}
