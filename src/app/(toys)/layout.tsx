import { Breadcrumbs } from "@/components/atoms/breadcrumbs";

const ToysLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => (
  <div className="flex flex-col gap-2">
    <Breadcrumbs />
    <article className="prose max-w-2xl prose-blockquote:font-normal">
      {children}
    </article>
  </div>
);

export default ToysLayout;
