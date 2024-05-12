import Breadcrumbs from '@/components/Atoms/Breadcrumbs';

export default function ToysLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <Breadcrumbs />
      <article className="prose max-w-2xl">{children}</article>
    </div>
  );
}
