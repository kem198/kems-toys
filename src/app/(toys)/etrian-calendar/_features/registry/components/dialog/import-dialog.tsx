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
import { ScrollArea } from "@/components/ui/scroll-area";
import { Textarea } from "@/components/ui/textarea";

type ImportDialogProps = {
  onImport: (data: string) => boolean;
  children: React.ReactNode;
};

export function ImportDialog({ onImport, children }: ImportDialogProps) {
  const [value, setValue] = useState("");
  const [error, setError] = useState(false);
  const [open, setOpen] = useState(false);

  const handleImport = () => {
    const success = onImport(value);
    setError(!success);
    if (success) {
      // close dialog on successful import
      setOpen(false);
      setValue("");
    }
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>{children}</DialogTrigger>

      <DialogContent>
        <DialogHeader>
          <DialogTitle>インポート</DialogTitle>
        </DialogHeader>

        <ScrollArea className="max-h-[60vh] rounded-md border border-border">
          <Textarea
            value={value}
            onChange={(event) => {
              setValue(event.target.value);
              setError(false);
            }}
            className="min-h-[160px] resize-none bg-transparent"
          />
        </ScrollArea>
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
