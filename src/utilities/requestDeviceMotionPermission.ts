// iOS でのみ存在する requestPermission メソッドの型を拡張する
interface DeviceOrientationEventIOS extends DeviceOrientationEvent {
  requestPermission?: () => Promise<'granted' | 'denied'>;
}

// iOS 13 でユーザーに "動作と方向" へのアクセス許可を求める関数
async function requestDeviceMotionPermission() {
  // DeviceOrientationEventIOS を介して直接 requestPermission メソッドを取り出す
  const { requestPermission } =
    DeviceOrientationEvent as unknown as DeviceOrientationEventIOS;

  if (requestPermission) {
    // iOS Safari でのみ存在する関数があれば実行する
    await requestPermission();
  } else {
    alert('DeviceMotionEvent.requestPermission is not found');
  }
}

export { requestDeviceMotionPermission };
