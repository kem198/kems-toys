import Breadcrumbs from '@/components/Atoms/Breadcrumbs';

export default function ToysLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <article>
      <Breadcrumbs />
      {children}
    </article>
  );
}
