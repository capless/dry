/* eslint-disable import/named */
import React from "react";
import makeStyles from "dry/utils/makeStyles";
import { Image, Work, BeachAccess } from "dry/icons";
import List from "dry/components/list";
import ListItem from "dry/components/list-item";
import ListItemText from "dry/components/list-item-text";
import Grid from "dry/components/grid";
import Avatar from "dry/components/avatar";
import ListItemAvatar from "dry/components/list-item-avatar";


export default {
  title: "Library|Lists/Avatars",
  component: Avatar
};

const useStyles = makeStyles(() => ({
  grid: {
    backgroundColor: "#E5E5E5",
    height: "90vh",
    padding: "1rem",
  },

  menuGrid: {
    backgroundColor: "#E5E5E5",
    height: "90vh",
    padding: 0,
  },

  menuGridItem: {
    background: "#FFF",
    margin: "2.5rem",
    padding: "0 !important",

    "& .MuiListItem-gutters": {
      paddingLeft: "32px",
    },

    "& .MuiListItemText-secondary": {
      marginTop: "6px",
    },
  },
  list: {
    "& .MuiListItemText-root": {
      marginLeft: 6,
    },
  },
}));

export const withAvatar = () => {
  const classes = useStyles();

  return (
    <Grid container spacing={6} className={classes.menuGrid}>
      <Grid item xs={3} className={classes.menuGridItem}>
        <List className={classes.list}>
          <ListItem>
            <ListItemAvatar>
              <Avatar>
                <Image />
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary="Photos" secondary="Jan 9, 2014" />
          </ListItem>
          <ListItem>
            <ListItemAvatar>
              <Avatar>
                <Work />
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary="Work" secondary="Jan 7, 2014" />
          </ListItem>
          <ListItem>
            <ListItemAvatar>
              <Avatar>
                <BeachAccess />
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary="Vacation" secondary="July 20, 2014" />
          </ListItem>
        </List>
      </Grid>
    </Grid>
  );
};
