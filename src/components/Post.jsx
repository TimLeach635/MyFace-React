import React, { useState } from "react";

export function Post(props) {
    return <li>
        <h2>{props.post.message}</h2>
        <img src={props.post.imageUrl} alt={props.post.message} width="200" />
        <p>Posted by {props.post.postedBy.name}</p>
    </li>
}
