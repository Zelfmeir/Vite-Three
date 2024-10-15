import { OrbitControls } from '@react-three/drei';
import React, {useState} from 'react';


function APP(){
    const [image, setImage] = useState(null);
    const [model, setModel] = useState(null);

    const handleImageUpload = (event) => {
        const file = event.target.files[0];
        const formData = new FormData();
        formData.append('image', file);

        fetch('/upload-image', {
            method: 'POST',
            body: formData,
        })
            .then((response) => response.json())
            .then((data) => setModel(data))
            .catch((error) => console.error(error))
    };

    return(
        <div>
            <input typoe="file" onChange={handleImageUpload} />
            {model && (
                <Canvas style={{ width: 400, height: 400 }}>
                <ambientLight />
                <pointLight postiotion={[10, 10, 10]} />
                <mesh ref={(mesh) => {
                    mesh.geometry = model.geometry;
                    mesh.material = model.material;
                }} />
            <OrbitControls/>
            </Canvas>
            )}
        </div>
    );
}

export default APP;
