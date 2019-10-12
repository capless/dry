import React, { useState, useRef } from "react";
import { ArrowDropDown } from "icons";
import Select from "components/select";
import Menu from "components/menu";
import MenuItem from "components/menu-item";
import InputLabel from "components/input-label";

export default {
  title: "Library|Selects/Default",
};

export const withLabel = () => (
  <Select
    label="Title"
    value={0}
    onChange={() => {}}
  >
    <MenuItem value={0}>Select category</MenuItem>
    <MenuItem value={1}>Category 1</MenuItem>
    <MenuItem value={2}>Category 2</MenuItem>
    <MenuItem value={3}>Category 3</MenuItem>
    <MenuItem value={4}>Category 4</MenuItem>
  </Select>
);


export const withoutLabel = () => (
  <Select
    displayEmpty
    value={10}
    width="50px"
    onChange={() => {}}
  >
    <MenuItem value={10}>10</MenuItem>
    <MenuItem value={20}>20</MenuItem>
    <MenuItem value={50}>50</MenuItem>
    <MenuItem value={100}>100</MenuItem>
  </Select>
);

export const sortOnTop = () => {
  const inputRef = useRef();
  const [value, setValue] = useState("New on Top");
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleOpen = () => {
    setAnchorEl(inputRef.current);
  };

  const handleSelectItem = (item) => {
    setValue(item);
    setAnchorEl(null);
  };

  const popOverProps = {
    anchorOrigin: {
      vertical: "bottom",
      horizontal: "right",
    },
    transformOrigin: {
      vertical: "top",
      horizontal: "right",
    },
  };

  return (
    <>
      <InputLabel
        label="Sort:"
        value={value}
        onClick={handleOpen}
        rightIcon={<ArrowDropDown ref={inputRef} onClick={handleOpen} />}
      />
      <Menu
        keepMounted
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleClose}
        {...popOverProps}
      >
        {["New on Top", "Oldest to Newest"].map((item) => (
          <MenuItem
            key={item}
            value={item}
            selected={item === value}
            onClick={() => handleSelectItem(item)}
          >
            {item}
          </MenuItem>
        ))}
      </Menu>
    </>
  );
};
