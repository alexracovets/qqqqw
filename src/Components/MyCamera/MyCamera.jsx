import React, { useRef } from 'react';
import { CameraControls } from "@react-three/drei";

const MyCamera = React.forwardRef((props, ref) => {
    const refCamera = useRef(); // ref to camera

    React.useImperativeHandle(ref, () => ({
        refCamera: refCamera.current,
    }));

    return (
        <CameraControls ref={refCamera} minDistance={22} maxDistance={68} maxPolarAngle={Math.PI / 2.08} />
    )
})

export default MyCamera