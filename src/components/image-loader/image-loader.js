import React from "react";
import Proptypes from "prop-types";
import clsx from "clsx";
import styled from "styled-components";
import ImageLoader from "react-image";
import { withTheme } from "theme";

function DryImageLoader(props) {
  const {
    className,
    ...restProps
  } = props;
  const clsxName = clsx(className, {

  });

  return (
    <ImageLoader
      {...restProps}
      className={clsxName}
    />
  );
}

DryImageLoader.defaultProps = {
  className: "",

};

DryImageLoader.propTypes = {
  className: Proptypes.string,

};

const StyledImageLoader = styled(DryImageLoader)`
 
`;

export default withTheme(StyledImageLoader);
