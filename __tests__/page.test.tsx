import { act, fireEvent, render, screen } from "@testing-library/react";
import Home from "@/app/page";
import { beforeEach, describe, expect, test } from "vitest";

describe("Home", () => {
  beforeEach(() => {
    render(<Home />);
  });

  test("has light theme by default", () => {
    const bodyDiv = screen.getByTestId("body-container");
    expect(bodyDiv.getAttribute("data-theme")).toBe("Light");
  });

  test("switches to dark theme when clicked", async () => {
    const bodyDiv = screen.getByTestId("body-container");
    const button = screen.getByTestId("change-theme-btn");

    await act(async () => {
      fireEvent.click(button);
      await new Promise((resolve) => setTimeout(resolve, 200));
    });

    expect(bodyDiv.getAttribute("data-theme")).toBe("Dark");
  });
});
