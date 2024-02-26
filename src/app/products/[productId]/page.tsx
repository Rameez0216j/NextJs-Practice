import React from "react";

// Dynamic Metadata
type Props = {
    params: {
        productId: string
    }
}

import { Metadata } from "next";

// function name must be "generateMetadata"
// export const generateMetadata= ({params} : Props) : Metadata => {
//     return {
//         title: `Product ${params.productId}`,
//         description: `Product ${params.productId} details`
//     }
// }

// We can also use async and await ( api calls and using metadata from that )
export const generateMetadata= async  ({params} : Props) : Promise<Metadata> => {

    const title : string = await new Promise((resolve, reject) => {
        try{
            setTimeout(()=>{
                resolve(`Dynamic async await Product ${params.productId}`)
            },2000)
        }catch(error){
            reject("No data found")
        }
    
    })
    return {
        title: `Product ${title}`,
        description: `Product ${params.productId} details`
    }
}


// Dynamic Metadata end 


const SingleProductPage = ({ params }: Props) => {
    return (
        <div>
            <h1>Single product details</h1>
            <h2>Product id = {params.productId}</h2>
        </div>
    );
};

export default SingleProductPage;
