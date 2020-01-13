import React from "react";
import { shallow } from "enzyme";
import { App } from "./App";
import Loader from "./components/Loader";
import mockData from "./test/mock_data";

describe("<App />", () => {
  it("Renders correctly", () => {
    const component = shallow(<App current={mockData[0]} />);
    expect(component).toMatchSnapshot();
  });
  it("Renders a loader if no current podcast is available", () => {
    const component = shallow(<App current={null} />);
    expect(component.find(Loader)).toExist();
  });
  it("Renders the Player and Listing components if a current podcast is available", () => {
    const component = shallow(<App current={mockData[0]} />);
    expect(component.find("Connect(Player)")).toExist();
    expect(component.find("Connect(Listing)")).toExist();
  });
});
