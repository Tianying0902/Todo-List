import React from "react";
import { screen, render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
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
  expect(screen.getByPlaceholderText("what's next")).toHaveClass("input-box");
});
test("clear input", async () => {
  //Arrange:prepare input value
  //Act:render a React Component to the DOM
  jest.spyOn(window, "alert").mockImplementation(() => {});
  render(<Todo />);
  await userEvent.type(screen.getByRole("textbox"), " ");
  await userEvent.keyboard("{Enter}");
  //Assertion:using query to make assertion
  expect(window.alert).toBeCalled();
});
