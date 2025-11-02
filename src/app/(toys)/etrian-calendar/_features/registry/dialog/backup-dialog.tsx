import { Etrian } from "@/app/(toys)/etrian-calendar/types/etrian";
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
  storedEtrians: Etrian[];
  children: ReactNode;
} & ComponentProps<typeof DialogTrigger>;

export function BackupDialog({
  storedEtrians,
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

        <JsonDisplay data={storedEtrians} />
      </DialogContent>
    </Dialog>
  );
}
