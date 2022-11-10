import { Player } from "@lottiefiles/react-lottie-player";
import React from "react";

const Loading = () => {
  return (
    <div className='w-1/3 mx-auto my-32'>
      <Player
        autoplay
        loop
        src='https://assets10.lottiefiles.com/packages/lf20_l3cnkxvf.json'></Player>
    </div>
  );
};

export default Loading;
