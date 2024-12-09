import React, { useRef, useEffect, useMemo } from 'react';
import Particles from '../components/Particles'
import { useGraph } from '@react-three/fiber';
import { useGLTF, useAnimations, useFBX } from '@react-three/drei';
import { SkeletonUtils } from 'three-stdlib';

const Developer = ({ animationName = 'idle', ...props }) => {
  const group = useRef();

  const { scene } = useGLTF('/models/Developer.glb');
  const clone = useMemo(() => SkeletonUtils.clone(scene), [scene]);
  const { nodes, materials } = useGraph(clone);

  const { animations: idleAnimation } = useFBX('/models/actions/idle.fbx');
  const { animations: saluteAnimation } = useFBX('/models/actions/salute.fbx');
  const { animations: standingupAnimation } = useFBX('/models/actions/standingup.fbx');
  const { animations: victoryAnimation } = useFBX('/models/actions/victory.fbx');
  const { animations: clappingAnimation } = useFBX('/models/actions/clapping.fbx');

  // Assign proper names to animations
  idleAnimation[0].name = 'idle';
  saluteAnimation[0].name = 'salute';
  standingupAnimation[0].name = 'standingup';
  clappingAnimation[0].name = 'clapping';
  victoryAnimation[0].name = 'victory';

  // Combine all animations
  const allAnimations = [
    ...idleAnimation,
    ...saluteAnimation,
    ...standingupAnimation,
    ...clappingAnimation,
    ...victoryAnimation,
  ];

  const { actions } = useAnimations(allAnimations, group);

  useEffect(() => {
    if (actions && actions[animationName]) {
      actions[animationName].reset().fadeIn(0.5).play();
      return () => actions[animationName].fadeOut(0.5);
    } else {
      console.error(`Animation "${animationName}" not found.`);
    }
  }, [actions, animationName]);

  return (
    <group {...props} dispose={null} ref={group}>
      <primitive object={nodes.Hips} />
      <skinnedMesh geometry={nodes.Wolf3D_Glasses.geometry} material={materials.Wolf3D_Glasses} skeleton={nodes.Wolf3D_Glasses.skeleton} />
      <skinnedMesh geometry={nodes.Wolf3D_Outfit_Top.geometry} material={materials.Wolf3D_Outfit_Top} skeleton={nodes.Wolf3D_Outfit_Top.skeleton} />
      <skinnedMesh geometry={nodes.Wolf3D_Outfit_Bottom.geometry} material={materials.Wolf3D_Outfit_Bottom} skeleton={nodes.Wolf3D_Outfit_Bottom.skeleton} />
      <skinnedMesh geometry={nodes.Wolf3D_Outfit_Footwear.geometry} material={materials.Wolf3D_Outfit_Footwear} skeleton={nodes.Wolf3D_Outfit_Footwear.skeleton} />
      <skinnedMesh geometry={nodes.Wolf3D_Body.geometry} material={materials.Wolf3D_Body} skeleton={nodes.Wolf3D_Body.skeleton} />
      <skinnedMesh name="EyeLeft" geometry={nodes.EyeLeft.geometry} material={materials.Wolf3D_Eye} skeleton={nodes.EyeLeft.skeleton} morphTargetDictionary={nodes.EyeLeft.morphTargetDictionary} morphTargetInfluences={nodes.EyeLeft.morphTargetInfluences} />
      <skinnedMesh name="EyeRight" geometry={nodes.EyeRight.geometry} material={materials.Wolf3D_Eye} skeleton={nodes.EyeRight.skeleton} morphTargetDictionary={nodes.EyeRight.morphTargetDictionary} morphTargetInfluences={nodes.EyeRight.morphTargetInfluences} />
      <skinnedMesh name="Wolf3D_Head" geometry={nodes.Wolf3D_Head.geometry} material={materials.Wolf3D_Skin} skeleton={nodes.Wolf3D_Head.skeleton} morphTargetDictionary={nodes.Wolf3D_Head.morphTargetDictionary} morphTargetInfluences={nodes.Wolf3D_Head.morphTargetInfluences} />
      <skinnedMesh name="Wolf3D_Teeth" geometry={nodes.Wolf3D_Teeth.geometry} material={materials.Wolf3D_Teeth} skeleton={nodes.Wolf3D_Teeth.skeleton} morphTargetDictionary={nodes.Wolf3D_Teeth.morphTargetDictionary} morphTargetInfluences={nodes.Wolf3D_Teeth.morphTargetInfluences} />
    </group>
  );
};

useGLTF.preload('/models/Developer.glb');

export default Developer;
