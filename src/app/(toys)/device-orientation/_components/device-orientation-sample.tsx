"use client";

import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { useDeviceOrientation } from "@/hooks/use-device-orientation";
import { requestDeviceMotionPermission } from "@/utilities/request-device-motion-permission";
import { Application, extend } from "@pixi/react";
import { Container, Graphics, Sprite, Text, Texture } from "pixi.js";
import { MoveHorizontal, MoveVertical, RotateCcw } from "lucide-react";
import { useCallback } from "react";

extend({ Container, Graphics, Sprite, Text });

function DeviceOrientationSample() {
  // カスタムフックからセンサ情報を取得
  const { alpha, beta, gamma } = useDeviceOrientation();

  // もだねの画像
  const bunnyTexture = Texture.from("/device-orientation-sample/modane.png");

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
  const Crosshair = useCallback((g: Graphics) => {
    g.clear()
      .setStrokeStyle({ width: 1, color: 0xff0000 })
      .moveTo(-16, 0)
      .lineTo(16, 0)
      .moveTo(0, -16)
      .lineTo(0, 16)
      .stroke();
  }, []);

  // 円の描画設定
  const Circle = useCallback((g: Graphics) => {
    g.clear()
      .setStrokeStyle({ width: 1, color: 0xff0000 })
      .moveTo(-40, 0)
      .lineTo(40, 0)
      .moveTo(0, -40)
      .lineTo(0, 40)
      .circle(0, 0, 32)
      .stroke();
  }, []);

  return (
    <div>
      <Button
        variant="secondary"
        size="lg"
        onClick={requestDeviceMotionPermission}
      >
        Request permission (for iOS)
      </Button>

      <hr />

      {/* 取得した情報のリストアップ */}
      <div className="flex flex-col gap-4">
        <div>
          <Progress value={alpha ? (alpha / 360) * 100 : 0} />
          <div className="flex items-center gap-2">
            <RotateCcw strokeWidth={1} />
            alpha: {alpha ?? "端末方向イベントを読み取れませんでした"}
          </div>
        </div>
        <div>
          <Progress value={beta ? ((beta + 180) / 360) * 100 : 0} />
          <div className="flex items-center gap-2">
            <MoveVertical strokeWidth={1} />
            beta: {beta ?? "端末方向イベントを読み取れませんでした"}
          </div>
        </div>
        <div>
          <Progress value={gamma ? ((gamma + 90) / 180) * 100 : 0} />
          <div className="flex items-center gap-2">
            <MoveHorizontal strokeWidth={1} />
            gamma: {gamma ?? "端末方向イベントを読み取れませんでした"}
          </div>
        </div>
      </div>

      <hr />

      {/* ReactPixi の描画サンプル */}
      <div className="flex flex-col gap-8">
        {/* ReactPixi で描画 (x, y 確認用) */}
        <Application width={240} height={240} backgroundColor={0x1099bb}>
          {/* メインのコンテナ */}
          <pixiContainer x={120} y={120}>
            {/* <Text text="Hello World!" anchor={0.5} /> */}
            {/* もだね */}
            <pixiSprite
              texture={bunnyTexture}
              anchor={0.5}
              x={gamma ?? 0}
              y={beta ?? 0}
            />
            {/* 十字線 */}
            <pixiGraphics draw={Crosshair} />
          </pixiContainer>

          {/* 傾き情報のコンテナ */}
          <pixiContainer x={5} y={5}>
            <pixiText
              text={`x (gamma): ${gamma}`}
              style={infoTextStyle}
            />
            <pixiText
              text={`y (beta): ${beta}`}
              y={16}
              style={infoTextStyle}
            />
          </pixiContainer>
        </Application>

        {/* ReactPixi で描画 (rotation 確認用) */}
        <Application width={240} height={240} backgroundColor={0x1099bb}>
          {/* メインのコンテナ */}
          <pixiContainer x={120} y={120}>
            {/* <Text text="Hello World!" anchor={0.5} /> */}
            {/* もだね */}
            <pixiSprite texture={bunnyTexture} anchor={0.5} rotation={rad} />
            {/* 円 */}
            <pixiGraphics draw={Circle} />
          </pixiContainer>

          {/* 傾き情報のコンテナ */}
          <pixiContainer x={5} y={5}>
            <pixiText
              text={`alpha:${alpha}`}
              style={infoTextStyle}
            />
            <pixiText
              text={`radian ((alpha * π) / 180):${rad}`}
              y={16}
              style={infoTextStyle}
            />
          </pixiContainer>
        </Application>
      </div>
      <hr />
    </div>
  );
}

export { DeviceOrientationSample };
