'use client';

import { useDeviceOrientation } from '@/hooks/useDeviceOrientation';
import { requestDeviceMotionPermission } from '@/utilities/requestDeviceMotionPermission';
import { Container, Graphics, Sprite, Stage, Text } from '@pixi/react';
import { TextStyle } from '@pixi/text';
import { useCallback } from 'react';

const DeviceOrientationSample = () => {
  // カスタムフックからセンサ情報を取得
  const { alpha, beta, gamma } = useDeviceOrientation();

  // ウサギの画像
  const bunnyUrl = 'https://pixijs.io/pixi-react/img/bunny.png';

  // センサ情報の描画設定
  const infoTextStyle = { fontSize: 12 };

  // 十字線の描画設定
  const Crosshair = useCallback(
    (g: {
      clear: () => void;
      lineStyle: (arg0: number, arg1: number) => void;
      moveTo: (arg0: number, arg1: number) => void;
      lineTo: (arg0: number, arg1: number) => void;
    }) => {
      // 初期化
      g.clear();
      // lineStyle(線の太さ, 色)
      g.lineStyle(1, 0xff0000);
      // 横線
      g.moveTo(-16, 0);
      g.lineTo(16, 0);
      // 縦線
      g.moveTo(0, -16);
      g.lineTo(0, 16);
    },
    [],
  );

  // 円の描画設定
  const Circle = useCallback((g) => {
    g.clear();
    g.lineStyle(1, 0xff0000);
    // 横線
    g.moveTo(-40, 0);
    g.lineTo(40, 0);
    // 縦線
    g.moveTo(0, -40);
    g.lineTo(0, 40);
    // 円の描画
    g.drawCircle(0, 0, 32);
    g.endFill();
  }, []);

  return (
    <div>
      <button
        type="button"
        className="btn"
        onClick={requestDeviceMotionPermission}
      >
        Request permission (for iOS)
      </button>

      <hr />

      {/* 取得した情報のリストアップ */}
      <ul>
        <li>alpha: {alpha}</li>
        <li>beta: {beta}</li>
        <li>gamma: {gamma}</li>
      </ul>

      <hr />

      {/* ReactPixi で描画 (x, y 確認用) */}
      <Stage width={240} height={240} options={{ background: 0x1099bb }}>
        {/* メインのコンテナ */}
        <Container anchor={0.5} position={[120, 120]}>
          {/* <Text text="Hello World!" anchor={0.5} /> */}
          {/* ウサギ */}
          <Sprite
            image={bunnyUrl}
            anchor={0.5}
            x={gamma ?? undefined}
            y={beta ?? undefined}
          />
          {/* 十字線 */}
          <Graphics draw={Crosshair} />
        </Container>

        {/* 傾き情報のコンテナ */}
        <Container position={[5, 5]}>
          <Text
            text={`x (gamma): ${gamma}`}
            style={new TextStyle(infoTextStyle)}
          />
          <Text
            text={`y (beta): ${beta}`}
            y={15}
            style={new TextStyle(infoTextStyle)}
          />
        </Container>
      </Stage>

      <hr />

      {/* ReactPixi で描画 (rotation 確認用) */}
      <Stage width={240} height={240} options={{ background: 0x1099bb }}>
        {/* メインのコンテナ */}
        <Container anchor={0.5} position={[120, 120]}>
          {/* <Text text="Hello World!" anchor={0.5} /> */}
          {/* ウサギ */}
          <Sprite
            image={bunnyUrl}
            anchor={0.5}
            rotation={(alpha * Math.PI) / 180}
          />
          {/* 円 */}
          <Graphics draw={Circle} />
        </Container>

        {/* 傾き情報のコンテナ */}
        <Container position={[5, 5]}>
          <Text
            text={`rotation ((alpha * π) / 180):\n${alpha}`}
            style={new TextStyle(infoTextStyle)}
          />
        </Container>
      </Stage>

      <hr />
    </div>
  );
};

export { DeviceOrientationSample };
