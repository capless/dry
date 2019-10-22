import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "components/grid";
import Paper from "components/paper";
import Text from "components/text";
import Icon from "components/icon";
import PeopleIcon from "@material-ui/icons/People";
import AssignmentTurnedInIcon from "@material-ui/icons/AssignmentTurnedIn";
import NotificationsIcon from "@material-ui/icons/Notifications";
import ErrorIcon from "@material-ui/icons/Error";

export default {
  title: "Library|Papers/Default",
};

export const withDefault = () => (
  <Paper>
    <Text component="h1">
      This is a Paper.
    </Text>
    <Text component="p">
      Paper can be used to build surface or other elements for your application.
    </Text>
  </Paper>
);

const useStyles = makeStyles(() => ({
  root: {
    color: "red !important",

    "& .MuiGrid-item:hover": {
      "& svg, h1, p": {
        color: "white !important",
      },
    },
  },
}));

export const withStatuses = () => {
  const classes = useStyles();

  return (
    <Grid container spacing={6} className={classes.root}>
      {/* Clients */}
      <Grid item xs={3}>
        <Paper>
          <Grid container justify="center" textAlign="center">
            <Grid item xs={12}>
              <Icon component={PeopleIcon} fontSize="xlarge" color="#C2CFE0" />
            </Grid>
            <Grid item xs={12}>
              <Text component="h1" fontSize="24px" fontWeight="bold" margin="4px">
               128
              </Text>
            </Grid>
            <Grid item xs={12}>
              <Text component="p" fontSize="12px" margin="4px" color="#99A6B7">
                Clients
              </Text>
            </Grid>
          </Grid>
        </Paper>
      </Grid>

      {/* Completed */}
      <Grid item xs={3}>
        <Paper>
          <Grid container justify="center" textAlign="center">
            <Grid item xs={12}>
              <Icon component={AssignmentTurnedInIcon} fontSize="xlarge" color="#C2CFE0" />
            </Grid>
            <Grid item xs={12}>
              <Text component="h1" fontSize="24px" fontWeight="bold" margin="4px">
               32
              </Text>
            </Grid>
            <Grid item xs={12}>
              <Text component="p" fontSize="12px" margin="4px" color="#99A6B7">
                Completed
              </Text>
            </Grid>
          </Grid>
        </Paper>
      </Grid>

      {/* Notifications */}
      <Grid item xs={3}>
        <Paper>
          <Grid container justify="center" textAlign="center">
            <Grid item xs={12}>
              <Icon component={NotificationsIcon} fontSize="xlarge" color="#C2CFE0" />
            </Grid>
            <Grid item xs={12}>
              <Text component="h1" fontSize="24px" fontWeight="bold" margin="4px">
               2
              </Text>
            </Grid>
            <Grid item xs={12}>
              <Text component="p" fontSize="12px" margin="4px" color="#99A6B7">
              Notifications
              </Text>
            </Grid>
          </Grid>
        </Paper>
      </Grid>

      {/* Reports */}
      <Grid item xs={3}>
        <Paper>
          <Grid container justify="center" textAlign="center">
            <Grid item xs={12}>
              <Icon component={ErrorIcon} fontSize="xlarge" color="#C2CFE0" />
            </Grid>
            <Grid item xs={12}>
              <Text component="h1" fontSize="24px" fontWeight="bold" margin="4px">
               4
              </Text>
            </Grid>
            <Grid item xs={12}>
              <Text component="p" fontSize="12px" margin="4px" color="#99A6B7">
              Reports
              </Text>
            </Grid>
          </Grid>
        </Paper>
      </Grid>
    </Grid>
  );
};
