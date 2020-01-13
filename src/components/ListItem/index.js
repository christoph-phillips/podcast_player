import React from "react";
import PropTypes from "prop-types";
import { humanReadableTime } from "../../utils";

import {
  ListContainer,
  DetailContainer,
  MainDetail,
  SubDetail,
  Duration
} from "./StyledComponents";
import PlayButton from "../PlayButton";
const ListItem = ({
  title,
  description,
  duration,
  playPodcast,
  stopPodcast,
  playing,
  loaded
}) => {
  const { minutes, seconds } = humanReadableTime(duration);
  return (
    <ListContainer>
      <PlayButton
        stopPodcast={stopPodcast}
        playPodcast={playPodcast}
        loaded={loaded}
        playing={playing}
      />
      <DetailContainer>
        <MainDetail>{title}</MainDetail>
        <Duration>{`${minutes}:${seconds}`}</Duration>
        <SubDetail dangerouslySetInnerHTML={{ __html: description }} />
      </DetailContainer>
    </ListContainer>
  );
};

ListItem.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  duration: PropTypes.number,
  playPodcast: PropTypes.func,
  stopPodcast: PropTypes.func,
  playing: PropTypes.bool,
  loaded: PropTypes.bool
};

export default ListItem;
