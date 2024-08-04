'use client';

import { useLoader } from '@react-three/fiber';
import { useEffect } from 'react';
import { Mesh, Object3D } from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';

/** モデルの読み込みを行うコンポーネント */
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

export { Model };
