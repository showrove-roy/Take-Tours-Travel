import React from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";

const Blogs = () => {
  return (
    <HelmetProvider>
      <Helmet>
        <title>TTT-Blogs</title>
      </Helmet>
      <div className='mx-32 my-10'></div>;
    </HelmetProvider>
  );
};

export default Blogs;
