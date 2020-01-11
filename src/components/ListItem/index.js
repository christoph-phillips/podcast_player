import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { humanReadableTime } from "../../utils";
import theme, { PlayButton } from "../../styles/theme";

const ListContainer = styled.div`
  display: flex;
  padding: 10px;
  border: 1px solid ${theme.primary};
`;
const DetailContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;
  width: 400px;
`;
const MainDetail = styled.h4`
  margin: 0;
`;
const SubDetail = styled.div`
  margin: 0;
  font-size: 14px;
`;
const Duration = styled.p`
  margin: 3px 0;
  font-size: 14px;
`;

const ListItem = ({
  title,
  description,
  duration,
  onSelect,
  playing,
  loaded
}) => {
  const { minutes, seconds } = humanReadableTime(duration);
  return (
    <ListContainer>
      {playing
        ? PlayButton(
            { img: "icons/stop.png", size: 60, loaded, border: true },
            onSelect
          )
        : PlayButton(
            {
              img: "icons/play.png",
              size: 60,
              loaded,
              border: true
            },
            onSelect
          )}
      <DetailContainer>
        <MainDetail>{title}</MainDetail>
        <Duration>{`${minutes}:${seconds}`}</Duration>
        <SubDetail dangerouslySetInnerHTML={{ __html: description }} />
      </DetailContainer>
    </ListContainer>
  );
};

ListItem.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  duration: PropTypes.number,
  onSelect: PropTypes.func,
  playing: PropTypes.bool,
  loaded: PropTypes.bool
};

export default ListItem;
