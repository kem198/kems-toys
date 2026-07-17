import Link from "@/components/shared/Link";
import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

describe("Link component", () => {
  it("renders external links with target _blank and noopener noreferrer", () => {
    render(<Link href="https://example.com">External</Link>);
    const a = screen.getByText("External");
    expect(a.getAttribute("target")).toBe("_blank");
    expect(a.getAttribute("rel")).toContain("noopener");
  });

  it("renders mailto links with target _blank and noopener noreferrer", () => {
    render(<Link href="mailto:foo@example.com">Mail</Link>);
    const a = screen.getByText("Mail");
    expect(a.getAttribute("target")).toBe("_blank");
    expect(a.getAttribute("rel")).toContain("noopener");
  });

  it("renders hash anchors as plain anchors without target", () => {
    render(<Link href="#section">Hash</Link>);
    const a = screen.getByText("Hash");
    expect(a.getAttribute("target")).toBeNull();
    expect(a.getAttribute("href")).toBe("#section");
  });

  it("renders download links as anchors with download attribute", () => {
    render(
      <Link href="/file.pdf" download>
        Download
      </Link>,
    );
    const a = screen.getByText("Download");
    expect(a.hasAttribute("download")).toBe(true);
    expect(a.getAttribute("href")).toBe("/file.pdf");
  });
});
