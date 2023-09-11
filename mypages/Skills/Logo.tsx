import { useRef, useState, useMemo } from 'react'
import { useFrame } from '@react-three/fiber'
import { Color } from 'three'
import { Text } from '@react-three/drei'
import { useSpring, animated } from '@react-spring/three'

export default function Logo({ geometry, material, children,position, onPointerOver, rotation,...props }:{rotation?:any,geometry:any, material:any, props?:any, position?: any, children?:any, onPointerOver?:any}) {
  const ref = useRef<any>()
  const black = useMemo(() => new Color('black'), [])
  const lime = useMemo(() => new Color('orange'), [])
  const [hovered, setHovered] = useState(false)
  const {size} = useSpring({
    size: hovered ? 1.4 : 1,
    config: { mass: 1, tension: 400, friction: 20, precision: 0.0001 },
  })

  useFrame(({ mouse, viewport }) => {
    const x = (mouse.x * viewport.width) / 2.5
    const y = (mouse.y * viewport.height) / 2.5
    if (typeof ref.current === "object"){
    ref.current.lookAt(x, y, 1)
    /* ref.current.material.color.lerp(hovered ? lime : black, 0.05)}
  }) */
    }
})

  return (
    <mesh
    ref={ref} 
      position={position}
      onPointerOver={onPointerOver}
      onPointerOut={() => setHovered(false)}
      geometry={geometry}
      material={material}
    >
    </mesh>
  )
}