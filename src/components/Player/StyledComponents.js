import styled from "styled-components";
import theme from "../../styles/theme";

export const PlayerContainer = styled.div`
  width: 100%;
  height: 400px;
  position: relative;
  background: ${theme.background};
  border-bottom: 2px solid ${theme.primary};
`;

export const Image = styled.div`
  width: 150px;
  height: 150px;
  min-height: 150px;
  background: url(${props => props.img}) no-repeat center center;
  background-size: cover;
`;

export const Details = styled.div`
  height: 60%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  text-align: center;
  padding: 20px 10px;
`;

export const Title = styled.h1`
  margin: 0;
  font-size: 18px;
  margin: 20px 0 5px 0;
  line-height: 22px;
`;

export const Author = styled.h2`
  font-size: 16px;
  margin: 0;
`;

export const Controls = styled.div`
  display: flex;
  vertical-align: center;
  align-items: center;
  width: 100%;
  height: 20%;
  justify-content: center;
`;
