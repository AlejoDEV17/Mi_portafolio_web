"use client";

import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Float, Stars } from "@react-three/drei";
import { memo, useMemo, useRef } from "react";
import * as THREE from "three";

function HolographicPlanet() {
  const mesh = useRef<THREE.Mesh>(null);
  const ring = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    const elapsed = state.clock.getElapsedTime();
    if (mesh.current) {
      mesh.current.rotation.y = elapsed * 0.12;
      mesh.current.rotation.x = Math.sin(elapsed * 0.2) * 0.08;
    }
    if (ring.current) {
      ring.current.rotation.z = elapsed * 0.08;
    }
  });

  return (
    <Float speed={1.2} rotationIntensity={0.22} floatIntensity={0.35}>
      <group position={[2.1, 0.15, -1.3]}>
        <mesh ref={mesh}>
          <sphereGeometry args={[1.08, 96, 96]} />
          <meshStandardMaterial
            color="#17284d"
            roughness={0.42}
            metalness={0.25}
            emissive="#132c64"
            emissiveIntensity={0.55}
          />
        </mesh>
        <mesh ref={ring} rotation={[Math.PI / 2.35, 0.12, 0]}>
          <torusGeometry args={[1.55, 0.012, 16, 220]} />
          <meshBasicMaterial color="#70ffd8" transparent opacity={0.72} />
        </mesh>
        <mesh rotation={[Math.PI / 2.15, 0.24, 0]}>
          <torusGeometry args={[1.88, 0.007, 16, 220]} />
          <meshBasicMaterial color="#9d6bff" transparent opacity={0.42} />
        </mesh>
      </group>
    </Float>
  );
}

function ReactiveParticles() {
  const points = useRef<THREE.Points>(null);
  const { mouse } = useThree();
  const particles = useMemo(() => {
    const count = 850;
    const positions = new Float32Array(count * 3);
    for (let i = 0; i < count; i += 1) {
      positions[i * 3] = (Math.random() - 0.5) * 8;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 4.5;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 4;
    }
    return positions;
  }, []);

  useFrame((state) => {
    if (!points.current) return;
    points.current.rotation.y = state.clock.getElapsedTime() * 0.025 + mouse.x * 0.08;
    points.current.rotation.x = mouse.y * 0.05;
  });

  return (
    <points ref={points}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" count={particles.length / 3} array={particles} itemSize={3} />
      </bufferGeometry>
      <pointsMaterial color="#57d7ff" size={0.012} transparent opacity={0.72} sizeAttenuation />
    </points>
  );
}

function Scene() {
  return (
    <>
      <color attach="background" args={["#03040a"]} />
      <fog attach="fog" args={["#03040a", 3.8, 9.5]} />
      <ambientLight intensity={0.55} />
      <pointLight position={[3, 2, 2]} intensity={2.8} color="#57d7ff" />
      <pointLight position={[-3, -2, -1]} intensity={1.65} color="#9d6bff" />
      <Stars radius={50} depth={40} count={2400} factor={4} saturation={0} fade speed={0.35} />
      <ReactiveParticles />
      <HolographicPlanet />
    </>
  );
}

function CosmicSceneComponent() {
  return (
    <div className="pointer-events-none fixed inset-0 z-0 opacity-80">
      <Canvas
        camera={{ position: [0, 0, 5.2], fov: 46 }}
        dpr={[1, 1.6]}
        gl={{ antialias: true, powerPreference: "high-performance" }}
      >
        <Scene />
      </Canvas>
    </div>
  );
}

export const CosmicScene = memo(CosmicSceneComponent);
