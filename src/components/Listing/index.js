import React from "react";
import styled from "styled-components";
import { connect } from "react-redux";

import ListItem from "../ListItem";

import {
  // loadPodcast,
  playPodcast,
  stopPodcast,
  loadPodcast
} from "../../actions/podcasts_actions";
import podcastPlayer from "../../utils/PodcastPlayer";

const Container = styled.div`
  width: 100%;
  height: calc(100vh - 40px - 400px);
  overflow-y: auto;
  ::-webkit-scrollbar {
    width: 10px;
  }
  ::-webkit-scrollbar-track {
    background: 0;
  }
  ::-webkit-scrollbar-thumb {
    background: white;
  }
`;

const Listing = ({
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
          title={podcast.title}
          description={podcast.description}
          duration={podcast.duration}
          artwork={podcast.artwork}
          onSelect={() => {
            const isCurrent = podcast.id === currentId;
            if (isCurrent) {
              return !playing
                ? playPodcast({ id: podcast.id, url: podcast.url })
                : stopPodcast();
            } else {
              loadPodcast(podcast.id);
              playPodcast({ id: podcast.id, url: podcast.url });
            }
          }}
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

export default connect(mapStateToProps, actionCreators)(Listing);
