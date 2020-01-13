import React from "react";
import { shallow, mount } from "enzyme";
import Loader from "./index";
import { LoaderContainer, Ring } from "./StyledComponents";

describe("<Loader />", () => {
  it("Renders correctly", () => {
    const component = shallow(<Loader size={60} />);
    expect(component).toMatchSnapshot();
  });
  it("Renders a container of correct size", () => {
    const component = mount(<Loader size={60} />);
    expect(component.find(LoaderContainer)).toHaveStyleRule("width", "60px");
  });
  it("Renders a loader ring", () => {
    const component = shallow(<Loader size={60} />);
    expect(component.find(LoaderContainer)).toExist();
  });
});
