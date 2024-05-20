'use client';

import { Html, OrbitControls } from '@react-three/drei';
import { Canvas, useLoader } from '@react-three/fiber';
import { Bloom, EffectComposer } from '@react-three/postprocessing';
import { Suspense } from 'react';
import { CircleGeometry, Mesh, MeshStandardMaterial } from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';

/**
 * モデルの読み込みを行う関数
 */
const Model = () => {
  // GLTFLoaderを使用してモデルを読み込む
  const result = useLoader(GLTFLoader, '/gltf/modane.glb');

  // ロードされたモデルを表示する
  return <primitive object={result.scene} />;
};

/**
 * モデルのロード中に表示する関数
 */
const FallbackComponent = () => (
  <Html>
    <span>Loading...</span>
  </Html>
);

/**
 * 地面を作成する関数
 */
const Ground = () => {
  const geometry = new CircleGeometry(0.4, 64); // 地面のサイズ
  const material = new MeshStandardMaterial({ color: '#cccce0' }); // 地面の色
  const plane = new Mesh(geometry, material);
  plane.rotation.x = -Math.PI / 2; // 地面を水平にするために回転
  plane.position.y = 0; // 地面の位置
  return <primitive object={plane} />;
};

const ModaneThree = () => (
  <div className="flex justify-center">
    {/* シーンの設定 */}
    <Canvas
      camera={{ fov: 30, near: 0.1, far: 2000, position: [40, 20, 0] }}
      style={{
        width: '90vw',
        height: '80vh',
        background: 'linear-gradient(#e5e7ea, #f0f0f0)',
        borderRadius: '16px',
      }}
      className="border"
    >
      {/* 半球光源 (環境光) */}
      <ambientLight color={0xf8ece0} intensity={2} />
      {/* 平行光源 */}
      <directionalLight
        color={0xf8ece0}
        position={[20, 50, 20]}
        intensity={1.75}
      />
      {/* モデルを非同期で読み込む */}
      <Suspense fallback={<FallbackComponent />}>
        <Model />
      </Suspense>
      {/* 地面を追加 */}
      <Ground />
      {/* postprocessing で効果をつける */}
      <EffectComposer>
        <Bloom luminanceThreshold={0.4} luminanceSmoothing={0.9} height={300} />
      </EffectComposer>
      {/* カメラ制御 */}
      <OrbitControls
        enableZoom
        enableRotate
        minPolarAngle={Math.PI / 6} // 最小の緯度角 (ラジアン単位)
        maxPolarAngle={Math.PI / 1} // 最大の緯度角 (ラジアン単位)
        minDistance={1} // カメラとターゲットの最小距離
        maxDistance={4} // カメラとターゲットの最大距離
        target={[0, 0.4, 0]} // カメラの注視点
      />
    </Canvas>
  </div>
);

export { ModaneThree };
