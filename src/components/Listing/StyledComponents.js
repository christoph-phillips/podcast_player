import styled from "styled-components";
import theme from "../../styles/theme";

export const Container = styled.div`
  width: 100%;
  height: calc(100vh - 40px - 400px);
  overflow-y: auto;
  ::-webkit-scrollbar {
    width: 10px;
  }
  ::-webkit-scrollbar-track {
    background: 0;
  }
  ::-webkit-scrollbar-thumb {
    background: ${theme.primary};
  }
  @media only screen and (max-width: 400px) {
    height: calc(100vh - 400px);
  }
`;
