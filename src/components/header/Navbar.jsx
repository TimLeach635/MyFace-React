import React from "react";
import { Link } from "react-router-dom";

export function Navbar() {
    return <header>
        <nav>
            <Link to="/posts">Posts</Link>
        </nav>
    </header>
}
