import { render, screen } from "@testing-library/react";
import Home from "@/app/page";
import { describe, it, expect } from "vitest";

describe("Home", () => {
  it("renders DevWrapper with hello world", () => {
    render(<Home />);
    expect(screen.getByText("Hi! Hello World")).toBeInTheDocument();
  });
});
