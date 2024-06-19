import { render, screen, fireEvent } from "@testing-library/react";
import App from "./App";

test("button click flow", () => {
  //render app
  render(<App />);

  //find button
  const buttonElement = screen.getByRole("button", { name: /blue/i });

  //check intial color
  expect(buttonElement).toHaveClass("red");

  //click the button
  fireEvent.click(buttonElement);

  //check the button text
  expect(buttonElement).toHaveTextContent(/red/i);

  //check the button color
  expect(buttonElement).toHaveClass("blue");

  //check the button color
  //expect(buttonElement.toHaveClass('blue');

  expect(buttonElement).toHaveStyle({ "background-color": "rgb(0,0,255)" });
});

test("checkbox flow", () => {
  render(<App />);
  // find elements
  const buttonElement = screen.getByRole("button", { name: /blue/i });
  const checkboxElement = screen.getByRole("checkbox", {
    name: /disable button/i,
  });
  //check initial conditions
  expect(buttonElement).toBeEnabled();
  expect(checkboxElement).not.toBeChecked();

  //click checkbox to duisable button
  fireEvent.click(checkboxElement);
  exprect(buttonElement).toBeDisabled();

  //click checkbox again to re-enable button
  fireEvent.click(checkboxElement);
  expect(buttonElement).toBeEnable();
});
