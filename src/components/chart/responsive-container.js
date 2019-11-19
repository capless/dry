import React from "react";
import PropTypes from "prop-types";
import clsx from "clsx";
import styled from "styled-components";
import { ResponsiveContainer } from "recharts";
import { withTheme } from "theme";

function DryResponsiveContainer(props) {
  const {
    className,
    ...restProps
  } = props;
  const clsxName = clsx(className, {
  });

  return (
    <ResponsiveContainer
      {...restProps}
      className={clsxName}
    />
  );
}

DryResponsiveContainer.defaultProps = {
  className: "",
};

DryResponsiveContainer.propTypes = {
  className: PropTypes.string,
};

const StyledResponsiveContainer = styled(DryResponsiveContainer)`
  font-family: Roboto;
`;

export default withTheme(StyledResponsiveContainer);
