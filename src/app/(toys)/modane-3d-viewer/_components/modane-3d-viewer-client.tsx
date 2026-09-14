"use client";

import dynamic from "next/dynamic";

const Modane3dViewer = dynamic(
  () => import("./modane-3d-viewer").then((module) => module.Modane3dViewer),
  { ssr: false },
);

export { Modane3dViewer };
