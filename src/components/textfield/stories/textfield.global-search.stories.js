import React from "react";
import makeStyles from "utils/makeStyles";
import Grid from "components/grid";
import InputBase from "@material-ui/core/InputBase";
import Paper from "components/paper";
import IconButton from "components/icon-button";
import Badge from "components/badge";
import Divider from "components/divider";
import { Search as SearchIcon, NotificationsNone as NotificationsNoneIcon } from "icons";

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
    width: "90%",
    background: "#EDEDED",
  },
  input: {
    marginLeft: theme.spacing(1),
    flex: 1,
  },
  iconButton: {
    padding: 10,
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
            <SearchIcon />
          </IconButton>
          <InputBase
            className={classes.input}
            placeholder="Global Search"
            inputProps={{ "aria-label": "search google maps" }}
          />
          <Divider className={classes.divider} orientation="vertical" />
          <IconButton className={classes.iconButton} aria-label="notifications">
            <Badge
              overlap="circle"
              badgeContent=""
              height="10px"
              minWidth="10px"
              background="#5CC64C"
            >
              <NotificationsNoneIcon />
            </Badge>
          </IconButton>
        </Paper>
      </Grid>
    </Grid>
  );
};
