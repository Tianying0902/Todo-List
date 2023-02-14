import React from "react";
import { screen, render } from "@testing-library/react";
import Header from "../components/Header";
test("render Header", () => {
  //Arrange:prepare input value
  //Act:render a React Component to the DOM
  render(<Header />);
  //Assertion:using query to make assertion
  expect(screen.getByText("todos")).toBeInTheDocument();
});
