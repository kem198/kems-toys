"use client";

import dynamic from "next/dynamic";

const DeviceOrientationSample = dynamic(
  () =>
    import("./device-orientation-sample").then(
      (module) => module.DeviceOrientationSample,
    ),
  { ssr: false },
);

export { DeviceOrientationSample };
