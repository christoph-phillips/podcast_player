import React from "react";
import propTypes from "prop-types";

import { Ring, LoaderContainer } from "./StyledComponents";
const Loader = ({ size }) => {
  return (
    <LoaderContainer size={size}>
      <Ring />
    </LoaderContainer>
  );
};

Loader.propTypes = {
  size: propTypes.number
};

export default Loader;
