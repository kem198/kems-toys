'use client';

import { Html, OrbitControls } from '@react-three/drei';
import { Canvas, useLoader } from '@react-three/fiber';
import { Suspense } from 'react';
import { GLTFLoader } from 'three/examples/jsm/Addons';

/**
 * モデルの読み込みを行う関数
 */
const Model = () => {
  const result = useLoader(GLTFLoader, '/assets/modane.glb');
  console.log(result);
  return <primitive object={result.scene} />;
};

// 必要に応じてフォールバックコンポーネントを定義
const FallbackComponent = () => (
  <Html>
    <div>Loading...</div>
  </Html>
);

const ModaneThree = () => (
  <div id="canvas-container" style={{ width: '80vw', height: '80vh' }}>
    <Canvas>
      <ambientLight intensity={1} />
      <directionalLight color="white" position={[0, 0, 5]} />
      <Suspense fallback={<FallbackComponent />}>
        <Model />
      </Suspense>
      <OrbitControls enableZoom enableRotate />
    </Canvas>
  </div>
);

export { ModaneThree };
