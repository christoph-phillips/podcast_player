import React from "react";
import { shallow, mount } from "enzyme";
import PlayButton from "./index";
import Loader from "../Loader";
import { Button } from "../../styles/theme";

describe("<PlayButton />", () => {
  it("Renders correctly", () => {
    const component = shallow(<PlayButton loaded={false} playing={false} />);
    expect(component).toMatchSnapshot();
  });
  it("Should show a loader and not a button if podcast is not loaded", () => {
    const component = shallow(<PlayButton loaded={false} playing={false} />);
    expect(component.find(Button).exists()).toBeFalsy();
    expect(component.find(Loader)).toExist();
  });
  it("Should show a button and not a loader if podcast is loaded", () => {
    const component = shallow(<PlayButton loaded={true} playing={false} />);
    expect(component.find(Loader).exists()).toBeFalsy();
    expect(component.find(Button)).toExist();
  });
  it("Should show a pause icon if podcast is playing", () => {
    const component = mount(<PlayButton loaded={true} playing={true} />);
    expect(component.find(Button).props().img).toEqual("icons/pause.png");
    expect(component.find(Button)).toHaveStyleRule(
      "background",
      `url(${"icons/pause.png"}) no-repeat center center`
    );
  });
  it("Should show a play icon if podcast is playing", () => {
    const component = mount(<PlayButton loaded={true} playing={false} />);
    expect(component.find(Button).props().img).toEqual("icons/play.png");
    expect(component.find(Button)).toHaveStyleRule(
      "background",
      `url(${"icons/play.png"}) no-repeat center center`
    );
  });
  it("Should call playPodcast when play button is clicked", () => {
    const playPodcast = jest.fn();
    const component = shallow(
      <PlayButton loaded={true} playing={false} playPodcast={playPodcast} />
    );
    component.find(Button).simulate("click");
    expect(playPodcast).toHaveBeenCalledTimes(1);
  });
  it("Should call stopPodcast when play button is clicked", () => {
    const stopPodcast = jest.fn();
    const component = shallow(
      <PlayButton loaded={true} playing={true} stopPodcast={stopPodcast} />
    );
    component.find(Button).simulate("click");
    expect(stopPodcast).toHaveBeenCalledTimes(1);
  });
});
