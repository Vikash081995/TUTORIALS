import { render, screen } from "@testing-library/react";
import App from "./App";
import Enzyme, { shallow } from "enzyme";

test("renders learn react link", () => {
  const wrapper = shallow(<App />);
  expect(wrapper.exists()).toBe(true);
});
