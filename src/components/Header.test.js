import "@testing-library/jest-dom/extend-expect";
import { fireEvent, render } from "@testing-library/react";
import Header from "./Header";

describe("<Header/>", () => {
  let component;

  beforeEach(() => {
    component = render(<Header />);
  });

  test("renders content", () => {
    expect(component.container).toHaveTextContent("LOGOUT");
  });

  test("clicking logout takes the user to login page", () => {
    const link = component.getByText("LOGOUT");
    fireEvent.click(link);

    expect(window.location.pathname).toBe("/");
  });
});
