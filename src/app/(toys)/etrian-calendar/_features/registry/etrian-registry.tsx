"use client";

import { sampleEtrians } from "@/app/(toys)/etrian-calendar/_common/constants/sample";
import {
  Etrian,
  EtrianDay,
} from "@/app/(toys)/etrian-calendar/_common/types/etrian";
import { BackupDialog } from "@/app/(toys)/etrian-calendar/_features/registry/components/dialog/backup-dialog";
import { ConfirmDialog } from "@/app/(toys)/etrian-calendar/_features/registry/components/dialog/confirm-dialog";
import { MigrationErrorDialog } from "@/app/(toys)/etrian-calendar/_features/registry/components/dialog/migration-error-dialog";
import { EtrianRegistryForm } from "@/app/(toys)/etrian-calendar/_features/registry/components/etrian-registry-form";
import { EtrianRegistryItemList } from "@/app/(toys)/etrian-calendar/_features/registry/components/etrian-registry-list";
import { useEtrianRegistry } from "@/app/(toys)/etrian-calendar/_features/registry/hooks/use-etrian-registry";
import { RegistryFormValues } from "@/app/(toys)/etrian-calendar/_features/registry/schemas/registry-form-schema";
import { Button } from "@/components/ui/button";
import { UserPen } from "lucide-react";
import { useCallback, useEffect, useState } from "react";
import { toast } from "sonner";

export function EtrianRegistry() {
  const {
    storedEtrians,
    storedEtrianRegistry,
    isLoaded,
    migrationError,
    addEtrian,
    updateEtrian,
    updateEtrians,
    deleteEtrianById,
    resetEtrians,
    clearMigrationError,
  } = useEtrianRegistry();

  const [isEditing, setIsEditing] = useState(false);

  const handleCreate = useCallback(
    (values: RegistryFormValues) => {
      const trimmedName = values.name.trim();
      if (!trimmedName) {
        return;
      }

      const normalizedAffiliations = (values.affiliations ?? "")
        .split(",")
        .map((value) => value.trim())
        .filter((value) => value.length > 0);

      const newEtrian: Etrian = {
        id: crypto.randomUUID(),
        name: trimmedName,
        order: 0,
        affiliations: normalizedAffiliations,
        dateOfBirth:
          values.dateOfBirth &&
          values.dateOfBirth.month &&
          values.dateOfBirth.month !== "未設定"
            ? {
                month: values.dateOfBirth.month,
                day: Number(values.dateOfBirth.day) as EtrianDay,
              }
            : undefined,
        memo: values.memo?.trim() || undefined,
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
    setIsEditing(false);
    toast.success("登録状況をリセットしました");
  }, [resetEtrians]);

  const handleMigrationErrorConfirm = useCallback(() => {
    resetEtrians();
    localStorage.removeItem("etrianRegistryInitialized");
    clearMigrationError();
    toast.success("登録状況をリセットしました");
  }, [resetEtrians, clearMigrationError]);

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
      toast.success("並び順を更新しました");
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
    }
  }, [isLoaded, storedEtrians, addEtrian]);

  return (
    <div className="flex flex-col gap-4">
      <MigrationErrorDialog
        open={migrationError.hasError}
        originalData={migrationError.originalData}
        onConfirm={handleMigrationErrorConfirm}
      />

      <div className="not-prose flex w-full flex-col gap-6">
        <EtrianRegistryForm onSubmit={handleCreate} isEditing={isEditing} />

        <EtrianRegistryItemList
          etrians={storedEtrians}
          isLoaded={isLoaded}
          isEditing={isEditing}
          onDelete={handleDelete}
          onUpdate={handleUpdate}
          onReorder={handleReorder}
        />

        <div className="sticky bottom-0 z-50 flex justify-between gap-2 border-t bg-background/70 py-4">
          <div className="flex gap-2">
            {isEditing && (
              <>
                <ConfirmDialog
                  title="登録状況のリセット"
                  description={
                    <>
                      登録状況を初期状態に戻します。
                      <br />
                      この操作は元に戻せません！
                    </>
                  }
                  confirmButtonLabel="リセット"
                  confirmButtonVariant="destructive"
                  onConfirm={handleReset}
                  className="w-fit"
                >
                  <Button variant="destructive">リセット</Button>
                </ConfirmDialog>
                <BackupDialog
                  storedEtrianRegistry={storedEtrianRegistry}
                  className="w-fit"
                >
                  <Button variant="secondary">バックアップ</Button>
                </BackupDialog>
              </>
            )}
          </div>

          <Button
            variant={isEditing ? "default" : "secondary"}
            onClick={() => setIsEditing((prev) => !prev)}
          >
            <UserPen />
            {isEditing ? "完了" : "編集"}
          </Button>
        </div>
      </div>
    </div>
  );
}
