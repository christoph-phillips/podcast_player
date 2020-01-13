import React from "react";
import { shallow } from "enzyme";
import ListItem from "./index";
import mock from "../../test/mock";
import { humanReadableTime } from "../../utils";
import { MainDetail, SubDetail, Duration } from "./StyledComponents";
import PlayButton from "../PlayButton";
const { title, description, duration } = mock[0];

describe("<ListItem />", () => {
  it("Renders correctly", () => {
    const component = shallow(
      <ListItem
        title={title}
        description={description}
        duration={duration}
        playing={false}
      />
    );
    expect(component).toMatchSnapshot();
  });
  it("Renders data fields correctly", () => {
    const component = shallow(
      <ListItem title={title} description={description} duration={duration} />
    );
    const { minutes, seconds } = humanReadableTime(duration);

    expect(component.find(MainDetail).text()).toEqual(title);
    expect(component.find(Duration).text()).toEqual(`${minutes}:${seconds}`);
    expect(component.find(SubDetail).html()).toContain(description);
    expect(component).toMatchSnapshot();
  });
  it("Renders a <PlayButton /> component", () => {
    const component = shallow(
      <ListItem title={title} description={description} duration={duration} />
    );
    expect(component.find(PlayButton)).toExist();
  });
});
