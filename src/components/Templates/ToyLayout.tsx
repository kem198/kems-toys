import { Version } from '@/components/Atoms/Version';
import React from 'react';

interface Props {
  title: string;
  version: string;
  onDate: string;
  ToyComponent: React.ComponentType;
  BodyComponent: React.ComponentType;
  SupplementComponent: React.ComponentType;
}

const ToyLayout = ({
  title,
  version,
  onDate,
  BodyComponent,
  ToyComponent,
  SupplementComponent,
}: Props) => (
  <article>
    <h1>{title}</h1>
    <BodyComponent />
    <ToyComponent />
    <div className="divider" />
    <SupplementComponent />
    <Version version={version} onDate={onDate} />
  </article>
);

export { ToyLayout };
