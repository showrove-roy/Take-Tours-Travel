import React from "react";
import { Player } from "@lottiefiles/react-lottie-player";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

const Error404 = () => {
  return (
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
  );
};

export default Error404;
