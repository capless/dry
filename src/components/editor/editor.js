import React from "react";
import Proptypes from "prop-types";
import clsx from "clsx";
import styled from "styled-components";
import { Editor } from "react-draft-wysiwyg";
import { withTheme } from "theme";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";

function DryGrid(props) {
  const {
    className,
    ...restProps
  } = props;
  const clsxName = clsx("wrapperClassName", className, {
  });

  return (
    <Editor
      {...restProps}
      wrapperClassName={clsxName}
      toolbarClassName="toolbarClassName"
      editorClassName="editorClassName"
    />
  );
}

DryGrid.defaultProps = {
  className: "",
};

DryGrid.propTypes = {
  className: Proptypes.string,

};

const StyledGrid = styled(DryGrid)`
  &.wrapperClassName {
    margin: 8px 0;
    font-family: Roboto;

    .toolbarClassName {
      border: 1px solid #D3D8DD;
    }

    .editorClassName {
      margin-top: -6px;
      min-height: 200px;
      border: 1px solid #D3D8DD;
      border-top: 0;

      .public-DraftStyleDefault-block {
        margin: .5em;
      }
    }
  }
`;

export default withTheme(StyledGrid);
