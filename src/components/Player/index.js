import React, { Fragment } from "react";

import { connect } from "react-redux";
import PropTypes from "prop-types";

import {
  playPodcast,
  stopPodcast,
  loadPodcast
} from "../../actions/podcasts_actions";

import { prev, next } from "../../utils";

import { Button } from "../../styles/theme";

import ProgressBar from "../ProgressBar";
import PlayButton from "../PlayButton";

import {
  PlayerContainer,
  Image,
  Details,
  Title,
  Author,
  Controls
} from "./StyledComponents";

export const Player = ({
  list,
  title,
  author,
  img,
  id,
  playing,
  loadPodcast,
  playPodcast,
  stopPodcast,
  loaded
}) => {
  return (
    <PlayerContainer>
      <Details>
        <Image img={img} />
        <Title>{title}</Title>
        <Author>{author}</Author>
      </Details>
      <Controls>
        <Fragment>
          <Button
            onClick={() => loaded && loadPodcast(prev(list, id).id, playing)}
            size={40}
            img={"icons/prev.png"}
          ></Button>
          <PlayButton
            stopPodcast={stopPodcast}
            playPodcast={playPodcast}
            loaded={loaded}
            playing={playing}
            podcastId={id}
          />
          <Button
            onClick={() => loaded && loadPodcast(next(list, id).id, playing)}
            size={40}
            img={"icons/next.png"}
          ></Button>
        </Fragment>
        <ProgressBar />
      </Controls>
    </PlayerContainer>
  );
};

const mapStateToProps = state => {
  const {
    title,
    author,
    duration,
    artwork: {
      urls: [{ url: img }]
    },
    id,
    playing,
    loaded
  } = state.podcasts.current;
  return {
    list: state.podcasts.list,
    title,
    author,
    duration,
    img,
    id,
    playing,
    loaded
  };
};

const actionCreators = {
  playPodcast,
  stopPodcast,
  loadPodcast
};

Player.propTypes = {
  list: PropTypes.array,
  title: PropTypes.string,
  author: PropTypes.string,
  duration: PropTypes.number,
  img: PropTypes.string,
  id: PropTypes.string,
  playing: PropTypes.bool,
  loadPodcast: PropTypes.func,
  playPodcast: PropTypes.func,
  stopPodcast: PropTypes.func,
  loaded: PropTypes.bool
};

export default connect(
  mapStateToProps,
  actionCreators
)(Player);
