/* eslint-disable react/no-array-index-key */
/* eslint-disable react/prop-types */
import React, { useState } from "react";
import cn from "clsx";
import makeStyles from "dry/utils/makeStyles";
import Grid from "dry/components/grid";
import Text from "dry/components/text";
import Paper from "dry/components/paper";
import Typography from "dry/components/typography";
import Button from "dry/components/button";
import InputAdornment from "dry/components/input-adornment";
import {
  DoneOutline, EditOutlined, DeleteOutlined,
  ArrowDropDown,
} from "dry/icons";
import Select from "dry/components/select";
import MenuItem from "dry/components/menu-item";
import { Divider } from "@material-ui/core";

export default {
  title: "Forms|EditableSelectGroups",
};

const useStyles = makeStyles(() => ({
  rootGrid: {
    backgroundColor: "#E5E5E5",
    height: "120vh",
    padding: "1rem",
  },

  firstTitle: {
    marginTop: "0 !important",
  },

  formTitle: {
    fontWeight: 500,
    fontSize: "21px",
    lineHeight: "21px",
    color: "#334D6E",
    marginTop: "1.5rem",
  },

  gridItemFormGroup: {
    "&.MuiGrid-item": {
      display: "flex",
    },

    "& .MuiFormGroup-root": {
      flexGrow: 1,
      flexBasis: "30%",
    },
  },

  gridItemButton: {
    display: "flex",
    justifyContent: "flex-end",
  },

  gridItemDivider: {
    "&.MuiGrid-item": {
      padding: "0 1rem",
      marginBottom: "10px",
    },
  },

  inputAdornment: {
    cursor: "pointer",
    color: "#707683",
  },

  select: {
    "& .MuiInputBase-root:before": {
      border: "none",
    },
  },
}));

export const editable = () => {
  const classes = useStyles();

  return (
    <Grid container justify="center" className={classes.rootGrid}>
      <Grid item xs={8}>

        <Paper>
          <Grid container spacing={4}>
            {/* Radio Groups */}
            <Grid item xs={12}>
              <Text component="h1">Select Groups</Text>
            </Grid>

            {/* Interior Details */}
            <Grid item xs={12}>
              <Grid container spacing={4}>
                <Grid item xs={12}>
                  <Typography variant="h6" className={cn(classes.firstTitle, classes.formTitle)}>
                    Interior Details
                  </Typography>
                </Grid>

                {["Driver Airbag", "Airconditioning", "CD Audio System"].map((item) => (
                  <Grid key={item} item xs={4} className={classes.gridItemFormGroup}>
                    <EditableSelect label={item} />
                  </Grid>
                ))}

                <Grid item xs={12} className={classes.gridItemDivider}>
                  <Divider />
                </Grid>

                {["Passenger Airbag", "Cup holders", "iPod/MP3 Compatible"].map((item) => (
                  <Grid key={item} item xs={4} className={classes.gridItemFormGroup}>
                    <EditableSelect label={item} />
                  </Grid>
                ))}

                <Grid item xs={12} className={classes.gridItemDivider}>
                  <Divider />
                </Grid>

                {["Side Airbag", "AM/FM Stereo", "Leather Seats"].map((item) => (
                  <Grid key={item} item xs={4} className={classes.gridItemFormGroup}>
                    <EditableSelect label={item} />
                  </Grid>
                ))}
              </Grid>

              <Grid container spacing={4}>
                <Grid item xs={12}>
                  <Typography variant="h6" className={cn(classes.firstTitle, classes.formTitle)}>
                    Exterior Details
                  </Typography>
                </Grid>

                {["Alloy Wheels", "Fog Lights", "Tinted Windows"].map((item) => (
                  <Grid key={item} item xs={4} className={classes.gridItemFormGroup}>
                    <EditableSelect label={item} />
                  </Grid>
                ))}
              </Grid>

              <Grid container spacing={4}>
                <Grid item xs={12}>
                  <Typography variant="h6" className={cn(classes.firstTitle, classes.formTitle)}>
                    Equipments
                  </Typography>
                </Grid>

                {["Alarm System", "Keyless Entry", "Power Windows"].map((item) => (
                  <Grid key={item} item xs={4} className={classes.gridItemFormGroup}>
                    <EditableSelect label={item} />
                  </Grid>
                ))}

                <Grid item xs={12} className={classes.gridItemDivider}>
                  <Divider />
                </Grid>

                {["Power Steering", "Engine Immobilizer", "Electric mirrors"].map((item) => (
                  <Grid key={item} item xs={4} className={classes.gridItemFormGroup}>
                    <EditableSelect label={item} />
                  </Grid>
                ))}

                <Grid item xs={12} className={classes.gridItemDivider}>
                  <Divider />
                </Grid>

                {["ABS", "Power Door Locks"].map((item) => (
                  <Grid key={item} item xs={4} className={classes.gridItemFormGroup}>
                    <EditableSelect label={item} />
                  </Grid>
                ))}
              </Grid>
            </Grid>

            <Grid item xs={12} className={classes.gridItemButton}>
              <Button
                color="primary"
                variant="contained"
              >
                Submit
              </Button>
            </Grid>

          </Grid>
        </Paper>

      </Grid>
    </Grid>
  );
};

function EditableSelect(props) {
  const { label } = props;

  const classes = useStyles();
  const [isEditMode, setIsEditMode] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [value, setValue] = useState(1);

  return (
    <Select
      label={label}
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
      <MenuItem value={1}>Yes</MenuItem>
      <MenuItem value={0}>No</MenuItem>
    </Select>
  );

  function handleClickEdit() {
    setIsEditMode(true);
  }

  function handleClickDone() {
    setIsEditMode(false);
  }
}
