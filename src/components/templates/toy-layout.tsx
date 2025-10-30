import { Version } from "@/components/atoms/version";
import React from "react";

interface Props {
  title: string;
  version: string;
  onDate: string;
  ToyComponent: React.ComponentType;
  BodyComponent?: React.ComponentType;
  SupplementComponent?: React.ComponentType;
}

function ToyLayout({
  title,
  version,
  onDate,
  ToyComponent,
  BodyComponent,
  SupplementComponent,
}: Props) {
  return (
    <article>
      <h1>{title}</h1>
      {BodyComponent && <BodyComponent />}
      <ToyComponent />
      <div className="divider" />
      {SupplementComponent && <SupplementComponent />}
      <Version version={version} onDate={onDate} />
    </article>
  );
}

export { ToyLayout };
