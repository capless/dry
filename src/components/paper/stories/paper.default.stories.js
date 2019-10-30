import React from "react";
import makeStyles from "utils/makeStyles";
import Grid from "components/grid";
import Paper from "components/paper";
import Text from "components/text";
import Icon from "components/icon";
import {
  People, AssignmentTurnedIn, Notifications, Error,
} from "icons";

export default {
  title: "Library|Papers/Default",
};

const useStyles = makeStyles(() => ({
  root: {
    backgroundColor: "#E5E5E5",
    height: "90vh",
    padding: "1rem",

    "& .MuiPaper-root:hover": {
      "& svg, h1, p": {
        color: "white !important",
      },

      background: "#5CC64C",
      boxShadow: "2px 2px 20px rgba(0, 0, 0, 0.32)",
      borderRadius: "4px",
      transition: "box-shadow 1s",
      "-webkit-transition": "box-shadow 1s",
    },
  },

  grid: {
    backgroundColor: "#E5E5E5",
    height: "90vh",
    padding: "1rem",
  },
}));

export const withDefault = () => {
  const classes = useStyles();

  return (
    <Grid container spacing={6} className={classes.grid}>
      <Grid item xs={12}>
        <Paper>
          <Text component="h1">
          This is a Paper.
          </Text>
          <Text component="p">
          Paper can be used to build surface or other elements for your application.
          </Text>
        </Paper>
      </Grid>
    </Grid>
  );
};

export const withStatuses = () => {
  const classes = useStyles();

  return (
    <Grid container spacing={6} className={classes.root}>
      {/* Clients */}
      <Grid item xs={3}>
        <Paper>
          <Grid container justify="center" textAlign="center">
            <Grid item xs={12}>
              <Icon component={People} fontSize="xlarge" color="#C2CFE0" />
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
              <Icon component={AssignmentTurnedIn} fontSize="xlarge" color="#C2CFE0" />
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
              <Icon component={Notifications} fontSize="xlarge" color="#C2CFE0" />
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
              <Icon component={Error} fontSize="xlarge" color="#C2CFE0" />
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
