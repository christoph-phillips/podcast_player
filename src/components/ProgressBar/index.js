import React from "react";
import styled from "styled-components";
import theme from "../../styles/theme";

const sliderThumbStyles = props => `
  width: 20px;
  height: 20px;
  border-radius: 100%;
  background: ${theme.primary};
`;

const Container = styled.div`
  position: absolute;
  bottom: 50px;
  width: 80%;
  margin: 0 10%;
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

const ProgressBar = ({ progress }) => {
  return (
    <Container>
      <input type="range" min={0} max={100} value={10} className="slider" />
    </Container>
  );
};

export default ProgressBar;
