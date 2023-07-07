import React, { useRef } from 'react'; 
import { Canvas } from '@react-three/fiber';
import { Environment, useGLTF } from '@react-three/drei';

import MyCamera from '../MyCamera/MyCamera';
import Effects from '../Effects/Effects';
import Annotations from '../Annotations/Annotations';
import Boxes from '../Boxes/Boxes';
import ResetCamera from '../ResetCamera/ResetCamera';

export const SceneContext = React.createContext();

export default function CanvasContainer() {
    const refCamera = useRef(); // ref to camera
    const { nodes } = useGLTF('./models/Model.glb'); // load model

    return (
        <>
            <ResetCamera refCamera={refCamera} />
            <Canvas dpr={1.5} gl={{ alpha: false }} camera={{ position: [0, 20, 50], fov: 55 }} style={{zIndex:9}}>
                <color attach="background" args={['#CBCBCB']} />
                <primitive object={nodes.Scene} scale={[0.25, 0.25, 0.25]} />
                <Environment files={'./models/Model-hdr.hdr'} />
                <Boxes />
                <Annotations refCamera={refCamera}  style={{zIndex:50}} />
                <Effects />
                <MyCamera ref={refCamera} />
            </Canvas>
        </>
    );
}
