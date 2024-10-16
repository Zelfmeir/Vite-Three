import { Decal, Float } from '@react-three/drei';
import { useTexture } from '@react-three/drei';
import { MeshStandardMaterial } from 'three';

const Shape = () => {
    const [texture] = useTexture([threejs]);

    return (
        <Float speed={.75} rotationIntensity={1} floatIntensity={2}>
            <mesh castShadow receiveShadow scale={1.75}>
                <icosahedronGeometry args={[1, 1]}/>
                <MeshStandardMaterial color="#fff8eb" polygonOffset polygonOffsetFactor={-5} flatShading />
                <Decal position={[0, 0, 1]} rotation={[2 * Math.PI, 0, 6.25]} scale={1} map={texture} flatShading />
            </mesh>
        </Float>
    );
};

export default Shape;