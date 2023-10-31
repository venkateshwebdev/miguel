import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Canvas } from "@react-three/fiber";
import Scene from "./Scene";
import React from "react";
import {
  Center,
  ContactShadows,
  Environment,
  OrbitControls,
  OrthographicCamera,
  Scroll,
  ScrollControls,
} from "@react-three/drei";
import { AnimatePresence, motion } from "framer-motion";
import { MusicContext, TextContext, ThemeContext } from "./MusicContext";
function App() {
  const [music, setMusic] = useState(null);
  const [message, setMessage] = useState("Click me to Start");
  return (
    <>
      <div
        className={`h-[100vh] bg-[#252525] w-full flex items-center justify-center overflow-hidden`}
      >
        <AnimatePresence>
        {(music > 0.125) & (music < 0.175) && (
          <motion.h1
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{x:-100}}
            transition={{ type: "spring", stiffness: 500 }}
            className="text-[160px] absolute font-bold text-red-600"
          >
            MI
            <span
              className="text-transparent"
              style={{ WebkitTextStroke: "3px red" }}
            >
              GU
            </span>
            EL
          </motion.h1>
        )}
        {(music > 0.175) & (music < 0.3) && (
          <motion.h1
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{x:-100}}
            transition={{ type: "spring", stiffness: 500 }}
            className="text-[160px] absolute font-bold text-red-600 flex flex-col"
          >
            <span>LET'S GET</span>
            <span
              className="text-transparent"
              style={{ WebkitTextStroke: "3px red" }}
            >
              MILES
            </span>
          </motion.h1>
        )}
        {music > 0.81 && (
          <motion.h1
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{x:-100}}
            transition={{ type: "spring", stiffness: 500 }}
            className="text-[160px] absolute font-bold text-red-600 flex flex-col"
          >
            <span>MILES</span>
            <span
              className="text-transparent"
              style={{ WebkitTextStroke: "3px red" }}
            >
              MORALES
            </span>
          </motion.h1>
        )}
        </AnimatePresence>
        {music > 0.125&music<0.6 && <audio src="/miguel.mp3" autoPlay />}
        <button
          onClick={() => setMessage("scroll Down")}
          className="absolute z-50 top-0 left-0 m-5 px-5 py-2 border-2 border-gray-200 text-gray-200"
        >
          {message}
        </button>
        <MusicContext.Provider value={{ music, setMusic }}>
          <Canvas shadows>
            <OrthographicCamera near={100} far={100} position={[0,2,5]}  />
            <ScrollControls pages={1} distance={40}>
              <Scroll>
                <Scene />
              </Scroll>
            </ScrollControls>
            <OrbitControls
              enableZoom={false}
              maxPolarAngle={1.5}
              minPolarAngle={1.5}
              enableRotate={false}
            />
          </Canvas>
        </MusicContext.Provider>
      </div>
    </>
  );
}

export default App;
