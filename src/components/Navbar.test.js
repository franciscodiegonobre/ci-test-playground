import "@testing-library/jest-dom/extend-expect";
import { render } from "@testing-library/react";
import Navbar from "./Navbar";
import { MemoryRouter } from "react-router-dom";

describe("<Navbar/>", () => {
  let component;

  beforeEach(() => {
    component = render(
      <MemoryRouter>
        <Navbar />
      </MemoryRouter>
    );
  });

  test("renders content", () => {
    expect(component.container).toHaveTextContent("HOME");
  });

  test("Home links has correct href", () => {
    const link = component.getByText("HOME");
    expect(link.href).toBe("http://localhost/home");
  });
});
