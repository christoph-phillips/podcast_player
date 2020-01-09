import React, { useEffect } from "react";
import { connect } from "react-redux";
import styled from "styled-components";

import { loadPodcasts } from "./actions/podcasts_actions";
import ListItem from "./components/ListItem";
import Player from "./components/Player";

const AppContainer = styled.div`
  width: 500px;
  top: 20px;
  left: calc((100% - 500px) / 2);
  height: calc(100vh - 40px);
  position: fixed;
`;
const Listing = styled.div`
  width: 100%;
  overflow-y: scroll;
  height: calc(100vh - 40px - 500px);
`;

function App({ loadPodcasts, list, current }) {
  useEffect(() => {
    loadPodcasts();
  }, [loadPodcasts]);
  console.log({ list, current });
  if (!current) {
    return <h1>Loading</h1>;
  }
  return (
    <AppContainer>
      <Player
        title={current.title}
        author={current.author}
        duration={current.duration}
        artwork={current.artwork}
      />
      <Listing>
        {list.map(podcast => (
          <ListItem
            title={podcast.title}
            description={podcast.description}
            duration={podcast.duration}
            artwork={podcast.artwork}
          />
        ))}
      </Listing>
    </AppContainer>
  );
}

const mapStateToProps = state => {
  return {
    list: state.podcasts.list,
    current: state.podcasts.current
  };
};

const actionCreators = {
  loadPodcasts
};

export default connect(mapStateToProps, actionCreators)(App);
