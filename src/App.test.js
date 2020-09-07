import React from "react";
import { render } from "@testing-library/react";
import Title from "./components/Title";

describe("App", () => {
  test("renders title", () => {
    render(<Title />);
  });
});
