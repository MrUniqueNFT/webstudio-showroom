import { Suspense, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { ParticleField } from "./ParticleField";
import { GridFloor } from "./GridFloor";
import { useIsMobile, useReducedMotion } from "../../hooks/useMediaQuery";

/** Scroll ilerledikçe kamera çok hafif yaklaşır — premium, kontrollü. */
function ScrollCamera() {
  const target = useRef(7.2);

  useFrame((state) => {
    const heroHeight = window.innerHeight;
    const progress = Math.min(window.scrollY / heroHeight, 1);
    target.current = 7.2 - progress * 1.1;
    state.camera.position.z = THREE.MathUtils.lerp(state.camera.position.z, target.current, 0.05);
    state.camera.position.y = THREE.MathUtils.lerp(state.camera.position.y, progress * 0.4, 0.05);
    state.camera.lookAt(0, 0, 0);
  });

  return null;
}

export function HeroScene() {
  const isMobile = useIsMobile();
  const reducedMotion = useReducedMotion();

  return (
    <Canvas
      dpr={[1, 1.75]}
      camera={{ position: [0, 0, 7.2], fov: 42 }}
      gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
      className="!absolute inset-0"
      aria-hidden
    >
      <Suspense fallback={null}>
        <ambientLight intensity={0.55} />

        <ParticleField count={isMobile ? 150 : 450} />
        <GridFloor />
        {!reducedMotion && <ScrollCamera />}

        <fog attach="fog" args={["#08080d", 9, 22]} />
      </Suspense>
    </Canvas>
  );
}
