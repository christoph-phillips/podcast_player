import React from "react";
import { shallow } from "enzyme";
import { Listing } from "./index";
import ListItem from "../ListItem";
import mockData from "../../test/mock_data";

describe("<Listing />", () => {
  it("Renders correctly", () => {
    const component = shallow(<Listing list={mockData} />);
    expect(component).toMatchSnapshot();
  });
  it("Renders all the podcast items", () => {
    const component = shallow(<Listing list={mockData} />);
    expect(component.find(ListItem).length).toEqual(7);
  });
});
