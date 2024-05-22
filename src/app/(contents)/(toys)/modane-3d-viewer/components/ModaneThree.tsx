'use client';

import { Html, OrbitControls } from '@react-three/drei';
import { Canvas, useLoader } from '@react-three/fiber';
import { Bloom, EffectComposer } from '@react-three/postprocessing';
import { Suspense, useEffect } from 'react';
import { CircleGeometry, Mesh, MeshStandardMaterial, Object3D } from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';

// モデルの読み込みを行うコンポーネント
const Model = () => {
  // GLTFLoaderを使用してモデルを読み込む
  const result = useLoader(GLTFLoader, '/gltf/modane.glb');

  // モデルが読み込まれた後に実行する
  useEffect(() => {
    // scene.traverse 関数
    // scene に配置されたすべて子要素や入れ子になっている孫要素などを引数として受け取る
    // これを利用してメッシュ要素である場合はすべての要素に対して影を有効にする
    result.scene.traverse((object: Object3D) => {
      if ((object as any).isMesh) {
        const mesh = object as Mesh;
        mesh.castShadow = true; // モデルの全てのメッシュに影のキャストを有効にする
        mesh.receiveShadow = true; // 影の受け取りを有効にする
      }
    });
  }, [result]);

  // ロードされたモデルを表示する
  return <primitive object={result.scene} />;
};

// ロード中に表示するコンポーネント
const FallbackComponent = () => (
  <Html>
    <span>Loading...</span>
  </Html>
);

// 地面を作成するコンポーネント
const Ground = () => {
  const geometry = new CircleGeometry(0.4, 64);
  const material = new MeshStandardMaterial({ color: '#cccce0' });
  return (
    <mesh
      rotation={[-Math.PI / 2, 0, 0]} //  X 軸周りに -90 度回転させて平行にする
      position={[0, 0, 0]}
      receiveShadow
    >
      <primitive object={geometry} attach="geometry" />
      <primitive object={material} attach="material" />
    </mesh>
  );
};

// メインのコンポーネント
const ModaneThree = () => (
  <div className="flex justify-center">
    <Canvas
      shadows
      camera={{ fov: 30, near: 0.1, far: 2000, position: [40, 20, 0] }}
      style={{
        width: '90vw',
        height: '80vh',
        background: 'linear-gradient(#e5e7ea, #f0f0f0)',
        borderRadius: '16px',
      }}
    >
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
      {/* 地面 */}
      <Ground />
      {/* 半球光源 (環境光) */}
      <ambientLight color={0xf8ece0} intensity={2} />
      {/* 平行光源 */}
      <directionalLight
        color={0xf8ece0}
        position={[20, 50, 20]}
        intensity={1.75}
        castShadow
        shadow-mapSize-width={4096}
        shadow-mapSize-height={4096}
        shadow-camera-near={0.5}
        shadow-camera-far={500}
        shadow-camera-left={-10}
        shadow-camera-right={10}
        shadow-camera-top={10}
        shadow-camera-bottom={-10}
        shadow-bias={-0.0001} // シャドウアクネを防止する
      />
      {/* postprocessing で効果をつける */}
      <EffectComposer>
        <Bloom luminanceThreshold={0.4} luminanceSmoothing={0.9} height={300} />
      </EffectComposer>
      {/* モデルを非同期で読み込む */}
      <Suspense fallback={<FallbackComponent />}>
        <Model />
      </Suspense>
    </Canvas>
  </div>
);

export { ModaneThree };
