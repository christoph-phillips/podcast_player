import React from "react";
import { shallow, mount } from "enzyme";
import mockData from "../../test/mock_data";
import { Image, Title, Author } from "./StyledComponents";
import PlayButton from "../PlayButton";
import ProgressBar from "../ProgressBar";
import { Button } from "../../styles/theme";
import { Player } from "./index";
const {
  title,
  author,
  artwork: {
    urls: [{ url: img }]
  }
} = mockData[0];

describe("<Player />", () => {
  it("Renders correctly", () => {
    const component = shallow(<Player />);
    expect(component).toMatchSnapshot();
  });
  it("Renders a play button", () => {
    const component = shallow(<Player />);
    expect(component.find(PlayButton)).toExist();
  });
  it("Renders a progress bar", () => {
    const component = shallow(<Player />);
    expect(component.find(ProgressBar)).toExist();
  });
  it("Renders a next and previous button", () => {
    const component = mount(<Player />);
    expect(component.find(Button).first()).toHaveStyleRule(
      "background",
      `url(${"icons/prev.png"}) no-repeat center center`
    );
    expect(component.find(Button).last()).toHaveStyleRule(
      "background",
      `url(${"icons/next.png"}) no-repeat center center`
    );
  });
  it("Renders data fields correctly", () => {
    const component = mount(<Player title={title} author={author} img={img} />);
    expect(component.find(Title).text()).toEqual(title);
    expect(component.find(Author).text()).toEqual(author);
    expect(component.find(Image)).toHaveStyleRule(
      "background",
      `url(${img}) no-repeat center center`
    );
  });
});
