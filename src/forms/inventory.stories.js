/* eslint-disable react/prop-types */
import React, { useState } from "react";
import makeStyles from "dry/utils/makeStyles";
import Grid from "dry/components/grid";
import InputBase from "dry/components/input-base";
import Paper from "dry/components/paper";
import IconButton from "dry/components/icon-button";
import Badge from "dry/components/badge";
import Text from "dry/components/text";
import Tabs from "dry/components/tabs";
import Tab from "dry/components/tab";
import Box from "dry/components/box";
import { Search as SearchIcon, NotificationsNoneTwoTone } from "dry/icons";


export default {
  title: "Forms|Inventory",
};

const useStyles = makeStyles((theme) => ({
  grid: {
    backgroundColor: "#E5E5E5",
    height: "100%",
  },
  box: {
    padding: theme.spacing(4),
  },
}));

export const all = () => {
  const classes = useStyles();
  const [value, setValue] = useState(0);

  return (
    <Grid container spacing={1} className={classes.grid}>
      <Grid item xs={12}>
        <GlobalSearch classes={classes} />

        <Box className={classes.box}>
          <Text component="h3">Inventory &gt; 2011 Volkswagen Jetta</Text>

          <Box>
            <Tabs
              value={value}
              onChange={handleChange}
              TabIndicatorProps={{ style: { display: "none" } }}
            >
              <Tab disableRipple label="Overview" />
              <Tab disableRipple label="Expenses" />
              <Tab disableRipple label="Inquiries" />
              <Tab disableRipple label="Paperwork" />
            </Tabs>
          </Box>

          <Box>
            <PaperwithStatuses />
          </Box>
        </Box>
      </Grid>

    </Grid>
  );

  function handleChange(evt, newValue) {
    setValue(newValue);
  }
};

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

const useStylesPaper = makeStyles(() => ({
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

    "&.MuiGrid-container": {

      alignContent: "flex-start !important",
    },
  },

  grid: {
    backgroundColor: "#E5E5E5",
    height: "90vh",
    padding: "1rem",
  },
}));
function PaperwithStatuses() {
  const classes = useStylesPaper();

  return (
    <Grid container spacing={4} className={classes.root}>
      <Grid item xs={4}>
        <Paper>
          <Grid container justify="center" textAlign="left">
            <Grid item xs={12}>
              <Text component="p" fontSize="12px" margin="4px" color="#99A6B7">
              Purchase Price
              </Text>
            </Grid>
            <Grid item xs={12}>
              <Text component="h1" fontSize="24px" fontWeight="bold" margin="4px">
              $2,200
              </Text>
            </Grid>
          </Grid>
        </Paper>
      </Grid>

      <Grid item xs={4}>
        <Paper>
          <Grid container justify="center" textAlign="left">
            <Grid item xs={12}>
              <Text component="p" fontSize="12px" margin="4px" color="#99A6B7">
              Expenses Total
              </Text>
            </Grid>
            <Grid item xs={12}>
              <Text component="h1" fontSize="24px" fontWeight="bold" margin="4px">
              $728
              </Text>
            </Grid>
          </Grid>
        </Paper>
      </Grid>

      <Grid item xs={4}>
        <Paper>
          <Grid container justify="center" textAlign="left">
            <Grid item xs={12}>
              <Text component="p" fontSize="12px" margin="4px" color="#99A6B7">
              Projected Sales Price
              </Text>
            </Grid>
            <Grid item xs={12}>
              <Text component="h1" fontSize="24px" fontWeight="bold" margin="4px">
              $4,250
              </Text>
            </Grid>
          </Grid>
        </Paper>
      </Grid>

      <Grid item xs={4}>
        <Paper>
          <Grid container justify="center" textAlign="left">
            <Grid item xs={12}>
              <Text component="p" fontSize="12px" margin="4px" color="#99A6B7">
              Projected Profit
              </Text>
            </Grid>
            <Grid item xs={12}>
              <Text component="h1" fontSize="24px" fontWeight="bold" margin="4px">
              $1,252
              </Text>
            </Grid>
          </Grid>
        </Paper>
      </Grid>

      <Grid item xs={4}>
        <Paper>
          <Grid container justify="center" textAlign="left">
            <Grid item xs={12}>
              <Text component="p" fontSize="12px" margin="4px" color="#99A6B7">
              ROI
              </Text>
            </Grid>
            <Grid item xs={12}>
              <Text component="h1" fontSize="24px" fontWeight="bold" margin="4px">
              45.15%
              </Text>
            </Grid>
          </Grid>
        </Paper>
      </Grid>

      <Grid item xs={4}>
        <Paper>
          <Grid container justify="center" textAlign="left">
            <Grid item xs={12}>
              <Text component="p" fontSize="12px" margin="4px" color="#99A6B7">
              Time Since Purchase
              </Text>
            </Grid>
            <Grid item xs={12}>
              <Text component="h1" fontSize="24px" fontWeight="bold" margin="4px">
              15 Days
              </Text>
            </Grid>
          </Grid>
        </Paper>
      </Grid>
    </Grid>
  );
}
