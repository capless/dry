/* eslint-disable import/named */
import React from "react";
import makeStyles from "dry/utils/makeStyles";
import Box from "dry/components/box";
import Grid from "dry/components/grid";
import IconButton from "dry/components/icon-button";
import Tooltip from "dry/components/tooltip";
import { Add, Edit, Delete } from "dry/icons";

export default {
  title: "Library|Tooltip/Default",
};

const useStyles = makeStyles(() => ({
  box: {
    backgroundColor: "#E5E5E5",
    padding: "1rem",
    height: "auto",
  },
}));

export const withDefault = () => {
  const classes = useStyles();

  return (
    <Box className={classes.box}>
      <Grid container spacing={6}>
        <Grid item xs={12}>
          <Tooltip title="Add">
            <IconButton aria-label="add">
              <Add />
            </IconButton>
          </Tooltip>

          <Tooltip title="Edit">
            <IconButton aria-label="edit">
              <Edit />
            </IconButton>
          </Tooltip>

          <Tooltip title="Delete">
            <IconButton aria-label="delete">
              <Delete />
            </IconButton>
          </Tooltip>
        </Grid>
      </Grid>
    </Box>
  );
};
