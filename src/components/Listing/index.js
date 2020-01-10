import React from "react";
import styled from "styled-components";
import { connect } from "react-redux";

import ListItem from "../ListItem";

import { loadPodcast } from "../../actions/podcasts_actions";

const Container = styled.div`
  width: 100%;
  overflow-y: scroll;
  height: calc(100vh - 40px - 500px);
`;

const Listing = ({ list, currentId, loadPodcast }) => {
  return (
    <Container>
      {list.map(podcast => (
        <ListItem
          title={podcast.title}
          description={podcast.description}
          duration={podcast.duration}
          artwork={podcast.artwork}
          onSelect={loadPodcast.bind(this, podcast.id)}
        />
      ))}
    </Container>
  );
};

const mapStateToProps = state => {
  return {
    list: state.podcasts.list,
    currentId: state.podcasts.current.id,
    url: state.podcasts.current.url
  };
};

const actionCreators = {
  loadPodcast
};

export default connect(mapStateToProps, actionCreators)(Listing);
