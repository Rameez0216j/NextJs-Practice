import React from "react";

const ReviewForProduct = ({ params }: {
    params: {
        productId: string,
        reviewId: string
    }

}) => {
    return (
        <div>
            <h1>Product Id = {params.productId} and Review Id = {params.reviewId}</h1>
        </div>
    );
};

export default ReviewForProduct;
