import { EtrianRegistry } from "@/app/(toys)/etrian-calendar/_common/types/etrian";
import { JsonDisplay } from "@/components/shared/json-display";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { ComponentProps, ReactNode } from "react";
import { toast } from "sonner";

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
        <Button
          onClick={() => {
            try {
              const json = JSON.stringify(storedEtrianRegistry, null, 2);
              void navigator.clipboard.writeText(json);
              toast.success("バックアップをクリップボードにコピーしました");
            } catch (e) {
              toast.error("コピーに失敗しました");
            }
          }}
        >
          コピー
        </Button>
        <JsonDisplay
          data={storedEtrianRegistry}
          scrollAreaProps={{ className: "max-h-[60vh]" }}
        />

        <DialogFooter></DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
