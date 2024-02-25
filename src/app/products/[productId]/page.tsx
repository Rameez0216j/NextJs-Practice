import React from "react";

const SingleProductPage = ({ params }: {
    params: {
        productId: string
    }
}) => {
    return (
        <div>
            <h1>Single product details</h1>
            <h2>Product id = {params.productId}</h2>
        </div>
    );
};

export default SingleProductPage;
