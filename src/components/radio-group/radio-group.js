import React from "react";
import PropTypes from "prop-types";
import clsx from "clsx";
import styled from "styled-components";
import RadioGroup from "@material-ui/core/RadioGroup";
import { withTheme } from "dry/theme";
import setPropTypes from "dry/utils/setPropTypes";

function DryRadioGroup(props) {
  const { className, ...restProps } = props;
  const clsxName = clsx(className, {});

  return <RadioGroup {...restProps} className={clsxName} />;
}

DryRadioGroup.defaultProps = {
  className: ""
};

DryRadioGroup.propTypes = {
  className: PropTypes.string
};

const StyledRadioGroup = styled(DryRadioGroup)``;

const ThemedStyledRadioGroup = withTheme(StyledRadioGroup);

setPropTypes(
  "DryRadioGroup",
  [RadioGroup, DryRadioGroup],
  ThemedStyledRadioGroup
);

export default ThemedStyledRadioGroup;
