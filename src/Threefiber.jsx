import React, {useState} from "react";
import { Canvas, events, ReactThreeFiber, useLoader } from "@react-three/fiber";
import { OrbitControls, ambientLight, pointLight, mesh } from "@react-three/drei";
import { TextureLoader } from "three";
import { textureLoad } from "three/webgpu";

async function ReactThreeFiber() {
    const [image, setImage] = useState(null);{
        const file = event.target.files[0];
        const reader = new FileReader();
        reader.onload = () => {
            const texture = new TextureLoader().load(reader.result);
        };
        reader.readAsDataURL(file);
    };

    return(
        <div>
            <imput type="file" onChange={handleImageUpload} />
            <Canvas style={{ width: 400, height: 400 }}></Canvas>
            <ambientLight />
            <pointLight position={[10, 10, 10]} />
            <mesh>
                {'Upload your image here'}
            </mesh>
            <OrbitControls />
         </div>
    )
}

export default ReactThreeFiber;