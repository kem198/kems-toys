import { Badge } from "../ui/badge";

interface VersionProps {
  version: string;
  onDate: string;
}

const Version = ({ version, onDate }: VersionProps) => (
  <Badge>
    v{version} | on {onDate}
  </Badge>
);

export { Version };
