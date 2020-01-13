import React, { useEffect, Fragment } from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import PropTypes from "prop-types";

import { fetchPodcasts } from "./actions/podcasts_actions";

import Player from "./components/Player";
import Listing from "./components/Listing";
import Loader from "./components/Loader";
import theme from "./styles/theme";

export const AppContainer = styled.div`
  width: 400px;
  top: 20px;
  left: calc((100% - 400px) / 2);
  height: calc(100vh - 40px);
  position: fixed;
  background: ${theme.background};
  overflow: hidden;
  color: ${theme.primary};
  @media only screen and (max-width: 400px) {
    width: 100%;
    top: 0;
    height: 100%;
    left: 0;
  }
`;

export function App({ fetchPodcasts, current }) {
  useEffect(() => {
    fetchPodcasts();
  }, [fetchPodcasts]);

  return (
    <AppContainer>
      {!current ? (
        <Loader size={620} />
      ) : (
        <Fragment>
          <Player />
          <Listing />
        </Fragment>
      )}
    </AppContainer>
  );
}

const mapStateToProps = state => {
  return {
    current: state.podcasts.current
  };
};

const actionCreators = {
  fetchPodcasts
};

Listing.propTypes = {
  current: PropTypes.object,
  fetchPodcasts: PropTypes.func
};

export default connect(mapStateToProps, actionCreators)(App);
