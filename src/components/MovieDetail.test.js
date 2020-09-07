import React from "react";
import { render, screen } from "@testing-library/react";
import MovieDetail from "./MovieDetail";

describe("MovieDetail Component", () => {
  test("renders movie items", () => {
    render(<MovieDetail />);
    expect(screen.getByAltText("filmIcon")).toBeInTheDocument();
  });
});
