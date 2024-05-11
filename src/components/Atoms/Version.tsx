interface VersionProps {
  version: string;
  onDate: string;
}

export default function Version({ version, onDate }: VersionProps) {
  return (
    <div className="join my-4">
      <div className="badge join-item badge-neutral">v{version}</div>
      <div className="badge join-item badge-ghost">on {onDate}</div>
    </div>
  );
}
