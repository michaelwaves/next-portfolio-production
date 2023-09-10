import { MeshTransmissionMaterial } from "@react-three/drei";
import { BoxGeometry, SphereGeometry } from "three";
const geometry = new BoxGeometry(0.3, 6, 6);
const sphereGeometry = new SphereGeometry(1, 1, 1);
export default function Window() {
    return (
        <mesh geometry={geometry} position={[5, 2, 0]}>
            <MeshTransmissionMaterial
                distortionScale={0.5} temporalDistortion={0.5} chromaticAberration={0.5} />
        </mesh>
    )
}