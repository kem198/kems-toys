import NextLink from "next/link";
import React from "react";

type NextLinkProps = React.ComponentProps<typeof NextLink>;

export default function Link(props: NextLinkProps) {
  const { href, target, rel, ...rest } = props as any;

  const hrefStr = typeof href === "string" ? href : (href?.toString?.() ?? "");
  const isExternal =
    hrefStr.startsWith("http://") ||
    hrefStr.startsWith("https://") ||
    hrefStr.startsWith("//") ||
    hrefStr.startsWith("mailto:") ||
    hrefStr.startsWith("tel:");

  if (isExternal) {
    return (
      // eslint-disable-next-line jsx-a11y/anchor-has-content
      <a
        href={hrefStr}
        target={target ?? "_blank"}
        rel={rel ?? "noopener noreferrer"}
        {...rest}
      />
    );
  }

  return <NextLink href={href} target={target} {...(rest as any)} />;
}
