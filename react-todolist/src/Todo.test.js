import React from "react";
import { screen, render } from "@testing-library/react";
import Todo from "./Todo";

test("should has a new task after pressing enter", () => {
  //Arrange: mock input value
  //   const mockValue = "Task 001";
  //Act:press enter to add value into list
  render(<Todo />);
  //Assertion: using query to make assertion
  const inputNode = screen.getByPlaceholderText("whats's next");
  expect(inputNode).toBeInTheDocument();
});
