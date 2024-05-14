interface VersionProps {
  version: string;
  onDate: string;
}

const Version = ({ version, onDate }: VersionProps) => (
  <div className="join">
    <div className="badge join-item badge-neutral">v{version}</div>
    <div className="badge join-item badge-ghost">on {onDate}</div>
  </div>
);

export { Version };
