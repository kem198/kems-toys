"use client";

import { useDeviceOrientation } from "@/hooks/use-device-orientation";
import { requestDeviceMotionPermission } from "@/utilities/request-device-motion-permission";
import { Container, Graphics, Sprite, Stage, Text } from "@pixi/react";
import { TextStyle } from "@pixi/text";
import { useCallback } from "react";

const DeviceOrientationSample = () => {
  // カスタムフックからセンサ情報を取得
  const { alpha, beta, gamma } = useDeviceOrientation();

  // もだねの画像
  const bunnyUrl = "/device-orientation-sample/modane.png";

  /**
   * alpha 角をラジアンに変換する計算
   *
   * 変換する際は角度にπ (円周率) を掛けて 180 で割る
   * https://www.dainippon-tosho.co.jp/unit/list/radian.html
   *
   * null の場合は 0 を設定する
   */
  const rad = alpha !== null ? (alpha * Math.PI) / 180 : 0;

  // センサ情報の描画設定
  const infoTextStyle = { fontSize: 10 };

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
  const Circle = useCallback(
    (g: {
      clear: () => void;
      lineStyle: (arg0: number, arg1: number) => void;
      moveTo: (arg0: number, arg1: number) => void;
      lineTo: (arg0: number, arg1: number) => void;
      drawCircle: (arg0: number, arg1: number, arg2: number) => void;
      endFill: () => void;
    }) => {
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
    },
    [],
  );

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
          {/* もだね */}
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
            y={16}
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
          {/* もだね */}
          <Sprite image={bunnyUrl} anchor={0.5} rotation={rad} />
          {/* 円 */}
          <Graphics draw={Circle} />
        </Container>

        {/* 傾き情報のコンテナ */}
        <Container position={[5, 5]}>
          <Text text={`alpha:${alpha}`} style={new TextStyle(infoTextStyle)} />
          <Text
            text={`radian ((alpha * π) / 180):${rad}`}
            y={16}
            style={new TextStyle(infoTextStyle)}
          />
        </Container>
      </Stage>

      <hr />
    </div>
  );
};

export { DeviceOrientationSample };
