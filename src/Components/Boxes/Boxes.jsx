import { Box } from '@react-three/drei'; 

export default function CanvasContainer() {
    return (
        <>
            <Box args={[0.5, 0.5]} visible={false} position={[-15.75, 1, 9.2]} name="point1" />
            <Box args={[0.5, 0.5]} visible={false} position={[-7.3, 2.4, 7.7]} name="point2" />
            <Box args={[0.5, 0.5]} visible={false} position={[-3.7, 1.8, 15.4]} name="point3" />
            <Box args={[0.5, 0.5]} visible={false} position={[-8, 1, 8.7]} name="point4" />
            <Box args={[0.5, 0.5]} visible={false} position={[-18.5, 1.4, 11.5]} name="point5" />
            <Box args={[0.5, 0.5]} visible={false} position={[-0.75, 1.2, -23.5]} name="point6" rotation={[0, Math.PI / 2, 0]} />
            <Box args={[0.5, 0.5]} visible={false} position={[-18.5, 1, 6.6]} name="point7" rotation={[0, Math.PI / 2, 0]} />
            <Box args={[0.5, 0.5]} visible={false} position={[-17.3, 1.5, 6.6]} name="point8" />
            <Box args={[0.5, 0.5]} visible={false} position={[7, 2, -15]} name="point9" />
        </>
    )
}