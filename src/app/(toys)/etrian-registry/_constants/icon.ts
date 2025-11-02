import { House } from "lucide-react";

export const ICONS = {
  house: House,
} as const;

export type IconKey = keyof typeof ICONS;

export default ICONS;
