import React from "react";
import { render, screen } from "@testing-library/react";
import ListDetail from "./ListDetail";

describe("ListDetail Component", () => {
  test("renders list items", () => {
    render(<ListDetail />);
    expect(screen.getByAltText("starIcon")).toBeInTheDocument();
  });
});
