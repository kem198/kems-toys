"use client";

import { Html } from "@react-three/drei";

/** ロード中に表示するコンポーネント */
function FallbackMessage() {
  return (
    <Html>
      <span>Loading...</span>
    </Html>
  );
}

export { FallbackMessage };
