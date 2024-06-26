import React, { useState, useEffect } from "react";
import CBLOGO from "./assets/CBLOGO.png";
import LOGO from "./assets/LOGO.png";
import ReactPlayer from "react-player";
import { motion } from "framer-motion";
import LoadingAni from "./components/LoadingAni";
import { BiSolidVolumeMute } from "react-icons/bi";
import { GoUnmute } from "react-icons/go";

const App = () => {
  const [loading, setLoading] = useState(true);
  const [muted, setMuted] = useState(true);

  const handleToggleMute = () => {
    setMuted(!muted);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000); 

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="h-screen w-screen flex justify-center items-center relative overflow-hidden bg-black">
      {loading ? (

        <motion.div
          initial={{ opacity: 1 }}
          animate={{ opacity: 0 }}
          transition={{ delay: 3, duration: 1 }}
          className="h-full w-full absolute top-0 left-0 flex justify-center items-center z-50 bg-zinc-800"
        >
          <LoadingAni/>
        </motion.div>
      ) : (
        
        <>
          <div className="w-[100vh] absolute z-20 top-0 left-0 pointer-events-none">
            <div className="flex justify-between items-center w-[100vw] sm:h-fit h-[70vh] mt-[25vw] sm:mt-0 sm:flex-row flex-col px-[3.5vw]">
              <img className="z-20 sm:w-[16vw] w-[30vw] h-[40vw] sm:h-[12vw]" src={CBLOGO} alt="" />
              <img className="z-20 sm:w-[16vw] w-[30vw] sm:h-[12vw] h-[40vw]" src={LOGO} alt="" />
            </div>
          </div>
          <motion.div
            initial={{ opacity: 1 }}
            animate={{ opacity: 0 }}
            transition={{ delay: 6 }}
            className="h-[100vh] w-[100vw] absolute top-0 z-0 bg-black flex justify-center items-center"
          >
            <ReactPlayer
              height={900}
              width={1550}
              playing
              muted
              url="https://youtu.be/Atn2AjXQqkI"
            />
          </motion.div>

          <div className="h-[100vh] w-[100vw] z-10 flex justify-center items-center">
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 3, duration: 3 }}
              className="flex justify-center items-center h-full w-full z-10"
            >
              <ReactPlayer
                height={900}
                width={1900}
                playing
                muted={muted}
                loop
                url="https://youtu.be/fp6nID4OAMA?feature=shared"
              />
              <button className="absolute top-[50%] right-[16%] " onClick={handleToggleMute}>
        {muted ? <span className="flex flex-col justify-center items-center"><span className="h-[6vw] w-[6vw] rounded-full z-30 bg-slate-100 bg-opacity-50 flex justify-center items-center text-[4vw] shadow-[0_20px_50px_rgba(8,_112,_184,_0.7)]"><BiSolidVolumeMute /></span> <h2 className="text-white text-[2vw]">Tap to Unmute</h2></span> : <span className="flex flex-col justify-center items-center"><span className="h-[6vw] w-[6vw] rounded-full z-30 bg-slate-100 bg-opacity-50 flex justify-center items-center text-[4vw] shadow-[0_20px_50px_rgba(8,_112,_184,_0.7)]"><GoUnmute /></span> <h2 className="text-white text-[2vw]">Tap to mute</h2></span>}
      </button>
              <motion.div
              initial={{ scale: 1, opacity: 1 }}
              animate={{ scale: 1.5, opacity: 0 }}
              transition={{delay: 6, duration: 1.8, repeat: Infinity }}
                className="text-[5vw] absolute md:text-[1.4vw] h-[9vw] w-[25vw] md:h-[5vw] md:w-[17vw] bg-orange-500 rounded-full flex justify-center items-center"
                href="https://codingblockslpu.vercel.app/participate"
                target="_blank"
                rel="noopener noreferrer"
              >
              </motion.div>
              <motion.div
              initial={{ scale: 1, opacity: 1 }}
              animate={{ scale: 1.5, opacity: 0 }}
              transition={{delay: 7.5, duration: 1.8, repeat: Infinity }}
                className="text-[5vw] absolute md:text-[1.4vw] h-[9vw] w-[25vw] md:h-[5vw] md:w-[17vw] bg-amber-200 rounded-full flex justify-center items-center"
                href="https://codingblockslpu.vercel.app/participate"
                target="_blank"
                rel="noopener noreferrer"
              >
              </motion.div>
              <a
                className="text-[5vw] absolute md:text-[2vw] h-[9vw] w-[25vw] md:h-[5vw] md:w-[17vw] bg-gradient-to-r from-amber-500 to-amber-500 rounded-full flex justify-center items-center"
                href="https://codingblockslpu.vercel.app/participate"
                target="_blank"
                rel="noopener noreferrer"
              >
                Register
              </a>
            </motion.div>
          </div>
        </>
      )}
    </div>
  );
};

export default App;
