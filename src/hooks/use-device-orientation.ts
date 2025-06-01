import { useLayoutEffect, useState } from "react";

const useDeviceOrientation = () => {
  const [alpha, setAlpha] = useState<number>(0);
  const [beta, setBeta] = useState<number>(0);
  const [gamma, setGamma] = useState<number>(0);

  useLayoutEffect(() => {
    function handleOrientation(event: DeviceOrientationEvent) {
      setAlpha(event.alpha ?? 0);
      setBeta(event.beta ?? 0);
      setGamma(event.gamma ?? 0);
    }

    // deviceorientation イベントを取得する
    window.addEventListener("deviceorientation", handleOrientation);

    // コンポーネントがアンマウントされるときにイベントリスナーをクリーンアップする
    return () => {
      window.removeEventListener("deviceorientation", handleOrientation);
    };
  }, []);

  return { alpha, beta, gamma };
};

export { useDeviceOrientation };
