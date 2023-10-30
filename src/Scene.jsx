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
import { useContext, useEffect, useRef, useState } from "react";
import { MusicContext } from "./MusicContext";

const Scene = () => {
  return (
    <>
      <ambientLight intensity={2} />
      <directionalLight position={[0, 2, 3]} />
      <ContactShadows position={[0, -1, 0]} blur={3} />
      <Miguel />
    </>
  );
};

export default Scene;
