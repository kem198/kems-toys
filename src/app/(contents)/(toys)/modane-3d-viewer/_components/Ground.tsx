'use client';

import { CircleGeometry, MeshStandardMaterial } from 'three';

/** 地面コンポーネント */
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

export { Ground };
