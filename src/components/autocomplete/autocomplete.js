import React from "react";
import PropTypes from "prop-types";
import clsx from "clsx";
import styled from "styled-components";
import Autocomplete from "@material-ui/lab/Autocomplete";
import { withTheme } from "dry/theme";
import setPropTypes from "dry/utils/setPropTypes";

function DryAutocomplete(props) {
  const {
    className,
    ...restProps
  } = props;
  const clsxName = clsx(className, {

  });

  return (
    <Autocomplete
      {...restProps}
      className={clsxName}
    />
  );
}

DryAutocomplete.defaultProps = {
  className: "",

};

DryAutocomplete.propTypes = {
  className: PropTypes.string,

};

const StyledAutocomplete = styled(DryAutocomplete)`
 
`;

const ThemedStyledAutocomplete = withTheme(StyledAutocomplete);

setPropTypes("DryAutocomplete", [Autocomplete, DryAutocomplete], ThemedStyledAutocomplete);

export default ThemedStyledAutocomplete;
