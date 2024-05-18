import { useLayoutEffect, useState } from 'react';

const useDeviceOrientation = () => {
  const [alpha, setAlpha] = useState(0);
  const [beta, setBeta] = useState(0);
  const [gamma, setGamma] = useState(0);

  useLayoutEffect(() => {
    function handleOrientation(event) {
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
