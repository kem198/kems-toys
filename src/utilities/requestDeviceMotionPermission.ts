// iOS でのみ存在する requestPermission メソッドの型を拡張する
interface DeviceOrientationEventiOS extends DeviceOrientationEvent {
  requestPermission?: () => Promise<'granted' | 'denied'>;
}

// iOS 13 でユーザーに "動作と方向" へのアクセス許可を求める関数
function requestDeviceMotionPermission() {
  // DeviceOrientationEvent を拡張した型定義でキャストして requestPermission メソッドを取り出す
  const { requestPermission } =
    DeviceOrientationEvent as unknown as DeviceOrientationEventiOS;

  // iOS Safari でのみ存在する関数のため定義されているかチェックする
  if (requestPermission) {
    requestPermission();
  } else {
    alert('DeviceMotionEvent.requestPermission is not found');
  }
}

export { requestDeviceMotionPermission };
