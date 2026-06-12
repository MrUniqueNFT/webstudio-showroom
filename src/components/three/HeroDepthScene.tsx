import { useMemo, useRef } from "react";
import { Canvas, useFrame, useLoader, useThree } from "@react-three/fiber";
import { ShaderMaterial, TextureLoader, ClampToEdgeWrapping, SRGBColorSpace, Vector2 } from "three";
import heroImage from "../../assets/hero.jpg";
import heroDepth from "../../assets/hero-depth.jpg";

const vertexShader = /* glsl */ `
  varying vec2 vUv;
  void main() {
    vUv = uv;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`;

// Depth map'e göre uv kaydırma: yakın pikseller (parlak) daha çok hareket eder.
const fragmentShader = /* glsl */ `
  precision highp float;
  uniform sampler2D uTexture;
  uniform sampler2D uDepth;
  uniform vec2 uMouse;
  uniform float uScroll;
  uniform vec2 uCover;
  varying vec2 vUv;

  void main() {
    vec2 uv = (vUv - 0.5) * uCover + 0.5;
    float depth = texture2D(uDepth, uv).r;
    vec2 shift = uMouse * 0.030 + vec2(0.0, uScroll * 0.07);
    vec2 displaced = uv + shift * (depth - 0.5);
    gl_FragColor = texture2D(uTexture, displaced);
  }
`;

function DepthPlane() {
  const { viewport, size } = useThree();
  const [texture, depthTexture] = useLoader(TextureLoader, [heroImage, heroDepth]);
  const materialRef = useRef<ShaderMaterial>(null);
  const mouse = useRef(new Vector2(0, 0));
  const target = useRef(new Vector2(0, 0));

  const uniforms = useMemo(() => {
    for (const t of [texture, depthTexture]) {
      t.wrapS = ClampToEdgeWrapping;
      t.wrapT = ClampToEdgeWrapping;
    }
    texture.colorSpace = SRGBColorSpace;
    return {
      uTexture: { value: texture },
      uDepth: { value: depthTexture },
      uMouse: { value: new Vector2(0, 0) },
      uScroll: { value: 0 },
      uCover: { value: new Vector2(1, 1) },
    };
  }, [texture, depthTexture]);

  useFrame((state) => {
    const mat = materialRef.current;
    if (!mat) return;

    // cover-fit: kenarlarda boşluk kalmadan görseli kırp; %94 örnekle ki kaydırma payı kalsın
    const img = texture.image as HTMLImageElement;
    const imageAspect = img.width / img.height;
    const screenAspect = size.width / size.height;
    const cover = mat.uniforms.uCover.value as Vector2;
    if (screenAspect > imageAspect) {
      cover.set(0.94, (imageAspect / screenAspect) * 0.94);
    } else {
      cover.set((screenAspect / imageAspect) * 0.94, 0.94);
    }

    target.current.set(state.pointer.x, state.pointer.y);
    mouse.current.lerp(target.current, 0.06);
    (mat.uniforms.uMouse.value as Vector2).copy(mouse.current);

    const heroHeight = window.innerHeight || 1;
    mat.uniforms.uScroll.value = Math.min(1, window.scrollY / heroHeight);
  });

  return (
    <mesh scale={[viewport.width, viewport.height, 1]}>
      <planeGeometry args={[1, 1]} />
      <shaderMaterial
        ref={materialRef}
        vertexShader={vertexShader}
        fragmentShader={fragmentShader}
        uniforms={uniforms}
      />
    </mesh>
  );
}

/** Hero fotoğrafını derinlik haritasıyla mouse + scroll'a tepki veren gerçek 3D katmana çevirir. */
export default function HeroDepthScene() {
  return (
    <Canvas
      dpr={[1, 1.75]}
      gl={{ antialias: false, powerPreference: "high-performance" }}
      camera={{ position: [0, 0, 1], fov: 75 }}
      className="pointer-events-none"
      style={{ position: "absolute", inset: 0 }}
      eventSource={document.body}
      eventPrefix="client"
    >
      <DepthPlane />
    </Canvas>
  );
}
