import React from "react";
import { screen, render } from "@testing-library/react";
import Todo from "./Todo";
test("render clear completed", () => {
  //Arrange:prepare input value
  //Act:render a React Component to the DOM
  render(<Todo />);
  //Assertion:using query to make assertion
  expect(screen.getByText("clear completed")).toBeInTheDocument();
});
test("render filter part", () => {
  //Arrange:prepare input value
  //Act:render a React Component to the DOM
  render(<Todo />);
  //Assertion:using query to make assertion
  expect(screen.getByText("All")).toBeInTheDocument();
  expect(screen.getByText("Active")).toBeInTheDocument();
  expect(screen.getByText("Completed")).toBeInTheDocument();
});
test("render input", () => {
  //Arrange:prepare input value
  //Act:render a React Component to the DOM
  render(<Todo />);
  //Assertion:using query to make assertion
  expect(screen.getByText("what's next")).toBeInTheDocument();
});
