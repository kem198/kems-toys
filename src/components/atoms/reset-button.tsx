import { Button } from "@/components/ui/button";
import React from "react";

type ResetButtonProps = {
  onClick: () => void;
} & React.ComponentProps<typeof Button>;

const ResetButton = ({ onClick, ...rest }: ResetButtonProps) => (
  <Button variant="ghost" onClick={onClick} {...rest}>
    リセット
  </Button>
);

export { ResetButton };
