import React from "react";
import CBLOGO from './assets/CBLOGO.png';
import LOGO from './assets/LOGO.png';
import BlueCurtain from './assets/Blue Curtain.png';

const App = () => {
  return (
    <div className="h-screen w-screen flex justify-center items-center relative">
      <div className="w-[100vh] absolute z-10 top-0 left-0">
      <div className="flex justify-between w-[100vw]">
      <img className="z-10 w-[16vw] h-[12vw]" src={CBLOGO} alt="" />
      <img className="z-10 w-[16vw] h-[12vw]" src={LOGO} alt="" />
      </div>
      </div>
      <img className="h-[100vh] w-[100vw] absolute top-0 z-0" src={BlueCurtain} alt="" />
      <div className="h-[30vw] w-[70vw] md:w-[50vw]  z-10 flex">
        
      <div className="flex justify-between items-center w-full">
        <a
          className="text-[5vw] md:text-[1.4vw] h-[9vw] w-[25vw] md:h-[5vw] md:w-[17vw] bg-gradient-to-r from-amber-600 to-amber-500 rounded-full flex justify-center items-center"
          href="https://codingblockslpu.vercel.app/participate"
          target="_blank"
          rel="noopener noreferrer"
        >
          Register
        </a>
        <a
          className="text-[5vw] md:text-[1.4vw] h-[9vw] w-[25vw] md:h-[5vw] md:w-[17vw] bg-gradient-to-r from-amber-600 to-amber-500 rounded-full flex justify-center items-center"
          href="https://youtu.be/fp6nID4OAMA?si=_ycPGw11WsmQPgnt&t=195"
          target="_blank"
          rel="noopener noreferrer"
        >
          Watch
        </a>
      </div>
      </div>
      
    </div>
  );
};

export default App;
