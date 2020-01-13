import React from "react";
import PropTypes from "prop-types";
import { Button } from "../../styles/theme";
import Loader from "../Loader";

const PlayButton = ({
  loaded,
  playing,
  stopPodcast,
  playPodcast,
  podcastId
}) => {
  return !loaded ? (
    <Loader size={60} />
  ) : playing ? (
    <Button
      img={"icons/pause.png"}
      size={60}
      border={true}
      onClick={() => loaded && stopPodcast()}
    />
  ) : (
    <Button
      img={"icons/play.png"}
      size={60}
      border={true}
      onClick={() => playPodcast({ id: podcastId })}
    />
  );
};

PlayButton.propTypes = {
  playPodcast: PropTypes.func,
  stopPodcast: PropTypes.func,
  loaded: PropTypes.bool,
  playing: PropTypes.bool,
  podcastId: PropTypes.string
};

export default PlayButton;
