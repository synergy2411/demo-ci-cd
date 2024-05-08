import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import DemoOutput from "./DemoOutput";

describe("DemoOutput Component", () => {
  test("renders heading element with 'DemoOutput component loaded' text", () => {
    // Arrange
    render(<DemoOutput />);
    const headingEl = screen.getByText("DemoOutput component loaded");

    // Assert
    expect(headingEl).toBeInTheDocument();
  });

  test("renders paragraph with 'Toggle is False' when button is NOT clicked", () => {
    render(<DemoOutput />);

    // const paragraphEl = screen.queryByText("toggle is false", { exact: false });
    const paragraphEl = screen.queryByText(/toggle is false/i);

    expect(paragraphEl).not.toBeNull();
  });

  test("renders button with 'Toggle' text", () => {
    render(<DemoOutput />);

    const buttonEl = screen.queryByRole("button");

    expect(buttonEl).toBeInTheDocument();
  });

  test("renders 'Toggle is True' when button is clicked", async () => {
    render(<DemoOutput />);
    const buttonEl = screen.queryByRole("button");

    userEvent.click(buttonEl);

    const paragraphEl = await screen.findByText("toggle is true", {
      exact: false,
    });

    expect(paragraphEl).not.toBeNull();
  });

  test("renders NOT 'Toggle is False' when the button is clicked", async () => {
    render(<DemoOutput />);

    const buttonEl = screen.getByRole("button");

    userEvent.click(buttonEl);

    const paragraphEl = await screen.findByText("toggle is false", {
      exact: false,
    });

    expect(paragraphEl).not.toBeInTheDocument();
  });
});
