import React from "react";
import makeStyles from "dry/utils/makeStyles";
import Grid from "dry/components/grid";
import InputBase from "dry/components/input-base";
import Paper from "dry/components/paper";
import IconButton from "dry/components/icon-button";
import Badge from "dry/components/badge";
import { Search as SearchIcon, NotificationsNoneTwoTone } from "dry/icons";

export default {
  title: "Library|Inputs/GlobalSearch",
};

const useStyles = makeStyles((theme) => ({
  grid: {
    backgroundColor: "#E5E5E5",
    height: "90vh",
  },
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

export const all = () => {
  const classes = useStyles();

  return (
    <Grid container spacing={6} className={classes.grid}>
      <Grid item xs={12}>
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
      </Grid>
    </Grid>
  );
};
