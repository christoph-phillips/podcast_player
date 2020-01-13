import React from "react";

import { connect } from "react-redux";
import PropTypes from "prop-types";

import ListItem from "../ListItem";

import {
  playPodcast,
  stopPodcast,
  loadPodcast
} from "../../actions/podcasts_actions";

import { Container } from "./StyledComponents";

export const Listing = ({
  list,
  currentId,
  playPodcast,
  stopPodcast,
  loadPodcast,
  loaded,
  playing
}) => {
  return (
    <Container>
      {list.map(podcast => (
        <ListItem
          key={podcast.id}
          id={podcast.id}
          title={podcast.title}
          description={podcast.description}
          duration={podcast.duration}
          artwork={podcast.artwork}
          playPodcast={() => {
            const isCurrent = podcast.id === currentId;
            if (isCurrent) {
              playPodcast({ id: podcast.id, url: podcast.url });
            } else {
              loadPodcast(podcast.id);
              playPodcast({ id: podcast.id, url: podcast.url });
            }
          }}
          stopPodcast={() => stopPodcast()}
          current={podcast.id === currentId}
          loaded={podcast.id !== currentId ? true : loaded}
          playing={podcast.id !== currentId ? false : playing}
        />
      ))}
    </Container>
  );
};

const mapStateToProps = state => {
  return {
    list: state.podcasts.list,
    currentId: state.podcasts.current.id,
    loaded: state.podcasts.current.loaded,
    url: state.podcasts.current.url,
    playing: state.podcasts.current.playing
  };
};

const actionCreators = {
  stopPodcast,
  playPodcast,
  loadPodcast
};

Listing.propTypes = {
  list: PropTypes.array,
  currentId: PropTypes.string,
  loaded: PropTypes.bool,
  url: PropTypes.string,
  playing: PropTypes.bool
};

export default connect(
  mapStateToProps,
  actionCreators
)(Listing);
