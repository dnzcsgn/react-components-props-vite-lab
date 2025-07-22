import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import App from "../App";

test("renders the blog title", () => {
  render(<App />);
  expect(screen.getByText("My React Blog")).toBeInTheDocument();
});

test("renders the about section", () => {
  render(<App />);
  expect(
    screen.getByText("This is a blog about learning React step-by-step."),
  ).toBeInTheDocument();
});

test("renders all article previews", () => {
  render(<App />);
  expect(
    screen.getByText(
      "React lets you build user interfaces in a modular way...",
    ),
  ).toBeInTheDocument();
  expect(
    screen.getByText("A guide to designing clean and reusable components..."),
  ).toBeInTheDocument();
});
