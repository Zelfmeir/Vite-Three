import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import Shape from './Shape';

const ShapeCanvas = () => {
    return (
        <Canvas frameloop="demand">
            <OrbitControls enableZoom={false} enablePan={false} />
            <shape/>
        </Canvas>
    );
};

export default ShapeCanvas;