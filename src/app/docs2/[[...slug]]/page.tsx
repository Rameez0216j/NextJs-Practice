import React from "react";

// Works even without slug - Optional catch all segments
const DocsHomePage2 = ({ params }: {
    params: {
        slug: string[]
    }
}) => {

    // Check
    console.log("Slug : ",params?.slug?.length);

    return (
        <div>
            {/* <h1>DocsHomePage2 "{params?.slug[0]}" - "{params?.slug[1]}" and so on...</h1> */}

            
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

export default DocsHomePage2;
