import { useRouter } from "next/router";

import React from "react";

const Blog = () => {
    const router = useRouter();

    console.log(router);

    return <div>Blog</div>;
};

export default Blog;
