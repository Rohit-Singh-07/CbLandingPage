import React, { useState, useEffect } from "react";
import CBLOGO from "./assets/CBLOGO.png";
import LOGO from "./assets/LOGO.png";
import ReactPlayer from "react-player";
import { motion } from "framer-motion";
import LoadingAni from "./components/LoadingAni";

const App = () => {
  const [loading, setLoading] = useState(true);

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
          <div className="w-[100vh] absolute z-20 top-0 left-0">
            <div className="flex justify-between items-center w-[100vw] sm:h-fit h-[70vh] mt-[25vw] sm:mt-0 sm:flex-row flex-col">
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
                height={800}
                width={1550}
                playing
                muted
                controls
                loop
                url="https://youtu.be/fp6nID4OAMA?feature=shared"
              />
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
                className="text-[5vw] absolute md:text-[1.4vw] h-[9vw] w-[25vw] md:h-[5vw] md:w-[17vw] bg-gradient-to-r from-amber-500 to-amber-500 rounded-full flex justify-center items-center"
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
