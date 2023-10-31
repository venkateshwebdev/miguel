import React, { useEffect, useRef, useState } from "react";
import { useGLTF, useAnimations, useScroll } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";

export function Spiderman(props) {
  const scroll = useScroll();
  const group = useRef();
  const { nodes, materials, animations } = useGLTF("/spiderman.glb");
  const { actions } = useAnimations(animations, group);
  const [animation, setAnimation] = useState(
    "Armature|Armature|hero_spiderman01_S08@skill01|Base Layer"
  );
  useEffect(() => {
    console.log(actions);
    actions[animation].reset().play().paused = true;
    return () => {
      actions[animation].reset().stop();
    };
  }, [animation]);
  
  useFrame((state) => {
    if(scroll.offset>0.85){
        setAnimation("Armature|Armature|hero_spiderman01_S08@idle|Base Layer")
    }
    if (scroll.offset > 0.3) {
      actions[animation].time =
        1.2 * (actions[animation].getClip().duration * scroll.offset);
    }
  });
  return (
    <group ref={group} {...props} dispose={null} position={[0, -1, 6]}>
      <group name="Sketchfab_Scene">
        <group
          name="Sketchfab_model"
          rotation={[-Math.PI / 2, 0, 0]}
          scale={1.12}
        >
          <group
            name="Spider-man_(Integrated_Suit)fbx"
            rotation={[Math.PI / 2, 0, 0]}
            scale={0.01}
          >
            <group name="Object_2">
              <group name="RootNode">
                <group name="Armature" scale={100}>
                  <group name="Object_5">
                    <primitive object={nodes._rootJoint} />
                    <skinnedMesh
                      name="Object_149"
                      geometry={nodes.Object_149.geometry}
                      material={materials.SpiderMan_web02}
                      skeleton={nodes.Object_149.skeleton}
                    />
                    <skinnedMesh
                      name="Object_151"
                      geometry={nodes.Object_151.geometry}
                      material={materials.hero_spiderman01_s08_02}
                      skeleton={nodes.Object_151.skeleton}
                    />
                    <skinnedMesh
                      name="Object_153"
                      geometry={nodes.Object_153.geometry}
                      material={materials.hero_spiderman01_s08_01}
                      skeleton={nodes.Object_153.skeleton}
                    />
                    <skinnedMesh
                      name="Object_155"
                      geometry={nodes.Object_155.geometry}
                      material={materials.hero_spiderman01_s08_03}
                      skeleton={nodes.Object_155.skeleton}
                    />
                    <skinnedMesh
                      name="Object_157"
                      geometry={nodes.Object_157.geometry}
                      material={materials.SpiderMan_web02}
                      skeleton={nodes.Object_157.skeleton}
                    />
                    <skinnedMesh
                      name="Object_159"
                      geometry={nodes.Object_159.geometry}
                      material={materials.manhole}
                      skeleton={nodes.Object_159.skeleton}
                    />
                    <skinnedMesh
                      name="Object_161"
                      geometry={nodes.Object_161.geometry}
                      material={materials.hero_spiderman01_s08_wp}
                      skeleton={nodes.Object_161.skeleton}
                    />
                    <group
                      name="Object_148"
                      position={[100, 4, 0]}
                      rotation={[-Math.PI / 2, 0, 0]}
                      scale={100}
                    />
                    <group
                      name="Object_150"
                      position={[0, 4, 13.289]}
                      rotation={[-Math.PI / 2, 0, 0]}
                      scale={100}
                    />
                    <group
                      name="Object_152"
                      position={[0, 4, 13.289]}
                      rotation={[-Math.PI / 2, 0, 0]}
                      scale={100}
                    />
                    <group
                      name="Object_154"
                      position={[0, 4, 13.289]}
                      rotation={[-Math.PI / 2, 0, 0]}
                      scale={100}
                    />
                    <group
                      name="Object_156"
                      position={[-100, 4, 0]}
                      rotation={[-Math.PI / 2, 0, 0]}
                      scale={100}
                    />
                    <group
                      name="Object_158"
                      position={[-266.612, 4, 0.478]}
                      rotation={[-Math.PI / 2, 0, 0]}
                      scale={100}
                    />
                    <group
                      name="Object_160"
                      position={[0, 136.869, -9.593]}
                      rotation={[-Math.PI / 2, 0, 0]}
                      scale={80}
                    />
                  </group>
                </group>
                <group
                  name="spider_wp003"
                  position={[100, 4, 0]}
                  rotation={[-Math.PI / 2, 0, 0]}
                  scale={100}
                />
                <group
                  name="hero_spiderman01_s08_02"
                  position={[0, 4, 13.289]}
                  rotation={[-Math.PI / 2, 0, 0]}
                  scale={100}
                />
                <group
                  name="hero_spiderman01_s08_01"
                  position={[0, 4, 13.289]}
                  rotation={[-Math.PI / 2, 0, 0]}
                  scale={100}
                />
                <group
                  name="hero_spiderman01_s08_03"
                  position={[0, 4, 13.289]}
                  rotation={[-Math.PI / 2, 0, 0]}
                  scale={100}
                />
                <group
                  name="spider_wp02"
                  position={[-100, 4, 0]}
                  rotation={[-Math.PI / 2, 0, 0]}
                  scale={100}
                />
                <group
                  name="manhole"
                  position={[-266.612, 4, 0.478]}
                  rotation={[-Math.PI / 2, 0, 0]}
                  scale={100}
                />
                <group
                  name="hero_spiderman01_s08_wp"
                  position={[0, 136.869, -9.593]}
                  rotation={[-Math.PI / 2, 0, 0]}
                  scale={80}
                />
              </group>
            </group>
          </group>
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("/spiderman.glb");
