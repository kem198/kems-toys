import { useLayoutEffect, useState } from 'react';

const useDeviceOrientation = () => {
  const [alpha, setAlpha] = useState<number | null>(null);
  const [beta, setBeta] = useState<number | null>(null);
  const [gamma, setGamma] = useState<number | null>(null);

  useLayoutEffect(() => {
    function handleOrientation(event: DeviceOrientationEvent) {
      setAlpha(event.alpha);
      setBeta(event.beta);
      setGamma(event.gamma);
    }

    // deviceorientation イベントを取得する
    window.addEventListener('deviceorientation', handleOrientation);

    // コンポーネントがアンマウントされるときにイベントリスナーをクリーンアップする
    return () => {
      window.removeEventListener('deviceorientation', handleOrientation);
    };
  }, []);

  return { alpha, beta, gamma };
};

export { useDeviceOrientation };
