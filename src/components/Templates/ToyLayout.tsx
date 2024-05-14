import React from 'react';
import Version from '../Atoms/Version';

interface Props {
  title: string;
  version: string;
  onDate: string;
  ToyComponent: React.ComponentType;
  BodyComponent: React.ComponentType;
  SupplementComponent: React.ComponentType;
}

export default function ToyLayout({
  title,
  version,
  onDate,
  BodyComponent,
  ToyComponent,
  SupplementComponent,
}: Props) {
  return (
    <article>
      <h1>{title}</h1>
      <BodyComponent />
      <ToyComponent />
      <div className="divider" />
      <SupplementComponent />
      <Version version={version} onDate={onDate} />
    </article>
  );
}
