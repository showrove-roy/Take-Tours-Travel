import { Player } from "@lottiefiles/react-lottie-player";
import React from "react";

const Home = () => {
  return (
    <div className=''>
      <div className='md:-mt-5 lg:-mt-14 relative'>
        <div className='absolute top-1/4 left-1/2 -translate-x-1/2 z-10 text-center'>
          <h1
            className='text-xl md:text-2xl lg:text-5xl uppercase font-bold text-[#EB6440]'
            style={{ fontFamily: "'Exo 2', sans-serif" }}>
            Welcome
          </h1>
          <h3
            className='lg:text-4xl text-base md:text-2xl font-bold capitalize'
            style={{ fontFamily: "'Exo 2', sans-serif" }}>
            take tours <span className='text-[#EB6440]'> & </span> travel
          </h3>
        </div>
        <Player
          autoplay
          loop
          src='https://assets1.lottiefiles.com/packages/lf20_bhebjzpu.json'></Player>
      </div>
    </div>
  );
};

export default Home;
