import React, { useContext, useEffect, useRef, useState } from "react";
import {
  useGLTF,
  useAnimations,
  useScroll,
  PositionalAudio,
} from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { MusicContext, ThemeContext } from "./MusicContext";

export function Miguel(props) {
  const scroll = useScroll();
  const [animation, setAnimation] = useState(
    "hero_spiderman209901_S02|hero_spiderman209901_S02|hero_spiderman209901_S02@atk-02|Base L"
  );
  //
  // hero_spiderman209901_S02|hero_spiderman209901_S02|hero_spiderman209901_S02@skill06-01_ca
  const group = useRef();
  const { music, setMusic } = useContext(MusicContext);
  const { nodes, materials, animations } = useGLTF(
    "/spider-man_2099_across_the_spider-verse.glb"
  );
  const { actions } = useAnimations(animations, group);
  useEffect(() => {
      actions[animation].reset().play().paused = true;
    return () => {
      actions[animation].reset().stop();
    };
  }, [animation]);


  useFrame((state) => {
    setMusic(scroll.offset);
    console.log(scroll.offset)
    if (scroll.offset > 0.19)
      setAnimation(
        "hero_spiderman209901_S02|hero_spiderman209901_S02|hero_spiderman209901_S02@skill06-01_ca"
      );
    if (scroll.offset < 0.19)
      setAnimation(
        "hero_spiderman209901_S02|hero_spiderman209901_S02|hero_spiderman209901_S02@atk-02|Base L"
      );
    if (scroll.offset < 0.175) {
      actions[animation].time =
        actions[animation].getClip().duration * scroll.offset * 8;
        state.camera.position.z=5
    }
    if(scroll.offset>0.175&&scroll.offset<0.2){
      state.camera.position.z=5-scroll.offset
    }
    if (scroll.offset > 0.2) {
      actions[animation].time =
        actions[animation].getClip().duration * scroll.offset*2;
    }
    if(scroll.offset>0.3){
      state.camera.position.z= 15*scroll.offset
    }
    if(scroll.offset<0.7){
      group.current.position.x=0
    }
    if(scroll.offset>0.7){
      state.camera.position.z=10
      group.current.position.x=100
    }
  });
  return (
    <>
      <group ref={group} {...props} dispose={null} position={[0, -1, 0]}>
        <group name="Sketchfab_Scene">
          <group name="Sketchfab_model" rotation={[-Math.PI / 2, 0, 0]}>
            <group
              name="45cf3296f5734972b3fa0940d5a5498dfbx"
              rotation={[Math.PI / 2, 0, 0]}
              scale={0.01}
            >
              <group name="Object_2">
                <group name="RootNode">
                  <group name="hero_spiderman209901_S02" scale={100}>
                    <group name="Object_5">
                      <primitive object={nodes._rootJoint} />
                      <skinnedMesh
                        name="Object_96"
                        geometry={nodes.Object_96.geometry}
                        material={materials.hero_spiderman209901_S02_03}
                        skeleton={nodes.Object_96.skeleton}
                      />
                      <skinnedMesh
                        name="Object_98"
                        geometry={nodes.Object_98.geometry}
                        material={materials.hero_spiderman209901_S02_04}
                        skeleton={nodes.Object_98.skeleton}
                      />
                      <skinnedMesh
                        name="Object_100"
                        geometry={nodes.Object_100.geometry}
                        material={materials.hero_spiderman209901_S02_02}
                        skeleton={nodes.Object_100.skeleton}
                      />
                      <skinnedMesh
                        name="Object_102"
                        geometry={nodes.Object_102.geometry}
                        material={materials.hero_spiderman209901_S02_04}
                        skeleton={nodes.Object_102.skeleton}
                      />
                      <skinnedMesh
                        name="Object_104"
                        geometry={nodes.Object_104.geometry}
                        material={materials.hero_spiderman209901_S02_01}
                        skeleton={nodes.Object_104.skeleton}
                      />
                      <skinnedMesh
                        name="Object_106"
                        geometry={nodes.Object_106.geometry}
                        material={materials.SpiderMan_web02}
                        skeleton={nodes.Object_106.skeleton}
                      />
                      <skinnedMesh
                        name="Object_108"
                        geometry={nodes.Object_108.geometry}
                        material={materials.SpiderMan_web02}
                        skeleton={nodes.Object_108.skeleton}
                      />
                      <group
                        name="Object_95"
                        rotation={[-Math.PI / 2, 0, 0]}
                        scale={100}
                      />
                      <group
                        name="Object_97"
                        rotation={[-Math.PI / 2, 0, 0]}
                        scale={100}
                      />
                      <group
                        name="Object_99"
                        rotation={[-Math.PI / 2, 0, 0]}
                        scale={100}
                      />
                      <group
                        name="Object_101"
                        rotation={[-Math.PI / 2, 0, 0]}
                        scale={100}
                      />
                      <group
                        name="Object_103"
                        rotation={[-Math.PI / 2, 0, 0]}
                        scale={100}
                      />
                      <group
                        name="Object_105"
                        position={[-100, 0, 0]}
                        rotation={[-Math.PI / 2, 0, 0]}
                        scale={100}
                      />
                      <group
                        name="Object_107"
                        position={[-100, 0, 0]}
                        rotation={[-Math.PI / 2, 0, 0]}
                        scale={100}
                      />
                    </group>
                  </group>
                  <group
                    name="hero_spiderman209901_S02_03"
                    rotation={[-Math.PI / 2, 0, 0]}
                    scale={100}
                  />
                  <group
                    name="hero_spiderman209901_S02_05"
                    rotation={[-Math.PI / 2, 0, 0]}
                    scale={100}
                  />
                  <group
                    name="hero_spiderman209901_S02_02"
                    rotation={[-Math.PI / 2, 0, 0]}
                    scale={100}
                  />
                  <group
                    name="hero_spiderman209901_S02_05_02"
                    rotation={[-Math.PI / 2, 0, 0]}
                    scale={100}
                  />
                  <group
                    name="hero_spiderman209901_S02_01"
                    rotation={[-Math.PI / 2, 0, 0]}
                    scale={100}
                  />
                  <group
                    name="spider_wp02"
                    position={[-100, 0, 0]}
                    rotation={[-Math.PI / 2, 0, 0]}
                    scale={100}
                  />
                  <group
                    name="spider_wp003"
                    position={[-100, 0, 0]}
                    rotation={[-Math.PI / 2, 0, 0]}
                    scale={100}
                  />
                </group>
              </group>
            </group>
          </group>
        </group>
      </group>
    </>
  );
}

useGLTF.preload("/spider-man_2099_across_the_spider-verse.glb");
