import React from "react";
import Proptypes from "prop-types";
import clsx from "clsx";
import styled from "styled-components";
import { List } from "@material-ui/core";
import { withTheme } from "theme";

function DryList(props) {
  const {
    className,
    ...restProps
  } = props;
  const clsxName = clsx(className, {

  });

  return (
    <List
      {...restProps}
      className={clsxName}
    />
  );
}

DryList.defaultProps = {
  className: "",

};

DryList.propTypes = {
  className: Proptypes.string,

};

const StyledList = styled(DryList)`
 
`;

export default withTheme(StyledList);
