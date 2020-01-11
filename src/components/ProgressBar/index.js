import React, { useEffect, useState } from "react";
import styled from "styled-components";
import theme from "../../styles/theme";

import podcastPlayer from "../../utils/PodcastPlayer";

const sliderThumbStyles = props => `
  width: 20px;
  height: 20px;
  border-radius: 100%;
  background: white;
`;

const Container = styled.div`
  position: absolute;
  bottom: 20px;
  width: 80%;
  margin: 0;
  display: flex;
  align-items: center;
  color: #888;
  .slider {
    flex: 6;
    -webkit-appearance: none;
    width: 100%;
    height: 10px;
    border-radius: 5px;
    background: #efefef;
    outline: none;
    &::-webkit-slider-thumb {
      -webkit-appearance: none;
      appearance: none;
      ${props => sliderThumbStyles(props)}
    }
    &::-moz-range-thumb {
      ${props => sliderThumbStyles(props)}
    }
  }
`;

const ProgressBar = () => {
  const [progress, setProgress] = useState(0);
  useEffect(() => {
    podcastPlayer.createProgressInterval(progress => {
      setProgress(+progress.toFixed(3));
    });
  }, [setProgress]);
  return (
    <Container>
      <input
        type="range"
        min={0}
        max={1}
        value={progress || 0}
        step={0.001}
        className="slider"
      />
    </Container>
  );
};

export default ProgressBar;
