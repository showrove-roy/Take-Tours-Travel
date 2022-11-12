import React from "react";
import { Player } from "@lottiefiles/react-lottie-player";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { Helmet, HelmetProvider } from "react-helmet-async";

const Error404 = () => {
  return (
    <HelmetProvider>
      <Helmet>
        <title>TTT-404 Page</title>
      </Helmet>
      <div className='max-h-screen'>
        <Header></Header>
        <div className='w-1/3 mx-auto my-16'>
          <Player
            autoplay
            loop
            src='https://assets10.lottiefiles.com/temp/lf20_USCruP.json'
            className='w-full'></Player>
        </div>
        <Footer></Footer>
      </div>
    </HelmetProvider>
  );
};

export default Error404;
