import React from "react";
import Enzyme, { shallow, mount } from "enzyme";
import Alinks from "../App";
import Adapter from "enzyme-adapter-react-16";

Enzyme.configure({ adapter: new Adapter() });

describe("App Component", () => {
  test("renders", () => {
    const wrapper = shallow(<Alinks />);

    expect(wrapper.exists()).toBe(true);
  });s
});