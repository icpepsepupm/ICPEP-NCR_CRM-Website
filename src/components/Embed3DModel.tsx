import { Suspense, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";
import { Group } from "three";

function Model() {
  const { scene } = useGLTF("/scene(1).glb");
  const meshRef = useRef<Group>(null);

  useFrame((_, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += delta * 0.5; // Rotate around Y-axis at 0.5 radians per second
    }
  });

  return (
    <primitive
      ref={meshRef}
      object={scene}
      position={[0, -1, -2]}
      rotation={[Math.PI / 6, Math.PI / 5.5, 0]}
    />
  );
}

export default function SketchfabModel() {
  return (
    <Canvas style={{ background: "transparent" }}>
      <ambientLight intensity={5} />
      <directionalLight position={[5, 5, 5]} />
      <Suspense fallback={null}>
        <Model />
      </Suspense>
      <OrbitControls
        enableZoom={false}
        target={[0, -1, -2]}
        enablePan={false}
      />
    </Canvas>
  );
}
