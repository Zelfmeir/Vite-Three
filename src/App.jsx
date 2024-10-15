import { Canvas } from '@react-three/fiber';
import { useRef } from 'react';
import { Mesh } from 'three';
import { OrbitControls } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import { useState } from 'react';
import React from 'react';
import Receiver from './Reciever';

const RotatingCubes = ({ color, scale }) => {
  const meshRef = useRef();

  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.x += 0.01;
      meshRef.current.rotation.y += 0.01;
    }
  });

  return (
    <mesh ref={meshRef} scale={[scale, scale, scale]}>
      <cylinderGeometry args={[1, 1, 1]}></cylinderGeometry>
      <meshLambertMaterial color={color} emissive={color}></meshLambertMaterial>
    </mesh>
  );
}

const App = () => {
  const [color, setColor] = useState('red');
  const [scale, setScale] = useState(1);

  const handleColorChange = (e) => {
    setColor(e.target.value);
  };

  const handleScaleChange = (e) => {
    setScale(e.target.value);
  };

  return (
    <div className='pt-10 flex flex-row items-center justify-center w-full h-screen wx-auto'>
      <div className='top-0 left-0 right-0 flex flex-col gap-5'>
        <label>Color: {color}</label>
        <input type="color" value={color} onChange={handleColorChange} />
        <label>Scale: {scale}</label>
        <input type="range" min="0.1" max="10" step="0.1" value={scale} onChange={handleScaleChange} />
      </div>
      
      <Canvas className='p-20'>
        <OrbitControls enableZoom enablePan enableRotate></OrbitControls>
        <directionalLight position={[10, 10, 10]} intensity={15} color="white"></directionalLight>
        <color attach="background" args={['black']}></color>
        <RotatingCubes color={color} scale={scale} />
      </Canvas>
      <Receiver />
    </div>
  );
}

export default App;