import NextLink from "next/link";
import React from "react";

type Props = React.ComponentProps<typeof NextLink> &
  React.AnchorHTMLAttributes<HTMLAnchorElement> & { href?: any };

const Link = React.forwardRef<HTMLAnchorElement, Props>((props, ref) => {
  const { href, children, target, rel, ...rest } = props as any;

  const hrefStr = typeof href === "string" ? href : (href?.toString?.() ?? "");

  if (!hrefStr) {
    return (
      // no href — render as plain anchor
      // eslint-disable-next-line jsx-a11y/anchor-has-content
      <a ref={ref} {...(rest as any)}>
        {children}
      </a>
    );
  }
  // For React devtools and eslint 'display-name' rule
  Link.displayName = "Link";

  const isHash = hrefStr.startsWith("#");
  const isDownload = Boolean((rest as any).download);
  const isMailOrTel =
    hrefStr.startsWith("mailto:") || hrefStr.startsWith("tel:");
  const isExternal =
    hrefStr.startsWith("http://") ||
    hrefStr.startsWith("https://") ||
    hrefStr.startsWith("//");

  if (isHash || isDownload) {
    return (
      <a href={hrefStr} ref={ref} {...(rest as any)}>
        {children}
      </a>
    );
  }

  if (isExternal || isMailOrTel) {
    return (
      <a
        href={hrefStr}
        ref={ref}
        target={target ?? "_blank"}
        rel={rel ?? "noopener noreferrer"}
        {...(rest as any)}
      >
        {children}
      </a>
    );
  }

  // internal route — use NextLink to preserve SPA navigation and prefetch
  return (
    <NextLink href={href} {...(rest as any)}>
      {children}
    </NextLink>
  );
});

export default Link;
