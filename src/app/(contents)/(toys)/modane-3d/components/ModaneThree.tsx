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
  <div className="flex justify-center">
    <Canvas
      camera={{ fov: 30, near: 0.1, far: 2000, position: [40, 20, 0] }}
      style={{ width: '90vw', height: '80vh' }}
      className="border"
    >
      <ambientLight intensity={1} />
      <directionalLight color="white" position={[0, 0, 5]} />
      <Suspense fallback={<FallbackComponent />}>
        <Model />
      </Suspense>
      <OrbitControls
        enableZoom
        enableRotate
        minPolarAngle={Math.PI / 6} // 最小の緯度角（ラジアン単位）
        maxPolarAngle={Math.PI / 1} // 最大の緯度角（ラジアン単位）
        minDistance={0.5} // カメラとターゲットの最小距離
        maxDistance={4} // カメラとターゲットの最大距離
        target={[0, 0.4, 0]} // カメラの注視点を設定
      />
    </Canvas>
  </div>
);

export { ModaneThree };
