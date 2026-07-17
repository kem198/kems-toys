import { useMDXComponents } from "@/mdx-components";
import { render, screen } from "@testing-library/react";
import React from "react";
import { describe, expect, it } from "vitest";

describe("MDXAnchor via useMDXComponents", () => {
  it("adds target and rel for external links", () => {
    const components = useMDXComponents({});
    const MDXAnchor =
      (components.a as React.ComponentType<any>) ||
      ((p: any) => <a {...p}>{p.children}</a>);
    render(<MDXAnchor href="https://example.com">外部</MDXAnchor>);
    const a = screen.getByText("外部");
    expect(a.getAttribute("target")).toBe("_blank");
    expect(a.getAttribute("rel")).toContain("noopener");
  });

  it("does not add target for internal links", () => {
    const components = useMDXComponents({});
    const MDXAnchor =
      (components.a as React.ComponentType<any>) ||
      ((p: any) => <a {...p}>{p.children}</a>);
    render(<MDXAnchor href="/internal">内部</MDXAnchor>);
    const a = screen.getByText("内部");
    expect(a.getAttribute("target")).toBeNull();
  });
});
