import React from "react";

interface DeviceOrientationRequestPermissionButtonProps {
  onClick: () => void;
}

const DeviceOrientationRequestPermissionButton: React.FC<
  DeviceOrientationRequestPermissionButtonProps
> = ({ onClick }) => (
  <button type="button" className="btn" onClick={onClick}>
    Request permission (for iOS)
  </button>
);

export { DeviceOrientationRequestPermissionButton };
