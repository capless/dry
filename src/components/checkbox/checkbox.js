import React from "react";
import PropTypes from "prop-types";
import clsx from "clsx";
import styled from "styled-components";
import Checkbox from "@material-ui/core/Checkbox";
import { makeStyles } from "@material-ui/core/styles";
import { withTheme } from "dry/theme";
import toSvgString from "dry/utils/toSvgString";
import setPropTypes from "dry/utils/setPropTypes";
import Check from "./assets/check";

const useStyles = makeStyles({
  root: {
    "&:hover": {
      backgroundColor: "transparent"
    }
  },
  icon: {
    borderRadius: 4,
    width: 16,
    height: 16,
    border: "2px solid #D5D5D5",
    backgroundImage:
      "linear-gradient(180deg,hsla(0,0%,100%,.8),hsla(0,0%,100%,0))",
    "$root.Mui-focusVisible &": {
      outline: "2px auto rgba(19,124,189,.6)",
      outlineOffset: 2
    },
    "input:hover ~ &": {
      backgroundColor: "rgba(92,198,76,.2)"
    },
    "input:disabled ~ &": {
      boxShadow: "none",
      background: "rgba(206,217,224,.5)"
    }
  },
  checkedIcon: {
    border: "2px solid #5CC64C",
    backgroundColor: "#5CC64C",
    backgroundImage:
      "linear-gradient(180deg,hsla(0,0%,100%,.1),hsla(0,0%,100%,0))",
    "&:before": {
      display: "block",
      width: 16,
      height: 16,
      backgroundImage: `url(${toSvgString(Check)})`,
      content: '""'
    },
    "input:hover ~ &": {
      backgroundColor: "#5CC64C"
    }
  }
});

function DryCheckbox(props) {
  const { className, ...restProps } = props;

  const classes = useStyles();

  const clsxName = clsx(className, {});

  return (
    <Checkbox
      {...restProps}
      icon={<span className={classes.icon} />}
      checkedIcon={<span className={clsx(classes.icon, classes.checkedIcon)} />}
      className={clsxName}
    />
  );
}

DryCheckbox.defaultProps = {
  className: "",
  disableRipple: true
};

DryCheckbox.propTypes = {
  className: PropTypes.string,
  disableRipple: PropTypes.bool
};

const StyledCheckbox = styled(DryCheckbox)`
  &.MuiIconButton-root {
    &:hover {
      background-color: transparent;
    }

    &.Mui-checked:hover {
      background-color: transparent;
    }

    input:disabled ~ span {
      background: transparent !important;
    }
  }
`;

const ThemedStyledCheckbox = withTheme(StyledCheckbox);

setPropTypes("DryCheckbox", [Checkbox, DryCheckbox], ThemedStyledCheckbox);

export default ThemedStyledCheckbox;
