import Page from "@/app/(pages)/hello-world/vitest/page";
import { render, screen } from "@testing-library/react";
import { expect, test } from "vitest";

test("Page", () => {
  render(<Page />);

  expect(
    screen.getByRole("heading", { level: 1, name: "Vitest" }),
  ).toBeDefined();

  expect(
    screen.getByRole("heading", { level: 2, name: "Reference" }),
  ).toBeDefined();
});
