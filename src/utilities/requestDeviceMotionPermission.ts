// iOS でのみ存在する requestPermission メソッドの型を拡張する
interface DeviceOrientationEventiOS extends DeviceOrientationEvent {
  requestPermission?: () => Promise<'granted' | 'denied'>;
}

// iOS 13 でユーザーに "動作と方向" へのアクセス許可を求める関数
async function requestDeviceMotionPermission() {
  // DeviceOrientationEventiOS を介して直接 requestPermission メソッドを取り出す
  const { requestPermission } =
    DeviceOrientationEvent as unknown as DeviceOrientationEventiOS;

  try {
    if (requestPermission) {
      await requestPermission(); // iOS Safari でのみ存在する関数があれば実行
    } else {
      throw new Error('DeviceMotionEvent.requestPermission is not found');
    }
  } catch (error) {
    alert(error.message); // エラーメッセージをアラートで表示
  }
}

export { requestDeviceMotionPermission };
