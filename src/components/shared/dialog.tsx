import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import * as React from "react";

type DeleteDialogTriggerProps = {
  title: React.ReactNode;
  description?: React.ReactNode;
  content?: React.ReactNode;
  children: React.ReactNode;
  triggerProps?: React.ComponentProps<typeof DialogTrigger>;
};

export function DeleteDialogTrigger({
  title,
  description,
  content,
  children,
  triggerProps,
}: DeleteDialogTriggerProps) {
  return (
    <Dialog>
      <DialogTrigger {...triggerProps}>{children}</DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
          {description && <DialogDescription>{description}</DialogDescription>}
        </DialogHeader>

        {content}

        <DialogFooter>
          <DialogClose asChild>
            <Button type="button" variant="outline">
              キャンセル
            </Button>
          </DialogClose>
          <Button type="submit" variant="destructive">
            削除
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
