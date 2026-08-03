"use client";

import { useState } from "react";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Textarea } from "@/components/ui/textarea";

type ImportDialogProps = {
  onImport: (data: string) => boolean;
  children: React.ReactNode;
};

export function ImportDialog({ onImport, children }: ImportDialogProps) {
  const [value, setValue] = useState("");
  const [error, setError] = useState(false);

  const handleImport = () => {
    const success = onImport(value);
    setError(!success);
  };

  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>

      <DialogContent>
        <DialogHeader>
          <DialogTitle>インポート</DialogTitle>
        </DialogHeader>

        <Textarea
          value={value}
          onChange={(event) => {
            setValue(event.target.value);
            setError(false);
          }}
        />
        {error && (
          <p className="text-sm text-destructive">インポートに失敗しました</p>
        )}

        <DialogFooter>
          <Button onClick={handleImport}>インポート</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
