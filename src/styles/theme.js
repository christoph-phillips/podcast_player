import React from "react";
import styled from "styled-components";

const theme = {
  primary: "#ff7426",
  background: "#3e3e3e"
};

const Loader = styled.div`
  display: inline-block;
  width: 100%;
  height: 100%;
  opacity: 0.1;
  &:after {
    content: " ";
    display: block;
    width: 55%;
    height: 55%;
    margin: 8px;
    border-radius: 50%;
    border: 6px solid #fff;
    border-color: #fff transparent #fff transparent;
    animation: lds-dual-ring 1.2s linear infinite;
  }
  @keyframes lds-dual-ring {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

const LoaderContainer = styled.div`
  width: ${props => props.size}px;
  height: ${props => props.size}px;
  min-width: ${props => props.size}px;
  min-height: ${props => props.size}px;
  border: ${props => (props.border ? "2px solid black" : 0)};
  outline: 0;
  margin: 20px;
`;

const PlayButton = (props, onClick) => {
  if (!props.loaded) {
    return (
      <LoaderContainer size={props.size}>
        <Loader />
      </LoaderContainer>
    );
  }
  return <Button {...props} onClick={onClick} />;
};

const Button = styled.button`
  background: url(${props => props.img}) no-repeat center center;
  background-size: 32px;
  width: ${props => props.size}px;
  height: ${props => props.size}px;
  min-width: ${props => props.size}px;
  min-height: ${props => props.size}px;
  filter: invert(1);
  cursor: pointer;
  border-radius: 100%;
  border: ${props => (props.border ? "2px solid black" : 0)};
  outline: 0;
  margin: 20px;
`;

export default theme;

console.log(PlayButton);
export { Button, PlayButton };
