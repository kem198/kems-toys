'use client';

import { useDeviceOrientation } from '@/hooks/useDeviceOrientation';
import { requestDeviceMotionPermission } from '@/utilities/requestDeviceMotionPermission';
import { Container, Sprite, Stage, Text } from '@pixi/react';
import { TextStyle } from 'pixi.js';

const Page = () => {
  const { alpha, beta, gamma } = useDeviceOrientation();
  const bunnyUrl = 'https://pixijs.io/pixi-react/img/bunny.png';
  const infoTextStyle = { fontSize: 12 };

  return (
    <div>
      <button
        type="button"
        className="btn"
        onClick={requestDeviceMotionPermission}
      >
        Request permission (for iOS)
      </button>
      <ul>
        <li>alpha: {alpha}</li>
        <li>beta: {beta}</li>
        <li>gamma: {gamma}</li>
      </ul>
      <Stage width={240} height={240} options={{ background: 0x1099bb }}>
        <Container anchor={0.5} position={[120, 120]}>
          <Text text="Hello World!" anchor={0.5} />
          <Sprite image={bunnyUrl} anchor={0.5} x={gamma} y={beta} />
        </Container>
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
    </div>
  );
};

export default Page;
