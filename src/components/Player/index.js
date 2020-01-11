import React, { Fragment } from "react";
import styled from "styled-components";
import { connect } from "react-redux";

import {
  playPodcast,
  stopPodcast,
  loadPodcast
} from "../../actions/podcasts_actions";
import { prev, next } from "../../utils";
import theme, { PlayButton } from "../../styles/theme";

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
  margin: 10px;
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

const createButton = (img, onClick, size, border) => {
  const Button = styled.button`
    background: url(${img}) no-repeat center center;
    background-size: 32px;
    width: ${size}px;
    height: ${size}px;
    min-width: ${size}px;
    min-height: ${size}px;
    filter: invert(1);
    cursor: pointer;
    border-radius: 100%;
    border: ${border ? "2px solid black" : 0};
    outline: 0;
    margin: 20px;
  `;
  return <Button onClick={onClick}></Button>;
};

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
          {createButton(
            "icons/prev.png",
            () => loadPodcast(prev(list, id).id, playing),
            40
          )}
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
          {createButton(
            "icons/next.png",
            () => loaded && loadPodcast(next(list, id).id, playing),
            40
          )}
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

export default connect(mapStateToProps, actionCreators)(Player);

export { createButton };
