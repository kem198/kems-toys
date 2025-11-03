"use client";

import { sampleEtrians } from "@/app/(toys)/etrian-calendar/_common/constants/sample";
import { Etrian } from "@/app/(toys)/etrian-calendar/_common/types/etrian";
import { BackupDialog } from "@/app/(toys)/etrian-calendar/_features/registry/components/dialog/backup-dialog";
import { ConfirmDialog } from "@/app/(toys)/etrian-calendar/_features/registry/components/dialog/confirm-dialog";
import { EtrianRegistryForm } from "@/app/(toys)/etrian-calendar/_features/registry/components/etrian-registry-form";
import { EtrianRegistryItemList } from "@/app/(toys)/etrian-calendar/_features/registry/components/etrian-registry-list";
import { useEtrianRegistry } from "@/app/(toys)/etrian-calendar/_features/registry/hooks/use-etrian-registry";
import { RegistryFormValues } from "@/app/(toys)/etrian-calendar/_features/registry/schemas/registry-form-schema";
import { Button } from "@/components/ui/button";
import { useCallback, useEffect } from "react";
import { toast } from "sonner";

export function EtrianRegistry() {
  const {
    storedEtrians,
    isLoaded,
    addEtrian,
    updateEtrian,
    updateEtrians,
    deleteEtrianById,
    resetEtrians,
  } = useEtrianRegistry();

  const handleCreate = useCallback(
    (values: RegistryFormValues) => {
      const trimmedName = values.name.trim();
      if (!trimmedName) {
        return;
      }

      const newEtrian: Etrian = {
        id: crypto.randomUUID(),
        name: trimmedName,
        order: 0,
        dateOfBirth: {},
        affiliations: [],
      };

      addEtrian(newEtrian);

      toast.success("冒険者を登録しました！", {
        description: `冒険者: ${trimmedName}`,
      });
    },
    [addEtrian],
  );

  const handleDelete = useCallback(
    (target: Etrian) => {
      deleteEtrianById(target.id);

      toast.success("冒険者を削除しました", {
        description: `冒険者: ${target.name}`,
      });
    },
    [deleteEtrianById],
  );

  const handleUpdate = useCallback(
    (updated: Etrian) => {
      updateEtrian(updated);

      toast.success("冒険者の登録情報を更新しました！", {
        description: `冒険者: ${updated.name}`,
      });
    },
    [updateEtrian],
  );

  const handleReset = useCallback(() => {
    resetEtrians();
    localStorage.removeItem("etrianRegistryInitialized");
    toast.success("登録状況をリセットしました");
  }, [resetEtrians]);

  function reorderEtrians(
    etrians: Etrian[],
    startIndex: number,
    endIndex: number,
  ): Etrian[] {
    const newEtrians = [...etrians];
    const [removed] = newEtrians.splice(startIndex, 1);
    newEtrians.splice(endIndex, 0, removed);
    return newEtrians.map((t, i) => ({ ...t, order: i }));
  }

  const handleReorder = useCallback(
    (startIndex: number, endIndex: number) => {
      if (!isLoaded) return;
      const reordered = reorderEtrians(storedEtrians, startIndex, endIndex);
      updateEtrians(reordered);
      toast.success("冒険者の並び順を更新しました");
    },
    [isLoaded, storedEtrians, updateEtrians],
  );

  // サンプルデータ投入
  useEffect(() => {
    const hasInitialized = localStorage.getItem("etrianRegistryInitialized");

    if (!hasInitialized && isLoaded && storedEtrians.length === 0) {
      const sortedSamples = [...sampleEtrians]
        .sort((a, b) => a.order - b.order)
        .reverse();
      sortedSamples.forEach(addEtrian);

      // リセットしない限りサンプルデータが投入されないようにする
      localStorage.setItem("etrianRegistryInitialized", "true");

      toast.message("初期状態へリセットしました");
    }
  }, [isLoaded, storedEtrians, addEtrian]);

  return (
    <div className="flex flex-col gap-4">
      <div className="not-prose flex w-full flex-col gap-6">
        <EtrianRegistryForm onSubmit={handleCreate} />

        <EtrianRegistryItemList
          etrians={storedEtrians}
          isLoaded={isLoaded}
          onDelete={handleDelete}
          onUpdate={handleUpdate}
          onReorder={handleReorder}
        />

        <div className="flex justify-end gap-2">
          <ConfirmDialog
            title="登録状況のリセット"
            description="登録状況を初期状態に戻します。この操作は元に戻せません！"
            confirmButtonLabel="リセット"
            confirmButtonVariant="destructive"
            onConfirm={handleReset}
            className="w-fit"
          >
            <Button variant="ghost">リセット</Button>
          </ConfirmDialog>

          <BackupDialog storedEtrians={storedEtrians} className="w-fit">
            <Button variant="ghost">バックアップ</Button>
          </BackupDialog>
        </div>
      </div>
    </div>
  );
}
