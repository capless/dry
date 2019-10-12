import React from "react";
import Proptypes from "prop-types";
import clsx from "clsx";
import styled from "styled-components";
import { RadioGroup } from "@material-ui/core";
import { withTheme } from "theme";

function DryRadioGroup(props) {
  const {
    className,
    ...restProps
  } = props;
  const clsxName = clsx(className, {

  });

  return (
    <RadioGroup
      {...restProps}
      className={clsxName}
    />
  );
}

DryRadioGroup.defaultProps = {
  className: "",

};

DryRadioGroup.propTypes = {
  className: Proptypes.string,

};

const StyledRadioGroup = styled(DryRadioGroup)`
 
`;

export default withTheme(StyledRadioGroup);
