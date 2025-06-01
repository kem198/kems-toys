"use client";

import { useDeviceOrientation } from "@/hooks/use-device-orientation";

const Compass = () => {
  const { alpha } = useDeviceOrientation();

  return (
    <div
      className="radial-progress m-4 text-center"
      style={{ "--value": 100 - (alpha / 360) * 100 }}
      role="progressbar"
    >
      {Math.trunc(alpha)}
    </div>
  );
};

export { Compass };
