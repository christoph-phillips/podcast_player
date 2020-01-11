import React, { Fragment } from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import {
  playPodcast,
  stopPodcast,
  loadPodcast
} from "../../actions/podcasts_actions";
import { prev, next } from "../../utils";
import theme, { PlayButton, Button } from "../../styles/theme";

import ProgressBar from "../ProgressBar";

const PlayerContainer = styled.div`
  width: 100%;
  height: 400px;
  position: relative;
  background: ${theme.background};
  border: 2px solid white;
`;

const Image = styled.div`
  width: 150px;
  height: 150px;
  min-height: 150px;
  background: linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1)),
    url(${props => props.img}) no-repeat center center;
`;

const Details = styled.div`
  height: 60%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  text-align: center;
  padding: 20px 10px;
`;
const Title = styled.h1`
  color: white;
  margin: 0;
  font-size: 18px;
  margin: 20px 0 5px 0;
  line-height: 22px;
`;
const Author = styled.h2`
  color: white;
  font-size: 16px;
  margin: 0;
`;

const Controls = styled.div`
  display: flex;
  vertical-align: center;
  align-items: center;
  width: 100%;
  height: 20%;
  justify-content: center;
`;
const Player = ({
  list,
  title,
  author,
  duration,
  img,
  url,
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
          {playing
            ? PlayButton(
                { img: "icons/stop.png", size: 60, loaded, border: true },
                () => loaded && stopPodcast()
              )
            : PlayButton(
                {
                  img: "icons/play.png",
                  size: 60,
                  loaded,
                  border: true
                },
                () => {
                  playPodcast({ id });
                }
              )}
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
    url,
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
    url,
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
  url: PropTypes.string,
  id: PropTypes.string,
  playing: PropTypes.bool,
  loadPodcast: PropTypes.func,
  playPodcast: PropTypes.func,
  stopPodcast: PropTypes.func,
  loaded: PropTypes.bool
};

export default connect(mapStateToProps, actionCreators)(Player);
