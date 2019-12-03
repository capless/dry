import React, { useState } from "react";
import makeStyles from "dry/utils/makeStyles";
import {
  ArrowDropDown, DoneOutline, EditOutlined, DeleteOutlined,
} from "dry/icons";
import Select from "dry/components/select";
import MenuItem from "dry/components/menu-item";
import InputAdornment from "dry/components/input-adornment";

export default {
  title: "Library|Selects/Editable",
};

const useStyles = makeStyles(() => ({
  select: {
    minWidth: "0 !important",
  },

  inputAdornment: {
    cursor: "pointer",
    color: "#707683",
  },
}));

export const withLabel = () => {
  const classes = useStyles();
  const [isEditMode, setIsEditMode] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [value, setValue] = useState(0);

  return (
    <Select
      label="Title"
      open={isOpen}
      value={value}
      disabled={!isEditMode}
      onChange={(evt) => setValue(evt.target.value)}
      onClose={() => setIsOpen(false)}
      onOpen={() => setIsOpen(true)}
      className={classes.select}
      endAdornment={(
        <>
          {isEditMode ? (
            <>
              <InputAdornment position="end" className={classes.inputAdornment}>
                <ArrowDropDown fontSize="small" onClick={() => setIsOpen(!isOpen)} />
              </InputAdornment>
              <InputAdornment position="end" className={classes.inputAdornment}>
                <DoneOutline fontSize="small" onClick={handleClickDone} />
              </InputAdornment>
            </>
          ) : (
            <InputAdornment position="end" className={classes.inputAdornment}>
              <EditOutlined fontSize="small" onClick={handleClickEdit} />
            </InputAdornment>
          )}
          <InputAdornment position="end" className={classes.inputAdornment}>
            <DeleteOutlined fontSize="small" />
          </InputAdornment>
        </>
      )}
    >
      <MenuItem value={0}>Select category</MenuItem>
      <MenuItem value={1}>Category 1</MenuItem>
      <MenuItem value={2}>Category 2</MenuItem>
      <MenuItem value={3}>Category 3</MenuItem>
      <MenuItem value={4}>Category 4</MenuItem>
    </Select>
  );

  function handleClickEdit() {
    setIsEditMode(true);
  }

  function handleClickDone() {
    setIsEditMode(false);
  }
};
