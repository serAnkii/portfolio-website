import { useRef, useState } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'

function Box(props) {
  const ref = useRef()
  const [hovered, hover] = useState(false)
  const [clicked, click] = useState(false)
 
  useFrame((state, delta) => (ref.current.rotation.x += 0.01))
  return (
    <mesh
      {...props}
      ref={ref}
      scale={clicked ? 1.5 : 1}
      onClick={(event) => click(!clicked)}
      onPointerOver={(event) => hover(true)}
      onPointerOut={(event) => hover(false)}>
      <boxGeometry args={[5, 0.1, 0.1]} />
      <meshStandardMaterial color={hovered ? 'magenta' : 'cyan'} />
    </mesh>
  )
}

export default function Additional() {
  return (
    <Canvas>
      <ambientLight intensity={0.2} />
      <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
      <pointLight position={[-10, -10, -10]} />
      <Box position={[0.6, 0, 0.6]} />
      {/* <Box position={[4, 0, 0]} /> */}
      <Box position={[0.3, 0.3, 0.4]} />
      <Box position={[0.3, 0.6, 0.6]} />
      <Box position={[0.5, 0.7, 1.8]} />
      <Box position={[1.9, 0, 0]} />
      <Box position={[0, 0, 0]} />
    </Canvas>
  )
}
