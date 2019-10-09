import React from "react";
import Select from "components/select";
import MenuItem from "components/menu-item";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";


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

export const sortOnTop = () => (
  <>
    <InputLabel>
      Sort: New on Top
    </InputLabel>
    <Select
      displayEmpty
      value={10}
      width="200px"
      onChange={() => {}}
    >
      <MenuItem value={10}>New on Top</MenuItem>
      <MenuItem value={20}>Oldest to Newest</MenuItem>
    </Select>
  </>
);
