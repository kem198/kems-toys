'use client';

import { Html } from '@react-three/drei';

/** ロード中に表示するコンポーネント */
const FallbackMessage = () => (
  <Html>
    <span>Loading...</span>
  </Html>
);

export { FallbackMessage };
