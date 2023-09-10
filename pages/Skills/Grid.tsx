import { Canvas, useThree, useFrame } from '@react-three/fiber'
import { SkillsRotated } from './Skillsrotated'
import { Vector3 } from 'three'
import { SkillsData } from '@/data/SkillsData'
import { useState } from 'react'

function Rig() {
  const { camera, mouse } = useThree()
  const vec = new Vector3()

  return useFrame(() => {
    camera.position.lerp(vec.set(mouse.x, mouse.y, camera.position.z), 0.05)
    camera.lookAt(0, 0, 0)
  })
}

export default function Grid() {
  const [index, setIndex] = useState(0)
  return (
    <div className="mt-20 flex flex-col items-center justify-center h-full bg-s-3 dark:bg-p-3">
      <div>
        <h1>{SkillsData[index].title}</h1>
        <p>{SkillsData[index].description}</p>
      </div>
      <Canvas camera={{ position: [0, 0, 6] }}>
        <directionalLight position={[0, 0, 1]} />
        <SkillsRotated setIndex={setIndex} />
        <Rig />
      </Canvas>
    </div>
  )
}