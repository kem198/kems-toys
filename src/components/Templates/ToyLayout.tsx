import React from 'react';
import Version from '../Atoms/Version';

interface Props {
  ToyComponent: React.ComponentType;
  BodyComponent: React.ComponentType;
  SupplementComponent: React.ComponentType;
  version: string;
  onDate: string;
}

export default function ToyLayout({
  BodyComponent,
  ToyComponent,
  SupplementComponent,
  version,
  onDate,
}: Props) {
  return (
    <article>
      <BodyComponent />
      <ToyComponent />
      <div className="divider" />
      <SupplementComponent />
      <Version version={version} onDate={onDate} />
    </article>
  );
}
