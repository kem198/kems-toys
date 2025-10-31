interface VersionProps {
  version: string;
  onDate: string;
}

function Version({ version, onDate }: VersionProps) {
  return (
    <div className="flex text-sm">
      <span className="rounded-l-full bg-zinc-700 px-2 text-white">
        v{version}
      </span>
      <span className="rounded-r-full bg-zinc-200 px-2 text-zinc-700">
        on {onDate}
      </span>
    </div>
  );
}

export { Version };
