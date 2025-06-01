"use client";

import { DeviceOrientationRequestPermissionButton } from "@/components/atoms/device-orientation-request-permission-button";
import { useDeviceOrientation } from "@/hooks/use-device-orientation";
import { requestDeviceMotionPermission } from "@/utilities/request-device-motion-permission";

const Compass = () => {
  const { alpha } = useDeviceOrientation();

  const getDirection = (a: number) => {
    if (a >= 337.5 || a < 22.5) return "N";
    if (a >= 22.5 && a < 67.5) return "NE";
    if (a >= 67.5 && a < 112.5) return "E";
    if (a >= 112.5 && a < 157.5) return "SE";
    if (a >= 157.5 && a < 202.5) return "S";
    if (a >= 202.5 && a < 247.5) return "SW";
    if (a >= 247.5 && a < 292.5) return "W";
    if (a >= 292.5 && a < 337.5) return "NW";
    return "";
  };

  return (
    <>
      <div
        className="radial-progress m-4 text-center"
        style={{ "--value": 100 - (alpha / 360) * 100 } as React.CSSProperties}
        role="progressbar"
      >
        {getDirection(alpha)}
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
