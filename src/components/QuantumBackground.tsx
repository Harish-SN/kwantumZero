import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { useMemo, useRef, useEffect } from "react";
import * as THREE from "three";

function Vortex() {
  const pointsRef = useRef<THREE.Points>(null!);
  const { camera } = useThree();

  const introRef = useRef<THREE.Audio | null>(null);
  const ambientRef = useRef<THREE.Audio | null>(null);

  const geometry = useMemo(() => {
    const count = 50000;
    const positions = new Float32Array(count * 3);

    for (let i = 0; i < count; i++) {
      const r = Math.random() * 80;
      const angle = r * 0.25 + Math.random() * 6;

      positions[i * 3] = Math.cos(angle) * r;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 40;
      positions[i * 3 + 2] = Math.sin(angle) * r;
    }

    const geo = new THREE.BufferGeometry();
    geo.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    return geo;
  }, []);

  const material = useMemo(() => {
    return new THREE.PointsMaterial({
      color: "#f1fd00",
      size: 0.05,
      sizeAttenuation: true,
      depthWrite: false,
      transparent: true,
      opacity: 0.9,
    });
  }, []);

  useEffect(() => {
    const listener = new THREE.AudioListener();
    camera.add(listener);

    const intro = new THREE.Audio(listener);
    const ambient = new THREE.Audio(listener);
    introRef.current = intro;
    ambientRef.current = ambient;

    const loader = new THREE.AudioLoader();
    loader.load("/kwantum.mp3", (b) => {
      intro.setBuffer(b);
      intro.setLoop(false);
      intro.setVolume(0.6);
    });
    loader.load("/ambient-dark.mp3", (b) => {
      ambient.setBuffer(b);
      ambient.setLoop(true);
      ambient.setVolume(0.35);
    });

    const start = async () => {
      if (listener.context.state === "suspended") await listener.context.resume();
      if (intro.buffer && !intro.isPlaying) intro.play();
    };
    window.addEventListener("click", start, { once: true });

    intro.onEnded = () => {
      if (ambient.buffer && !ambient.isPlaying) ambient.play();
    };

    return () => {
      intro.stop();
      ambient.stop();
      camera.remove(listener);
      window.removeEventListener("click", start);
    };
  }, [camera]);

  useFrame((state) => {
    if (!pointsRef.current) return;
    const t = state.clock.getElapsedTime();

    pointsRef.current.rotation.y += 0.002;
    pointsRef.current.rotation.x += 0.0006;
    pointsRef.current.scale.setScalar(1 + Math.sin(t * 0.5) * 0.02);

    if (ambientRef.current && ambientRef.current.isPlaying) {
      const pulse = 0.35 + Math.sin(t * 1.2) * 0.05;
      ambientRef.current.setVolume(pulse);
    }
  });

  return <points ref={pointsRef} geometry={geometry} material={material} />;
}

export default function QuantumBackground() {
  return (
    <Canvas
      camera={{ position: [0, 0, 40], fov: 75 }}
      style={{
        position: "fixed",
        inset: 0,
        width: "100vw",
        height: "100vh",
        zIndex: 0,
        pointerEvents: "none",
      }}
      dpr={[1, 1.5]}
    >
      <color attach="background" args={["#020617"]} />
      <Vortex />
    </Canvas>
  );
}