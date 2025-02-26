import { FizzBuzzCalc } from "@/app/(toys)/fizz-buzz/_components/fizz-buzz-calc";
import { fireEvent, render, screen } from "@testing-library/react";
import { describe, it } from "vitest";

describe("FizzBuzzCalc", () => {
  it.todo("should display FizzBuzz result correctly", () => {
    render(<FizzBuzzCalc />);

    const input = screen.getByLabelText("n =") as HTMLInputElement;

    fireEvent.change(input, { target: { value: "3" } });
  });
});
