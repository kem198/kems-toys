// iOS 13 でユーザーに "動作と方向" へのアクセス許可を求める関数
function requestDeviceMotionPermission() {
  // iOS Safari でのみ存在する関数のため定義されているかチェックする
  if (DeviceMotionEvent.requestPermission) {
    DeviceMotionEvent.requestPermission();
  } else {
    alert('DeviceMotionEvent.requestPermission is not found');
  }
}

export { requestDeviceMotionPermission };
