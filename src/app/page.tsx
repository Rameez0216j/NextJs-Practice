import React from "react";
import Link from "next/link";

const Home = () => {
    return(
        <div>
            <h1>Home Page</h1>
            <ul>
                <li><Link href="/about">About</Link></li>
                <li><Link href="/blog">Blog</Link></li>
                <li><Link href="/products">Products</Link></li>
            </ul>
        </div>
    );
};

export default Home;
