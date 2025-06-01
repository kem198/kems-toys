"use client";

import { DeviceOrientationRequestPermissionButton } from "@/components/atoms/device-orientation-request-permission-button";
import { useDeviceOrientation } from "@/hooks/use-device-orientation";
import { requestDeviceMotionPermission } from "@/utilities/request-device-motion-permission";

const Compass = () => {
  const { alpha } = useDeviceOrientation();

  return (
    <>
      <div
        className="radial-progress m-4 text-center"
        style={{ "--value": 100 - (alpha / 360) * 100 } as React.CSSProperties}
        role="progressbar"
      >
        {Math.trunc(alpha)}
      </div>
      <div>
        <DeviceOrientationRequestPermissionButton
          onClick={requestDeviceMotionPermission}
        />
      </div>
    </>
  );
};

export { Compass };
