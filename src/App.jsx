import React, { useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { useLoader } from '@react-three/fiber';
import { TextureLoader } from 'three';

const App = () => {
  const [image, setImage] = useState(null);

  const handleImageChange = (event) => {
    setImage(event.target.files[0])
  };

  const texture = useLoader(TextureLoader, image);

  return (
    <div>
      <input type="file" onChange={handleImageChange} />
      <Canvas>
        <ambientLight />
        <pointLight position={[10, 10, 10]} />
        <mesh ref={mesh} position={[0, 0, 0]}>
          <planeGeometry args={[2, 2]} />
        </mesh>
        <OrbitControls />
      </Canvas>
    </div>
  );
}

export default App;