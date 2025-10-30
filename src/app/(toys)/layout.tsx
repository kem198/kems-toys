import { Breadcrumbs } from "@/components/atoms/breadcrumbs";

function ToysLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex flex-col gap-2">
      <Breadcrumbs />
      <article className="prose max-w-2xl prose-blockquote:font-normal">
        {children}
      </article>
    </div>
  );
}

export default ToysLayout;
