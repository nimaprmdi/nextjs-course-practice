import React from "react";
import { useRouter, withRouter } from "next/router";

// useRouter is for functional components
// withRouter is for class components

const SinglePortfolio = () => {
    const router = useRouter();

    console.log(router.pathname);
    console.log(router.query);

    return <div>SinglePortfolio</div>;
};

export default SinglePortfolio;
