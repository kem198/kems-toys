import { Breadcrumbs } from "@/components/Atoms/Breadcrumbs";

const ToysLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => (
  <div>
    <Breadcrumbs />
    <article className="prose max-w-2xl prose-blockquote:font-normal">
      {children}
    </article>
  </div>
);

export default ToysLayout;
