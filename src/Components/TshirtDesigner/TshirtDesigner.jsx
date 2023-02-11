import React, { useState, useRef, useEffect } from 'react';
import * as THREE from 'three';
import { Canvas, useFrame } from '@react-three/fiber';
import ColorPicker from 'react-color-picker';

const Tshirt = ({ position, color }) => {
  const meshRef = useRef();

  useFrame((state) => {
    meshRef.current.rotation.x = meshRef.current.rotation.y += 0.01;
  });

  return (
    <mesh position={position} ref={meshRef}>
      <planeBufferGeometry attach="geometry" />
      <meshStandardMaterial attach="material" color={color} />
    </mesh>
  );
};

const TshirtDesigner = () => {
  const [color, setColor] = useState('#fff');

  return (
    <>
      <Canvas>
        <ambientLight />
        <pointLight position={[10, 10, 10]} />
        <Tshirt position={[0, 0, 0]} color={color} />
      </Canvas>
      <ColorPicker value={color} onDrag={setColor} />
    </>
  );
};

export default TshirtDesigner;