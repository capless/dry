import React from "react";
import PropTypes from "prop-types";
import clsx from "clsx";
import styled from "styled-components";
import { DialogContent } from "@material-ui/core";
import { withTheme } from "dry/theme";
import setPropTypes from "dry/utils/setPropTypes";

function DryDialogContent(props) {
  const {
    className,
    ...restProps
  } = props;
  const clsxName = clsx(className, {

  });

  return (
    <DialogContent
      {...restProps}
      className={clsxName}
    />
  );
}

DryDialogContent.defaultProps = {
  className: "",

};

DryDialogContent.propTypes = {
  className: PropTypes.string,

};

const StyledDialogContent = styled(DryDialogContent)`
 
`;

const ThemedStyledDialogContent = withTheme(StyledDialogContent);

setPropTypes("DryDialogContent", DialogContent, ThemedStyledDialogContent);

export default ThemedStyledDialogContent;
