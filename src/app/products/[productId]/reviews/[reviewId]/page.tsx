import React from "react";
function getRandomInt(count:number):number {
    return Math.floor(Math.random() * count);
}

const ReviewForProduct = ({ params }: {
    params: {
        productId: string,
        reviewId: string
    }

}) => {
    const Random=getRandomInt(2);
    if(Random===1) throw new Error("Error in Loading review")

    return (
        <div>
            <h1>Product Id = {params.productId} and Review Id = {params.reviewId}</h1>
        </div>
    );
};

export default ReviewForProduct;
