import Link from "next/link";
import React from "react";

const ProductPage = () => {

    const prod_id = 123;

    return (
        <div className="products">
            <h1>Products List</h1>
            <ul>
                <li><Link href={`/products/1`}>Product- 1</Link></li>
                <li><Link href={`/products/2`}>Product- 2</Link></li>
                {/* repalce prop will replace current history state and takes to home page on back button click */}
                <li><Link href={`/products/3`} replace>Product- 3</Link></li>
                <li><Link href={`/products/${prod_id}`}>Product- {prod_id}</Link></li>
            </ul>
        </div>
    )
};

export default ProductPage;
