import React, { useEffect, useState } from "react";
import styled from "styled-components";
import theme from "../../styles/theme";

import podcastPlayer from "../../utils/PodcastPlayer";

const sliderThumbStyles = props => `
  width: 15px;
  height: 15px;
  border-radius: 100%;
  background: ${theme.primary};
`;

const Container = styled.div`
  position: absolute;
  bottom: 25px;
  width: 80%;
  margin: 0;
  display: flex;
  align-items: center;
  color: ${theme.primary};
  .slider {
    flex: 6;
    -webkit-appearance: none;
    width: 100%;
    height: 5px;
    border-radius: 5px;
    background: ${theme.primary};
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
        readOnly={true}
      />
    </Container>
  );
};

export default ProgressBar;
