import React from "react";
import styled from "styled-components";
import { connect } from "react-redux";

import {
  playPodcast,
  stopPodcast,
  loadPodcast
} from "../../actions/podcasts_actions";
import { prev, next } from "../../utils";
import theme from "../../styles/theme";

import ProgressBar from "../ProgressBar";

const PlayerContainer = styled.div`
  width: 500px;
  height: 500px;
  background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url(${props => props.img}) no-repeat center center;
  position: relative;
`;

const Details = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;
const Title = styled.h1`
  color: white;
  margin: 0;
  font-size: 60px;
`;
const Author = styled.h2`
  color: white;
`;

const Controls = styled.div`
  display: flex;
`;

const createButton = (img, onClick) => {
  const Button = styled.button`
    background: url(${img}) no-repeat center center;
    width: 80px;
    height: 80px;
    filter: invert(1);
    cursor: pointer;
    border-radius: 100%;
    border: 2px solid black;
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
  stopPodcast
}) => {
  return (
    <PlayerContainer img={img}>
      <Details>
        <Title>{title}</Title>
        <Author>{author}</Author>
        <Controls>
          {createButton("icons/prev.png", () => loadPodcast(prev(list, id).id))}
          {playing
            ? createButton("icons/stop.png", () => stopPodcast())
            : createButton("icons/play.png", () => playPodcast({ id, url }))}
          {createButton("icons/next.png", () => loadPodcast(next(list, id).id))}
        </Controls>
      </Details>
      <ProgressBar />
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
    playing
  } = state.podcasts.current;
  return {
    list: state.podcasts.list,
    title,
    author,
    duration,
    img,
    id,
    url,
    playing
  };
};

const actionCreators = {
  playPodcast,
  stopPodcast,
  loadPodcast
};

export default connect(mapStateToProps, actionCreators)(Player);
