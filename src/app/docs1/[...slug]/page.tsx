import React from "react";

// This only works if any slug is present 
const DocsHomePage1 = ({ params }: {
    params: {
        slug: string[]
    }
}) => {

    // Check
    console.log("Slug : ",params?.slug?.length);

    return (
        <div>
            {/* <h1>DocsHomePage1 "{params?.slug[0]}" - "{params?.slug[1]}" and so on...</h1> */}


            <h1>Slug Length = {params?.slug?.length}</h1>
            {
                params?.slug?.length !== undefined ? (
                    params?.slug?.map((slug, index) => (
                        <div key={index}>
                            <h3>slug[{index}] = {slug}</h3>
                        </div>
                    ))) : (<h1>No slug found</h1>)
            }
        </div>
    );
};

export default DocsHomePage1;
