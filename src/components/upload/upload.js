import React, { useRef, useState } from "react";
import Proptypes from "prop-types";
import clsx from "clsx";
import styled from "styled-components";
import TextField from "components/textfield";
import InputLabel from "components/input-label";
import FormControl from "components/form-control";
import Button from "components/button";
import { withTheme } from "theme";

function DryUpload(props) {
  const {
    className,
    label,
    accept,
    buttonLabel,
  } = props;
  const clsxName = clsx(className, {
  });

  const inputRef = useRef();
  const [value, setValue] = useState({ name: "" });

  return (
    <FormControl className={clsxName}>
      <InputLabel label={label} />
      <div className="inputButton-group">
        <TextField
          disabled
          hiddenLabel
          variant="outlined"
          value={value.name}
          onChange={() => {}}
        />
        <div className="fileInput-picker">
          <input
            ref={inputRef}
            type="file"
            id="upload"
            name="upload"
            accept={accept}
            onChange={handleChange}
          />
        </div>
        <Button
          variant="outlined"
          onClick={handleClick}
        >
          {buttonLabel}
        </Button>
      </div>
    </FormControl>
  );

  function handleClick() {
    if (inputRef.current) {
      inputRef.current.click();
    }
  }

  function handleChange(evt) {
    const { files: [file] } = evt.target;
    if (file) {
      setValue(file);
    }
  }
}

DryUpload.defaultProps = {
  className: "",
  accept: "*",
  label: "File Browser",
  buttonLabel: "Browse",
};

DryUpload.propTypes = {
  className: Proptypes.string,
  accept: Proptypes.string,
  label: Proptypes.node,
  buttonLabel: Proptypes.node,
};

const StyledUpload = styled(DryUpload)`
  &.MuiFormControl-root {
    width: 100%;

    /* label */
    .MuiInputLabel-formControl {
      top: auto;
      left: auto;
      position: inherit;
      transform: none;
      margin-bottom: 8px;
      font-family: Roboto;
      font-style: normal;
      font-weight: normal;
      font-size: 12px;
      line-height: 13px;
      color: #90A0B7;
    }

    /* group */
    .inputButton-group {
      display: flex;
    }

    /* input type="file" */
    .fileInput-picker {
      z-index: -1;
      position: absolute;
      visibility: hidden;
    }

    /* text field */
    .MuiInputBase-root {
      height: 42px;

      input {
        text-overflow: ellipsis;
        color: #707683;
      }

      fieldset {
        border-radius: 0;
        border-right: none;
        border-color: #C2CFE0;
      }
    }

    /* button */
    .MuiButtonBase-root {
      height: 40px;
      border-radius: 0;
      background: #EDEDED;
      border: 1px solid #C2CFE0;
      font-family: Roboto;
      font-style: normal;
      font-weight: normal;
      font-size: 14px;
      line-height: 16px;
      color: #707683;
    }
  }
`;

export default withTheme(StyledUpload);
