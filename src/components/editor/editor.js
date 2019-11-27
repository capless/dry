import React from "react";
import PropTypes from "prop-types";
import clsx from "clsx";
import styled from "styled-components";
import { Editor } from "react-draft-wysiwyg";
import { withTheme } from "dry/theme";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import setPropTypes from "dry/utils/setPropTypes";

function DryEditor(props) {
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

DryEditor.defaultProps = {
  className: "",
};

DryEditor.propTypes = {
  className: PropTypes.string,

};

const StyledEditor = styled(DryEditor)`
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

const ThemedStyledEditor = withTheme(StyledEditor);

setPropTypes("DryEditor", [Editor, DryEditor], ThemedStyledEditor);

export default ThemedStyledEditor;
