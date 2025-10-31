import { Breadcrumbs } from "@/components/shared/breadcrumbs";

function ToysLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex flex-col gap-2">
      <Breadcrumbs />
      {/* TODO: 表示崩れするので prose-pre:whitespace-pre-wrap を指定している */}
      <article className="prose max-w-2xl prose-blockquote:font-normal prose-pre:whitespace-pre-wrap">
        {children}
      </article>
    </div>
  );
}

export default ToysLayout;
