import styled from "styled-components";
import theme from "../../styles/theme";

export const ListContainer = styled.div`
  display: flex;
  padding: 10px;
  border: 1px solid ${theme.primary};
`;

export const DetailContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;
  width: 400px;
`;

export const MainDetail = styled.h4`
  margin: 0;
`;

export const SubDetail = styled.div`
  margin: 0;
  font-size: 14px;
`;

export const Duration = styled.p`
  margin: 3px 0;
  font-size: 14px;
`;
