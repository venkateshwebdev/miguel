import {
  ContactShadows,
  Environment,
  Html,
  OrbitControls,
  OrthographicCamera,
  PositionalAudio,
  useAspect,
  useScroll,
  useTexture,
  useVideoTexture,
} from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { Miguel } from "./miguel";
import { createContext, useContext, useEffect, useRef, useState } from "react";
import { MusicContext } from "./MusicContext";
import { Spiderman } from "./spiderman";
import { Stone } from "./Stones";

const Scene = () => {
  const stones = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  const { music, setMusic } = useContext(MusicContext);
  return (
    <>
      <ambientLight intensity={2} castShadow />
      <directionalLight position={[0, 2, 3]} castShadow />
      <ContactShadows position={[0, -1, 0]} blur={3} />
      {<Miguel />}
      {(music > 0.3) & (music < 0.7) && (
        <group>
          <Stone position={[2, -1, 3]} />
          <Stone position={[-2, -1, 3]} />
        </group>
      )}
      <Spiderman />
    </>
  );
};

export default Scene;
