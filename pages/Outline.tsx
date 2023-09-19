import { useReducer, useRef, useState } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Selection, Select, EffectComposer, Outline } from '@react-three/postprocessing'
import { Sans } from '@/components/models/Sans'
import { Headphones } from '@/components/models/Headphones'

function Box(props: any) {
    const ref = useRef<any>()
    const [hovered, hover] = useState(false)
    console.log(hovered)
    useFrame((state, delta) => (ref.current.rotation.x = ref.current.rotation.y += delta))
    return (
        <Select enabled={hovered}>
            <mesh ref={ref} {...props} onPointerOver={() => hover(true)} onPointerOut={() => hover(false)}>
                <boxGeometry />
                <meshStandardMaterial color="orange" />
            </mesh>
        </Select>
    )
}

export default function App() {
    const hoverDispatch = (mesh: any) => ({ type: 'hover', mesh })
    const unhoverDispatch = (mesh: any) => ({ type: 'unhover', mesh })
    const [hoverState, setHoverState] = useReducer((state: any, action: any) => {
        switch (action.type) {
            case 'hover':
                return [...state, action.mesh]
            case 'unhover':
                return state.filter((mesh: any) => mesh !== action.mesh)
            default:
                return state
        }
    }, [])

    const colors = {
        orange: 0xfb6b1d,
        blue: 0x1d8afb,
        white: 0xffffff,
        black: 0x000000,
    }

    return (
        <div className='w-full h-screen'>
            <Canvas dpr={[1, 2]}>
                <ambientLight intensity={0.5} />
                <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
                <pointLight position={[-10, -10, -10]} />
                <Selection>
                    <EffectComposer multisampling={8} autoClear={false}>
                        <Outline blur visibleEdgeColor={colors.black} edgeStrength={10} width={1000} />
                    </EffectComposer>
                    <Box position={[-1, 0, 0]} />
                    <Box position={[1, 0, 0]} />
                    <Select enabled={hoverState.includes('sans')}>
                        <Sans position={[0, 0, 0]} onPointerEnter={() => setHoverState(hoverDispatch("sans"))} onPointerLeave={() => setHoverState(unhoverDispatch("sans"))} />
                    </Select>
                    <Select enabled={hoverState.includes('headphones')}>
                        <Headphones position={[0, 0, 0]} onPointerEnter={() => setHoverState(hoverDispatch("headphones"))} onPointerLeave={() => setHoverState(unhoverDispatch("headphones"))} />
                    </Select>
                </Selection>
            </Canvas>
        </div>
    )
}