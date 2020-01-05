/* eslint-disable import/named */
/* eslint-disable max-len */
/* eslint-disable react/prop-types */
import React, { useState } from "react";
import makeStyles from "dry/utils/makeStyles";
import Grid from "dry/components/grid";
import InputBase from "dry/components/input-base";
import Paper from "dry/components/paper";
import IconButton from "dry/components/icon-button";
import Badge from "dry/components/badge";
import Text from "dry/components/text";
import Box from "dry/components/box";
import TextField from "dry/components/textfield";
import FormLabel from "dry/components/form-label";
import FormControlLabel from "dry/components/form-control-label";
import FormGroup from "dry/components/form-group";
import RadioGroup from "dry/components/radio-group";
import Radio from "dry/components/radio";
import { TwitterPicker } from "dry/components/color-picker/react-color";
import {
  Search as SearchIcon, NotificationsNoneTwoTone,
} from "dry/icons";

export default {
  title: "Forms|Vehicles",
};

const useStyles = makeStyles((theme) => ({
  grid: {
    backgroundColor: "#E5E5E5",
    height: "150vh",
  },
  box: {
    padding: theme.spacing(4),
  },
  title: {
    fontWeight: "bold",
    fontSize: 20,
    lineHeight: "23px",
    letterSpacing: "0.01em",
    color: "#334D6E",
  },
  titleButton: {
    marginBottom: 60,
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  startButton: {
    margin: "0 10px",
    width: 246,
  },
  tabs: {
    minHeight: 0,
    paddingBottom: 16,
  },
  tab: {
    "&.MuiButtonBase-root": {
      minWidth: "unset",
      padding: "0 1rem",

      "&:first-child": {
        paddingLeft: 0,
      },
    },
  },
  image: {
    width: "100%",
    height: "100%",
    maxHeight: "100%",
  },
  label: {
    marginBottom: 8,
    fontWeight: "normal",
    fontSize: 11,
    lineHeight: "13px",
    color: "#90A0B7",
  },
  labelValue: {
    fontSize: 14,
    lineHeight: "16px",
    letterSpacing: "0.01em",
    color: "#707683",
  },
  taglineTitle: {
    fontWeight: "bold",
    fontSize: 18,
    lineHeight: "21px",
    color: "#334D6E",
  },
  description: {
    fontWeight: "normal",
    fontSize: 14,
    lineHeight: "24px",
    color: "#707683",
  },
  color: {
    width: 30,
    height: 30,
    borderRadius: 4,
    cursor: "pointer",
  },
  colorPicker: {
    marginLeft: "-6px",
    marginTop: 6,
  },
}));

export const all = () => {
  const classes = useStyles();

  return (
    <Grid container spacing={1} className={classes.grid}>
      <Grid item xs={12} className={classes.gridItem}>
        <GlobalSearch />

        <Grid container>
          <Grid item xs={8} className={classes.gridItem}>
            <Text component="h3" className={classes.title}>Add Vehicles</Text>
            <Text component="h3" className={classes.title}>Vehicle Details</Text>

            <Grid container spacing={4}>
              <Grid item xs={6} className={classes.gridItem}>
                <TextField
                  fullWidth
                  id="id"
                  label="Car Model"
                  defaultValue="Toyota Corolla Altis"
                />
              </Grid>
              <Grid item xs={6} className={classes.gridItem}>
                <TextField
                  fullWidth
                  id="id"
                  label="Year Model"
                  defaultValue="Select Year"
                />
              </Grid>

              <Grid item xs={6} className={classes.gridItem}>
                <TextField
                  fullWidth
                  id="id"
                  label="Condition"
                  defaultValue="Select Condition"
                />
              </Grid>
              <Grid item xs={6} className={classes.gridItem}>
                <TextField
                  fullWidth
                  id="id"
                  label="Mileage"
                  defaultValue="Add Mileage"
                />
              </Grid>

              <Grid item xs={12} className={classes.gridItem}>
                <FormGroup>
                  <FormLabel component="legend">Transmission</FormLabel>
                  <RadioGroup
                    name="Transmission"
                    defaultValue="Manual"
                  >
                    <FormControlLabel
                      label="Manual"
                      control={<Radio value="Manual" />}
                    />
                    <FormControlLabel
                      label="Automatic"
                      control={<Radio value="Automatic" />}
                    />
                  </RadioGroup>
                </FormGroup>
              </Grid>

              <Grid item xs={12} className={classes.gridItem}>
                <FormGroup>
                  <FormLabel component="legend">Fuel Type</FormLabel>
                  <RadioGroup
                    name="Fuel Type"
                    defaultValue="Gasoline"
                  >
                    <FormControlLabel
                      label="Gasoline"
                      control={<Radio value="Gasoline" />}
                    />
                    <FormControlLabel
                      label="Diesel"
                      control={<Radio value="Diesel" />}
                    />
                  </RadioGroup>
                </FormGroup>
              </Grid>

              <Grid item xs={6} className={classes.gridItem}>
                <TextField
                  fullWidth
                  id="id"
                  label="Price"
                  defaultValue="$"
                />
              </Grid>
              <Grid item xs={6} className={classes.gridItem}>
                <ColorPicker />
              </Grid>

            </Grid>
          </Grid>


          <Grid item xs={4} className={classes.gridItem}>
            <Text component="h3" className={classes.title}>Upload Photo</Text>
          </Grid>
        </Grid>

      </Grid>
    </Grid>
  );
};

function ColorPicker() {
  const classes = useStyles();
  const [color, setColor] = useState({ hex: "#E92323" });
  const [isPickerVisible, setIsPickerVisible] = useState(false);

  return (
    <Box>
      <Box style={{ background: color.hex }} className={classes.color} onClick={handleBoxClick} />
      {isPickerVisible && <TwitterPicker color={color.hex} className={classes.colorPicker} onChange={handleColorChange} />}
    </Box>
  );

  function handleBoxClick() {
    setIsPickerVisible((prevVisible) => !prevVisible);
  }

  function handleColorChange(colorValue) {
    setColor(colorValue);
    setIsPickerVisible(false);
  }
}

const useStylesGlobalSearch = makeStyles((theme) => ({
  paper: {
    padding: "2px 4px",
    display: "flex",
    alignItems: "center",

    "&.MuiPaper-root": {
      background: "#EDEDED",
      borderRadius: 0,
      padding: ".5rem",
    },
  },
  input: {
    marginLeft: theme.spacing(1),
    flex: 1,
  },
  iconButton: {
    padding: 10,
  },
  iconSearch: {
    fill: "#C2CFE0",
  },
  iconNotification: {
    fill: "#C2CFE0",

    "& path:first-child": {
      fill: "#FFF",
    },
  },
  badge: {
    "& .MuiBadge-anchorOriginTopRightCircle": {
      top: "25%",
      right: "25%",
    },
  },
  divider: {
    height: 28,
    margin: 4,
  },
}));
function GlobalSearch() {
  const classes = useStylesGlobalSearch();

  return (
    <Paper component="form" className={classes.paper}>
      <IconButton className={classes.iconButton} aria-label="menu">
        <SearchIcon className={classes.iconSearch} />
      </IconButton>
      <InputBase
        className={classes.input}
        placeholder="Global Search"
        inputProps={{ "aria-label": "search google maps" }}
      />
      <IconButton className={classes.iconButton} aria-label="notifications">
        <Badge
          overlap="circle"
          badgeContent=""
          height="10px"
          minWidth="10px"
          background="#5CC64C"
          className={classes.badge}
        >
          <NotificationsNoneTwoTone className={classes.iconNotification} />
        </Badge>
      </IconButton>
    </Paper>
  );
}
