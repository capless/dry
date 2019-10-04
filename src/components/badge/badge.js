import React from "react";
import styled from "styled-components";
import Badge from "@material-ui/core/Badge";

function DryBadge(props) {
  return <Badge {...props} />;
}

const StyledDryBadge = styled(DryBadge)`
  .MuiBadge-badge {
    width: ${({ width }) => width};
    height: ${({ height }) => height};
    background: ${({ background }) => background};
    border-radius: ${({ borderRadius }) => borderRadius || "100%"};
    box-shadow: ${({ boxShadow }) => boxShadow || "0px 4px 4px rgba(0, 0, 0, 0.08);"};
  }
`;

export default StyledDryBadge;
