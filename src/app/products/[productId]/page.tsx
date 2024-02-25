import React from "react";

const SingleProductPage = ({ params }: {
    params: {
        productId: string
    }
}) => {
    return (
        <div>
            <h1>Single product details</h1>
            <p>Product id {params.productId}</p>
        </div>
    );
};

export default SingleProductPage;
