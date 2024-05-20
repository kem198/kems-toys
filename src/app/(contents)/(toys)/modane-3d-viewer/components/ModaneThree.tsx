'use client';

import { Html, OrbitControls } from '@react-three/drei';
import { Canvas, useLoader } from '@react-three/fiber';
import { Bloom, EffectComposer } from '@react-three/postprocessing';
import { Suspense, useEffect } from 'react';
import { CircleGeometry, Mesh, MeshStandardMaterial, Object3D } from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';

/**
 * モデルの読み込みを行う関数
 */
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
        mesh.receiveShadow = true; // 必要なら影の受け取りも有効にする
      }
    });
  }, [result]);

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
  plane.receiveShadow = true; // 地面が影を受け取るように設定
  return <primitive object={plane} />;
};

const ModaneThree = () => (
  <div className="flex justify-center">
    {/* シーンの設定 */}
    <Canvas
      shadows // シャドウマッピングを有効にする
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
        castShadow
        shadow-mapSize-width={4096} // シャドウマップの解像度を高くする
        shadow-mapSize-height={4096} // シャドウマップの解像度を高くする
        shadow-camera-near={0.5}
        shadow-camera-far={500}
        shadow-camera-left={-10}
        shadow-camera-right={10}
        shadow-camera-top={10}
        shadow-camera-bottom={-10}
        shadow-bias={-0.0001} // シャドウバイアスを微調整
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
