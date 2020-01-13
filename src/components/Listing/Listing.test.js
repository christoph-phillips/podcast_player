import React from "react";
import { shallow } from "enzyme";
import { Listing } from "./index";
import mockData from "../../test/mock_data";

describe("<Listing />", () => {
  it("Renders correctly", () => {
    const component = shallow(<Listing list={mockData} />);
    expect(component).toMatchSnapshot();
  });
  // it("Renders all the podcasts in the list prop", () => {
  //   const component = shallow(<Listing list={mock} />);
  //   expect(component.dive().children().length).toEqual(7);
  // });
});
