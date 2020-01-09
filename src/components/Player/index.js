import React from "react";
import styled from "styled-components";
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
  title,
  author,
  duration,
  artwork: {
    urls: [{ size, url }]
  }
}) => {
  return (
    <PlayerContainer img={url}>
      <Details>
        <Title>{title}</Title>
        <Author>{author}</Author>
        <Controls>
          {createButton("icons/prev.png", () => console.log("prev"))}
          {createButton("icons/play.png", () => console.log("play"))}
          {createButton("icons/next.png", () => console.log("next"))}
        </Controls>
      </Details>
      <ProgressBar />
    </PlayerContainer>
  );
};

export default Player;
