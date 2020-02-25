import React, { useRef, useState, useEffect } from "react";
import PropTypes from "prop-types";
import clsx from "clsx";
import styled from "styled-components";
import Select from "@material-ui/core/Select";
import { withTheme } from "dry/theme";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import FormHelperText from "@material-ui/core/FormHelperText";
import { makeStyles } from "@material-ui/core/styles";
import setPropTypes from "dry/utils/setPropTypes";

const useStyles = makeStyles(() => ({
  paper: {
    borderRadius: 0,
    border: "1px solid #EBEFF2",
    overflowX: "inherit",
    overflowY: "auto !important",
  },

  list: {
    width: ({ width = "100%" }) => `${width} !important`,
    padding: "0 !important",
  },
}));

function DrySelect(props) {
  const {
    className, required, label, textVariant, fullWidth, helperText, ...restProps
  } = props;

  const classes = useStyles();
  const selectRef = useRef();
  const [anchorEl, setAnchorEl] = useState();
  const menuProps = {
    classes: { list: classes.list },
    PopoverClasses: { paper: classes.paper },
    anchorEl,
    elevation: 0,
    marginThreshold: 0,
    anchorReference: "anchorEl",
    anchorOrigin: {
      vertical: "bottom",
      horizontal: "left",
    },
    getContentAnchorEl: null,
  };

  useEffect(() => {
    setAnchorEl(selectRef.current);
  }, []);

  const clsxName = clsx(className, {
    [`MuiSelect-select--${textVariant}`]: textVariant,
    [`MuiSelect-select--fullWidth`]: fullWidth,
  });

  return (
    <FormControl className={clsxName} required={required}>
      <InputLabel>{label}</InputLabel>
      <Select {...restProps} ref={selectRef} MenuProps={menuProps} />
      {helperText && <FormHelperText error={restProps.error}>{helperText}</FormHelperText>}
    </FormControl>
  );
}

DrySelect.defaultProps = {
  className: "",
  label: "",
  helperText: "",
  textVariant: "normal",
  fullWidth: false,
  required: false,

};

DrySelect.propTypes = {
  className: PropTypes.string,
  label: PropTypes.string,
  helperText: PropTypes.string,
  fullWidth: PropTypes.bool,
  required: PropTypes.bool,
  textVariant: PropTypes.oneOf(["normal", "naked"]),
};

const StyledSelect = styled(DrySelect)`
  &.MuiFormControl-root {
    min-width: ${({ width }) => !width && "25%"};
    width: ${({ width }) => width};
    color: #707683;
  }

  .MuiSelect-icon {
    color: #aeaeae;
  }

  /* label */
  .MuiFormLabel-root {
    color: ${({ theme }) => theme.colors.gray};
    font-style: normal;
    font-weight: normal;
    font-size: 12px;

    /* by default, the label is positioned at the top */
    transform: translate(0, 1.5px) !important;
  }

  /* input */
  .MuiSelect-root {
    padding-top: 8px;
    padding-bottom: 9px;
    color: #707683;
    font-style: normal;
    font-weight: normal;
  }

  /* input underline */
  .MuiInput-underline {
    &::before,
    &::after {
      border-bottom-color: #d3d8dd;
    }

    &:hover:not(.Mui-disabled):before {
      border-bottom: 1px solid #d3d8dd;
    }
  }

  /* edit mode */
  .Mui-focused {
    .MuiInputBase-input {
      background: #ebeff2;
    }

    .MuiInputAdornment-root {
      background: #ebeff2;
    }

    &.MuiInput-underline::after {
      border-bottom: 1px solid #818e9b;
    }
  }

  /* with avatar */
  .MuiBox-root {
    display: flex;
    align-items: center;

    .MuiFormLabel-root {
      color: #707683;
      margin: 0 5px;
      font-style: normal;
      font-weight: normal;
    }
  }

  /* naked input */
  &.MuiSelect-select--naked {
    /* remove underline */
    .MuiInput-underline {
      &::before,
      &::after {
        border: none;
      }

      &:hover:not(.Mui-disabled):before {
        border: none;
      }
    }

    /* naked - edit mode */
    .Mui-focused {
      color: ${({ theme }) => theme.colors.gray};

      .MuiInputBase-input {
        background: transparent;
      }

      .MuiInputAdornment-root {
        background: transparent;
      }

      &.MuiInput-underline::after {
        border: none;
      }
    }
  }

  /* fullWidth  */
  &.MuiSelect-select--fullWidth {
    width: 100%;
  }
`;

const ThemedStyledSelect = withTheme(StyledSelect);

setPropTypes("DrySelect", [Select, DrySelect], ThemedStyledSelect);

export default ThemedStyledSelect;
