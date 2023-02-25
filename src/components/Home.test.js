import "@testing-library/jest-dom/extend-expect";
import { render } from "@testing-library/react";
import Home from "./Home";
import { MemoryRouter } from "react-router-dom";

describe("<Home/>", () => {
  let component;

  beforeEach(() => {
    component = render(
      <MemoryRouter>
        <Home />
      </MemoryRouter>
    );
  });

  test("renders h1", () => {
    expect(component.container).toHaveTextContent("STAR WARS STARSHIPS");
  });

  test("renders link", () => {
    const link = component.getByTestId("start-link");
    expect(link).toHaveTextContent("START");
  });
});
