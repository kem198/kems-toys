import { useSyncExternalStore } from "react";

const subscribe = (callback: () => void) => {
  window.addEventListener("storage", callback);

  return () => {
    window.removeEventListener("storage", callback);
  };
};

export const useLocalStorage = (storageKey: string) => {
  const storageValue = useSyncExternalStore(
    subscribe,
    () => localStorage.getItem(storageKey),
    () => "",
  );

  return storageValue;
};
