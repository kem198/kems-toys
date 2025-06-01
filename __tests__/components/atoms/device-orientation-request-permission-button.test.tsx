import { DeviceOrientationRequestPermissionButton } from "@/components/atoms/device-orientation-request-permission-button";
import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";

describe("DeviceOrientationRequestPermissionButton", () => {
  it("renders button and calls onClick when clicked", () => {
    const handleClick = vi.fn();
    render(<DeviceOrientationRequestPermissionButton onClick={handleClick} />);
    const button = screen.getByRole("button", { name: /request permission/i });
    expect(button).not.toBeNull();
    fireEvent.click(button);
    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
