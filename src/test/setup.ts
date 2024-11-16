import "@testing-library/jest-dom";
import { vi } from "vitest";

vi.mock("next/font/google", () => ({
  Fjalla_One: () => ({
    style: {
      fontFamily: "mocked",
    },
  }),
}));
