"use client";

import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Bloom, EffectComposer } from "@react-three/postprocessing";
import { Suspense } from "react";
import { FallbackMessage } from "./fallback-message";
import { Ground } from "./ground";
import { Model } from "./model";

/** メインコンポーネント */
function Modane3dViewer() {
  return (
    <Canvas
      shadows
      camera={{ fov: 30, near: 0.1, far: 2000, position: [40, 20, 0] }}
      style={{
        maxWidth: "90vw",
        height: "80vh",
        background: "linear-gradient(#e5e7ea, #f0f0f0)",
        borderRadius: "16px",
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
      <Suspense fallback={<FallbackMessage />}>
        <Model />
      </Suspense>
    </Canvas>
  );
}

export { Modane3dViewer };
