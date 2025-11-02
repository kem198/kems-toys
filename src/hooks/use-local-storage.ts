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
    () => {
      try {
        return localStorage.getItem(storageKey) ?? "";
      } catch (e) {
        return "";
      }
    },

    () => "",
  );

  return storageValue;
};
