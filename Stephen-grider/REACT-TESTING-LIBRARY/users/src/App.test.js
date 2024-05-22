import { render, screen } from "@testing-library/react";
import App from "./App";
import user from "@testing-library/user-event";

test("can receive a new user and show it on a list", () => {
  render(<App />);
  const nameInput = screen.getAllByRole("textbox", {
    name: /name/i
  });
  const emailInput = screen.getAllByRole("textbox", {
    email: /email/i
  });
  const button = screen.getByRole("button");
  //Simulate typing in a name
  user.click(nameInput);
  user.keyboard("jane");

  //Simulate typing in an email
  user.click(emailInput);
  user.keyboard("yourEmail@gmail.com");
  user.click(button);

  const name = screen.getByRole("cell", { name: user.name });
  const email = screen.getByRole("cell", { name: user.email });
  expect(name).toBeInTheDocument();
  expect(email).toBeInTheDocument();
});
