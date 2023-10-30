import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Canvas } from "@react-three/fiber";
import Scene from "./Scene";
import {
  Center,
  ContactShadows,
  Environment,
  OrbitControls,
  OrthographicCamera,
  Scroll,
  ScrollControls,
} from "@react-three/drei";
import { motion } from "framer-motion";
import { MusicContext } from "./MusicContext";
function App() {
  const [music, setMusic] = useState(false);
  const [message, setMessage] = useState("Click me to Start");
  return (
    <>
      <div className="h-[100vh] w-full flex items-center justify-center">
        {music && (
          <motion.h1
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ type: "spring", stiffness: 500, delay: 2 }}
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
        )}{" "}
        {music && <audio src="/miguel.mp3" autoPlay  />}
        <button
          onClick={() => setMessage("scroll Down")}
          className="absolute z-50 top-0 left-0 m-5 px-5 py-2 border-2 border-gray-200 text-gray-200"
        >
          {message}
        </button>
        <MusicContext.Provider value={{ music, setMusic }}>
          <Canvas>
            {/* <OrthographicCamera near={100} far={100} zoom={0} position={[0,2,5]}  /> */}
            <ScrollControls pages={1} distance={5}>
              <Scroll>
                <Scene />
              </Scroll>
            </ScrollControls>
            <OrbitControls
              enableZoom={false}
              maxPolarAngle={1.5}
              minPolarAngle={1.5}
            />
          </Canvas>
        </MusicContext.Provider>
      </div>
    </>
  );
}

export default App;
