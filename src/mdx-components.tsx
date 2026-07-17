// https://nextjs.org/docs/app/building-your-application/configuring/mdx
import type { MDXComponents } from "mdx/types";
import React from "react";

function MDXAnchor(props: React.ComponentPropsWithoutRef<"a">) {
  const { href, target, rel, ...rest } = props;
  const isExternal =
    typeof href === "string" &&
    (href.startsWith("http://") ||
      href.startsWith("https://") ||
      href.startsWith("//") ||
      href.startsWith("mailto:") ||
      href.startsWith("tel:"));

  if (isExternal) {
    return (
      <a
        href={href}
        target={target ?? "_blank"}
        rel={rel ?? "noopener noreferrer"}
        {...rest}
      />
    );
  }

  return <a href={href} {...rest} />;
}

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    a: MDXAnchor,
    ...components,
  };
}
