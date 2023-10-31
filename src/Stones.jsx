import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export function Stone(props) {
  const { nodes, materials } = useGLTF("/model (12).gltf");
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.rocksA_forest.geometry}
        material={materials["Stone.007"]}
        rotation={[Math.PI / 2, 0, 0]}
      />
    </group>
  );
}

useGLTF.preload("/model (12).gltf");