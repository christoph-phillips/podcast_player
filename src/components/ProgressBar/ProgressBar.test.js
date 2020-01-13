import React from "react";
import { shallow, mount } from "enzyme";
import ProgressBar from "./index";
import PodcastPlayer from "../../lib/PodcastPlayer";
import mockData from "../../test/mock_data";

describe("<Loader />", () => {
  it("Renders correctly", () => {
    const component = shallow(<ProgressBar />);
    expect(component).toMatchSnapshot();
  });
  it("Renders a an input slider", () => {
    const component = shallow(<ProgressBar />);
    expect(component.find("input")).toExist();
  });
  it("Slider shows the correct value of the state", done => {
    let component = mount(<ProgressBar size={60} />);
    const input = component.find("input");
    expect(input.instance().value).toEqual("0");
    PodcastPlayer.load(mockData[0].url, () => {});
    PodcastPlayer.seek(562);
    setTimeout(() => {
      expect(input.instance().value).toEqual("0.562");
      done();
    }, 100);
  });
});
