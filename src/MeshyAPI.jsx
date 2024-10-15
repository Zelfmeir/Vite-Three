import React, { useState } from 'react';
import { Canvas, useLoader} from '@react-three/fiber';
import { OrbitControls } from '@react-three.dre';
import { meshy } from 'meshy-api';

async function App() {
    const [image, setImage] = useState(null);
    const [model, setModel] = useState(null);

    const handleImageUpload = (event) => {
        const file = event.target.files[0];
        const reader = new FileReader();
        reader.onload = async () => {
            const imageData = reader.result;
            const modelData = await meshy.converImageTo3D(imageData);
            setModel(modelData);
        };
        reader.readAsDataURL(file);
    };
    
    return (
        <div>
            <input type="file" onChange={handleImageUpload}/>
            {model && (
              <Canvas style={{ width: 400, height: 400}}>
              <ambientLight/>
              <pointLight position={[10, 10, 10]} />
              <mesh ref={(mesh) => {
                mesh.geometry = model.geometry;
                mesh.material = model.material;
              }} />
              <OrbitControls />
              </Canvas>
              )}
        </div>
    );
}

