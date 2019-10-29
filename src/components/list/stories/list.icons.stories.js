import React, { useState } from "react";
import makeStyles from "utils/makeStyles";
import {
  MoreVert,
  MoreHoriz,
  MailOutline,
  ViewWeekOutlined,
  DashboardOutlined,
  ViewAgendaOutlined,
  PersonOutlineOutlined,
  ChatBubbleOutlineOutlined,
} from "icons";
import Badge from "components/badge";
import IconButton from "components/icon-button";
import List from "components/list";
import ListItem from "components/list-item";
import ListItemIcon from "components/list-item-icon";
import ListItemText from "components/list-item-text";
import ListItemSecondaryAction from "components/list-item-secondary-action";
import Divider from "components/divider";
import Grid from "components/grid";
import Paper from "components/paper";
import Text from "components/text";


export default {
  title: "Library|Lists/Icons",
};

export const withIcons = () => {
  const [selected, setSelected] = useState("Dashboard");

  return (
    <List>
      <ListItem
        selected={selected === "Dashboard"}
        onClick={() => handleClick("Dashboard")}
      >
        <ListItemIcon>
          <DashboardOutlined fontSize="small" />
        </ListItemIcon>
        <ListItemText primary="Dashboard" />
      </ListItem>
      <ListItem
        selected={selected === "Performance"}
        onClick={() => handleClick("Performance")}
      >
        <ListItemIcon>
          <ViewAgendaOutlined fontSize="small" />
        </ListItemIcon>
        <ListItemText primary="Performance" />
      </ListItem>
      <ListItem
        selected={selected === "Email"}
        onClick={() => handleClick("Email")}
      >
        <ListItemIcon>
          <MailOutline fontSize="small" />
        </ListItemIcon>
        <ListItemText primary="Email" />
      </ListItem>
      <ListItem
        selected={selected === "Contacts"}
        onClick={() => handleClick("Contacts")}
      >
        <ListItemIcon>
          <PersonOutlineOutlined fontSize="small" />
        </ListItemIcon>
        <ListItemText primary="Contacts" />
      </ListItem>
      <ListItem
        selected={selected === "Chat"}
        onClick={() => handleClick("Chat")}
      >
        <ListItemIcon>
          <ChatBubbleOutlineOutlined fontSize="small" />
        </ListItemIcon>
        <ListItemText primary="Chat" />
      </ListItem>
      <ListItem
        selected={selected === "Sales"}
        onClick={() => handleClick("Sales")}
      >
        <ListItemIcon>
          <ViewWeekOutlined fontSize="small" />
        </ListItemIcon>
        <ListItemText primary="Sales" />
      </ListItem>
      <Divider />
      <ListItem
        selected={selected === "Settings"}
        onClick={() => handleClick("Settings")}
      >
        <ListItemIcon>
          <MoreHoriz fontSize="small" />
        </ListItemIcon>
        <ListItemText primary="Settings" />
      </ListItem>
    </List>
  );

  function handleClick(selectedItem) {
    setSelected(selectedItem);
  }
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

  selectInput: {
    fontSize: "12px",
    lineHeight: "14px",
    color: "#90A0B7",
    justifyContent: "flex-end",
  },

  divider: {
    margin: ".5rem auto 1rem auto",
  },

  moreOptions: {
    fill: "#C2CFE0 !important",
  },
}));

