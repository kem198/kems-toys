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
          <DialogTitle>冒険者情報のエクスポート</DialogTitle>
          <DialogDescription>
            ブラウザ上に保存されている冒険者情報を表示します。
            <br />
            コピーして復元や端末間の移行にご利用ください。
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
