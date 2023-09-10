import { Canvas, useThree, useFrame } from "@react-three/fiber";
import { Vector3 } from "three";

const MyButton = () => {
    const { camera } = useThree();

    const handleClick = () => {
        const targetPosition = new Vector3(1, 2, 3);
        const duration = 1; // Duration in seconds
        const startPosition = camera.position.clone();
        let elapsedTime = 0;

        useFrame(({ clock }) => {
            elapsedTime += clock.getDelta();

            if (elapsedTime >= duration) {
                camera.position.copy(targetPosition);
                return;
            }

            const t = elapsedTime / duration;
            const lerpedPosition = new Vector3().lerpVectors(
                startPosition,
                targetPosition,
                t
            );
            camera.position.copy(lerpedPosition);
        });
    };

    return <button onClick={handleClick}>Click Me</button>;
};

const App = () => {
    return (
        <Canvas>
            <MyButton />
        </Canvas>
    );
};