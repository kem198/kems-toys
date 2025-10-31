import { Button } from "@/components/ui/button";
import React from "react";

type ResetButtonProps = {
  onClick: () => void;
} & React.ComponentProps<typeof Button>;

function ResetButton({ onClick, ...rest }: ResetButtonProps) {
  return (
    <Button variant="ghost" onClick={onClick} {...rest}>
      リセット
    </Button>
  );
}

export { ResetButton };
