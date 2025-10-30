import { Button } from "@/components/ui/button";

interface ResetButtonProps {
  onClick: () => void;
}

const ResetButton = ({ onClick }: ResetButtonProps) => (
  <Button variant="ghost" onClick={onClick}>
    リセット
  </Button>
);

export { ResetButton };
