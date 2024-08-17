import React, { Suspense, useEffect } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';

function Model() {
  const { scene, materials, nodes } = useGLTF('./public/rocket.glb');
  scene.scale.set(10, 10, 10);  // Experiment with these values

  return <primitive object={scene} />;
}

export default function ModelViewer() {
  return (
    <div style={{ height: '500px', width: '300px' }}> {/* Adjusted for a square aspect ratio */}
      <Canvas camera={{ position: [0, 0, 20], fov: 45 }}> {/* Adjusted camera position and FOV */}
        <ambientLight intensity={0.7} />
        <directionalLight position={[10, 10, 10]} intensity={1} />
        <hemisphereLight skyColor={0xffffff} groundColor={0x444444} intensity={0.6} />
        <Suspense fallback={null}>
          <Model />
          <OrbitControls enableZoom={false} />
        </Suspense>
      </Canvas>
    </div>
  );
}
