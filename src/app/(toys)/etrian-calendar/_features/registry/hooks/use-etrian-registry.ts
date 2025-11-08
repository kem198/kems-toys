import { useCallback, useEffect, useState } from "react";

import { Etrian } from "@/app/(toys)/etrian-calendar/_common/types/etrian";
import { migrateEtriansV1toV2 } from "@/app/(toys)/etrian-calendar/_features/registry/utils/migration-utils";

export const ETRIAN_REGISTRY_STORAGE_KEY = "etrianRegistry";

type UseEtrianRegistryOptions = {
  storageKey?: string;
};

type UseEtrianRegistryReturn = {
  storedEtrians: Etrian[];
  isLoaded: boolean;
  addEtrian: (etrian: Etrian) => void;
  updateEtrian: (etrian: Etrian) => void;
  updateEtrians: (updatedEtrians: Etrian[]) => void;
  deleteEtrianById: (id: string) => void;
  resetEtrians: () => void;
};

export function useEtrianRegistry(
  options: UseEtrianRegistryOptions = {},
): UseEtrianRegistryReturn {
  const { storageKey = ETRIAN_REGISTRY_STORAGE_KEY } = options;

  const [storedEtrians, setStoredEtrians] = useState<Etrian[]>([]);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }

    const data = window.localStorage.getItem(storageKey);

    try {
      // TODO: 作成中
      if (data) {
        const migratedEtrians = migrateEtriansV1toV2(JSON.parse(data));
        setStoredEtrians(migratedEtrians as Etrian[]);
      } else {
        setStoredEtrians([]);
      }
    } catch {
      // TODO: 読み取りに失敗したら「初期化します」みたいなモーダル表示
      setStoredEtrians([]);
    } finally {
      setIsLoaded(true);
    }
  }, [storageKey]);

  useEffect(() => {
    if (!isLoaded || typeof window === "undefined") {
      return;
    }

    window.localStorage.setItem(storageKey, JSON.stringify(storedEtrians));
  }, [storedEtrians, isLoaded, storageKey]);

  const addEtrian = useCallback((etrian: Etrian) => {
    setStoredEtrians((prev) => [etrian, ...prev]);
  }, []);

  const updateEtrian = useCallback((updated: Etrian) => {
    setStoredEtrians((prev) =>
      prev.map((current) => (current.id === updated.id ? updated : current)),
    );
  }, []);

  const updateEtrians = (updatedEtrians: Etrian[]) =>
    setStoredEtrians(updatedEtrians);

  const deleteEtrianById = useCallback((id: string) => {
    setStoredEtrians((prev) => prev.filter((etrian) => etrian.id !== id));
  }, []);

  const resetEtrians = useCallback(() => {
    setStoredEtrians([]);
  }, []);

  return {
    storedEtrians,
    isLoaded,
    addEtrian,
    updateEtrian,
    updateEtrians,
    deleteEtrianById,
    resetEtrians,
  };
}
