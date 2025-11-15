import { EtrianRegistry } from "@/app/(toys)/etrian-calendar/_common/types/etrian";
import { JsonDisplay } from "@/components/shared/json-display";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { ComponentProps, ReactNode } from "react";

type BackupDialogProps = {
  storedEtrianRegistry: EtrianRegistry;
  children: ReactNode;
} & ComponentProps<typeof DialogTrigger>;

export function BackupDialog({
  storedEtrianRegistry,
  children,
  ...props
}: BackupDialogProps) {
  return (
    <Dialog>
      <DialogTrigger asChild {...props}>
        {children}
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>登録状況のバックアップ</DialogTitle>
          <DialogDescription>
            ブラウザ (localStorage) 上に保存されている情報を表示します。
            <br />
            コピーしておくと復元しやすい……かも。
          </DialogDescription>
        </DialogHeader>

        <JsonDisplay
          data={storedEtrianRegistry}
          scrollAreaProps={{ className: "max-h-[60vh]" }}
        />
      </DialogContent>
    </Dialog>
  );
}
