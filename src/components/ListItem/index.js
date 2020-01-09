import React from "react";
import styled from "styled-components";

import { humanReadableTime } from "../../utils";

const ListContainer = styled.div`
  display: flex;
  padding: 10px;
  border: 1px solid black;
`;
const DetailContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;
  width: 400px;
`;
const Img = styled.img`
  width: 100px;
  height: 100px;
  object-fit: contain;
`;
const MainDetail = styled.h2`
  margin: 0;
`;
const SubDetail = styled.div`
  margin: 0;
`;
const Duration = styled.p`
  margin: 0;
`;

const ListItem = ({
  title,
  description,
  duration,
  artwork: {
    urls: [{ size, url }]
  }
}) => {
  const { minutes, seconds } = humanReadableTime(duration);
  return (
    <ListContainer>
      <Img alt={title} src={url} />
      <DetailContainer>
        <MainDetail>{title}</MainDetail>
        <SubDetail dangerouslySetInnerHTML={{ __html: description }} />
        <Duration>{`${minutes}:${seconds}`}</Duration>
      </DetailContainer>
    </ListContainer>
  );
};

export default ListItem;
