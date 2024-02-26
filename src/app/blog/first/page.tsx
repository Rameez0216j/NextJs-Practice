import React from "react";
import { Metadata } from "next";
export const metadata: Metadata = {
    title: {
        absolute:"first blog" // ignores the template of parent layout 
    },
};

const FirstBlogPage = () => {
  return <div>FirstBlogPage</div>;
};

export default FirstBlogPage;
