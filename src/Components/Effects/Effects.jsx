import React, { useRef } from 'react'
import { useFrame } from "@react-three/fiber"
import { EffectComposer, SSAO, Bloom } from '@react-three/postprocessing'
import { BlendFunction } from 'postprocessing'

export default function Effects() {

    const ref = useRef()
    useFrame((state) => { 
        // Disable SSAO on regress
        ref.current.blendMode.setBlendFunction(BlendFunction.MULTIPLY)
    }, [])

    return (
        <EffectComposer >
            <SSAO ref={ref} intensity={4.6} radius={0.1} luminanceInfluence={0} bias={0.035} />
            <Bloom mipmapBlur luminanceThreshold={0.23} luminanceSmoothing={0.85} height={300} />
        </EffectComposer>
    )
}