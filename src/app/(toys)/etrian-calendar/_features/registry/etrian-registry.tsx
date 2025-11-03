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
import { useCallback } from "react";
import { toast } from "sonner";

export function EtrianRegistry() {
  const {
    storedEtrians,
    isLoaded,
    addEtrian,
    updateEtrian,
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
        orderNum: 0,
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

    toast.success("登録状況をリセットしました");
  }, [resetEtrians]);

  // サンプルデータ投入
  if (!storedEtrians || storedEtrians.length === 0) {
    addEtrian(sampleEtrians[2]);
    addEtrian(sampleEtrians[1]);
    addEtrian(sampleEtrians[0]);
  }

  return (
    <div className="flex flex-col gap-4">
      <div className="not-prose flex w-full flex-col gap-6">
        <EtrianRegistryForm onSubmit={handleCreate} />

        <EtrianRegistryItemList
          etrians={storedEtrians}
          isLoaded={isLoaded}
          onDelete={handleDelete}
          onUpdate={handleUpdate}
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
