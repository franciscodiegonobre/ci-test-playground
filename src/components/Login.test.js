import "@testing-library/jest-dom/extend-expect";
import { render, fireEvent } from "@testing-library/react";
import Login from "./Login";

test("renders content", () => {
  const { getByPlaceholderText, getByText } = render(<Login />);
  const usernameInput = getByPlaceholderText("Username");
  const passwordInput = getByPlaceholderText("Password");
  const loginButton = getByText("Sign in");

  expect(usernameInput.placeholder).toBe("Username");
  expect(passwordInput.placeholder).toBe("Password");
  expect(loginButton).toHaveTextContent("Sign in");
});

test("tests the submit", () => {
  console.log = jest.fn();
  const { getByPlaceholderText, getByText } = render(<Login />);
  const usernameInput = getByPlaceholderText("Username");
  const passwordInput = getByPlaceholderText("Password");
  const loginButton = getByText("Sign in");

  fireEvent.change(usernameInput, { target: { value: "test" } });
  fireEvent.change(passwordInput, { target: { value: "test" } });
  fireEvent.click(loginButton);

  const loggedInMessage = getByText(
    "Your Username and/or Password are incorrect"
  );
  expect(loggedInMessage).toBeInTheDocument();
});