export const withIconsInPaper = () => {
  const [selected, setSelected] = useState("Dashboard");
  const classes = useStyles();

  return (
    <Grid container spacing={6} className={classes.grid}>
      <Grid item xs={4}>
        <Paper>
          <Grid container alignItems="center">
            <Grid item xs={12}>
              <Text
                component="h2"
                style={{
                  fontSize: "20px",
                  margin: "0",
                  fontWeight: "bold",
                  color: "#334D6E",
                }}
              >
                Notifications
              </Text>
            </Grid>
            <Grid item xs={12} className={classes.divider}>
              <Divider light />
            </Grid>
            <Grid item xs={12}>
              <List>
                <ListItem
                  selected={selected === "Dashboard"}
                  onClick={() => handleClick("Dashboard")}
                >
                  <ListItemIcon>
                    <Badge
                      overlap="circle"
                      badgeContent=""
                      height="10px"
                      minWidth="10px"
                      background="#5CC64C"
                    >
                      <MailOutline />
                    </Badge>
                  </ListItemIcon>
                  <ListItemText
                    primary="curtis.smith@snailmail.com"
                    secondary="Toyota Corolla Altis Inquiry"
                  />
                  <ListItemSecondaryAction>
                    <IconButton edge="end" size="small">
                      <MoreVert className={classes.moreOptions} />
                    </IconButton>
                  </ListItemSecondaryAction>
                </ListItem>

                <ListItem
                  selected={selected === "Performance"}
                  onClick={() => handleClick("Performance")}
                >
                  <ListItemIcon>
                    <Badge
                      overlap="circle"
                      badgeContent=""
                      height="10px"
                      minWidth="10px"
                      background="#5CC64C"
                    >
                      <MailOutline />
                    </Badge>
                  </ListItemIcon>
                  <ListItemText
                    primary="john.doe@gmail.com"
                    secondary="Nissan Altima Inquiry"
                  />
                  <ListItemSecondaryAction>
                    <IconButton edge="end" size="small">
                      <MoreVert className={classes.moreOptions} />
                    </IconButton>
                  </ListItemSecondaryAction>
                </ListItem>

                <ListItem
                  selected={selected === "Email"}
                  onClick={() => handleClick("Email")}
                >
                  <ListItemIcon>
                    <Badge
                      overlap="circle"
                      badgeContent=""
                      height="10px"
                      minWidth="10px"
                      background="#5CC64C"
                    >
                      <MailOutline />
                    </Badge>
                  </ListItemIcon>
                  <ListItemText
                    primary="jDenzhyke@yahoo.com"
                    secondary="Nissan Ultima Inquiry"
                  />
                  <ListItemSecondaryAction>
                    <IconButton edge="end" size="small">
                      <MoreVert className={classes.moreOptions} />
                    </IconButton>
                  </ListItemSecondaryAction>
                </ListItem>

                <ListItem
                  selected={selected === "Contacts"}
                  onClick={() => handleClick("Contacts")}
                >
                  <ListItemIcon>
                    <Badge
                      overlap="circle"
                      badgeContent=""
                      height="10px"
                      minWidth="10px"
                      background="#5CC64C"
                    >
                      <MailOutline />
                    </Badge>
                  </ListItemIcon>
                  <ListItemText
                    primary="jane.doe@gmail.com"
                    secondary="Mitsubishi Montero Sport Inquiry"
                  />
                  <ListItemSecondaryAction>
                    <IconButton edge="end" size="small">
                      <MoreVert className={classes.moreOptions} />
                    </IconButton>
                  </ListItemSecondaryAction>
                </ListItem>

                <ListItem
                  selected={selected === "Chat"}
                  onClick={() => handleClick("Chat")}
                >
                  <ListItemIcon>
                    <Badge
                      overlap="circle"
                      badgeContent=""
                      height="10px"
                      minWidth="10px"
                      background="#5CC64C"
                    >
                      <MailOutline />
                    </Badge>
                  </ListItemIcon>
                  <ListItemText
                    primary="paul.watson@gmail.com"
                    secondary="Honda Civic RS Turbo Inquiry"
                  />
                  <ListItemSecondaryAction>
                    <IconButton edge="end" size="small">
                      <MoreVert className={classes.moreOptions} />
                    </IconButton>
                  </ListItemSecondaryAction>
                </ListItem>

                <ListItem
                  selected={selected === "Sales"}
                  onClick={() => handleClick("Sales")}
                >
                  <ListItemIcon>
                    <Badge
                      overlap="circle"
                      badgeContent=""
                      height="10px"
                      minWidth="10px"
                      background="#5CC64C"
                    >
                      <MailOutline />
                    </Badge>
                  </ListItemIcon>
                  <ListItemText
                    primary="drake.wilson@gmail.com"
                    secondary="Honda Civic Type-R Inquiry"
                  />
                  <ListItemSecondaryAction>
                    <IconButton edge="end" size="small">
                      <MoreVert className={classes.moreOptions} />
                    </IconButton>
                  </ListItemSecondaryAction>
                </ListItem>
              </List>
            </Grid>
            <Grid item xs={12} className={classes.divider}>
              <Divider light />
            </Grid>
            <Grid item xs={6}>
              <Text
                component="h3"
                style={{
                  fontSize: "14px",
                  margin: "0",
                  fontWeight: "500",
                  color: "#334D6E",
                }}
              >
                General Site Inquiries
              </Text>
            </Grid>
            <Grid item xs={6}>
              <Text
                component="p"
                style={{
                  fontSize: "12px",
                  margin: "0",
                  fontWeight: "normal",
                  color: "#90A0B7",
                  textAlign: "right",
                }}
              >
                25 items
              </Text>
            </Grid>
          </Grid>
        </Paper>
      </Grid>
    </Grid>

  );

  function handleClick(selectedItem) {
    setSelected(selectedItem);
  }
};
