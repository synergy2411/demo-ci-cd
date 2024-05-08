import { render, screen } from "@testing-library/react";
import DemoAsync from "./DemoAsync";

describe("DemoAsync Component", () => {
  test("renders list of todo items from REST api call", async () => {
    render(<DemoAsync />);

    const allListItemElements = await screen.findAllByRole("listitem");

    expect(allListItemElements.length).toEqual(200);
  });
});
