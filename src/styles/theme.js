import styled from "styled-components";

const theme = {
  primary: "#e1edf5",
  background: "#3e3e3e"
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
  -webkit-tap-highlight-color: transparent;
  &:focus {
    outline: none;
  }
`;

export default theme;

export { Button };
