"use client";

import { Spinner } from "@/components/ui/spinner";
import { Html } from "@react-three/drei";

/** ロード中に表示するコンポーネント */
function FallbackMessage() {
  return (
    <Html className="flex items-center gap-2">
      <Spinner />
      <span>Loading...</span>
    </Html>
  );
}

export { FallbackMessage };
