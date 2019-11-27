import React, { useState } from "react";
import makeStyles from "dry/utils/makeStyles";
import {
  MoreVert,
  MoreHoriz,
  MailOutline,
  ViewWeekOutlined,
  DashboardOutlined,
  ViewAgendaOutlined,
  PersonOutlineOutlined,
  ChatBubbleOutlineOutlined,
} from "dry/icons";
import Icon from "dry/components/icon";
import Badge from "dry/components/badge";
import IconButton from "dry/components/icon-button";
import List from "dry/components/list";
import ListItem from "dry/components/list-item";
import ListItemIcon from "dry/components/list-item-icon";
import ListItemText from "dry/components/list-item-text";
import ListItemSecondaryAction from "dry/components/list-item-secondary-action";
import Divider from "dry/components/divider";
import Grid from "dry/components/grid";
import Paper from "dry/components/paper";
import Text from "dry/components/text";
import Avatar from "dry/components/avatar";
import ImageLoader from "dry/components/image-loader";

export default {
  title: "Library|Lists/Icons",
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

  avatar: {
    marginRight: "1rem",
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

  itemDivider: {
    "&.MuiDivider-root": {
      margin: ".5rem auto !important",
    },
  },

  logoDivider: {
    height: "1px !important",
    margin: ".25rem auto 3rem auto !important",
  },

  itemLogo: {
    "&:hover": {
      backgroundColor: "inherit !important",
    },
  },

  imageLogo: {
    width: "80%",
  },

  moreOptions: {
    fill: "#C2CFE0 !important",
  },
}));

export const withMenuIcons = () => {
  const classes = useStyles();
  const [selected, setSelected] = useState("Dashboard");

  return (
    <Grid container spacing={6} className={classes.menuGrid}>
      <Grid item xs={3} className={classes.menuGridItem}>
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
      </Grid>
    </Grid>
  );

  function handleClick(selectedItem) {
    setSelected(selectedItem);
  }
};

export const withAvatarAndBranding = () => {
  const classes = useStyles();
  const [selected, setSelected] = useState("Dashboard");

  return (
    <Grid container spacing={6} className={classes.menuGrid}>
      <Grid item xs={3} className={classes.menuGridItem}>
        <List>
          <ListItem className={classes.itemLogo}>
            <ListItemText
              primary={(
                <ImageLoader
                  src="/images/autogy-logo.png"
                  alt="Autogy Sales Logo"
                  className={classes.imageLogo}
                  loader="Image loading..."
                />
              )}
            />
          </ListItem>

          <Divider variant="fullWidth" className={classes.logoDivider} />

          <ListItem>
            <ListItemIcon>
              <Avatar
                className={classes.avatar}
                width="46px"
                height="46px"
                src="/images/avatar-brian.jpg"
              />
            </ListItemIcon>
            <ListItemText
              primary="Brian Jinwright"
              secondary="brian@autogy.com"
            />
          </ListItem>

          <Divider className={classes.itemDivider} />

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
      </Grid>
    </Grid>
  );

  function handleClick(selectedItem) {
    setSelected(selectedItem);
  }
};

export const withIconsInPaperNotifications = () => {
  const [selected, setSelected] = useState("1");
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
                  selected={selected === "1"}
                  onClick={() => handleClick("1")}
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
                  selected={selected === "2"}
                  onClick={() => handleClick("2")}
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
                  selected={selected === "3"}
                  onClick={() => handleClick("3")}
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
                  selected={selected === "4"}
                  onClick={() => handleClick("4")}
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
                  selected={selected === "5"}
                  onClick={() => handleClick("5")}
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
                  selected={selected === "6"}
                  onClick={() => handleClick("6")}
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

export const withIconsInPaperRecentActivity = () => {
  const [selected, setSelected] = useState("1");
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
                Recent Activity
              </Text>
            </Grid>
            <Grid item xs={12} className={classes.divider}>
              <Divider light />
            </Grid>
            <Grid item xs={12}>
              <List>
                <ListItem
                  selected={selected === "1"}
                  onClick={() => handleClick("1")}
                >
                  <ListItemIcon margin="0 10px 0 0">
                    <Icon component={Dropbox} />
                  </ListItemIcon>
                  <ListItemText
                    primary="Dropbox"
                    secondary="1 hour ago"
                  />
                  <ListItemSecondaryAction>
                    <IconButton edge="end" size="small">
                      <MoreVert className={classes.moreOptions} />
                    </IconButton>
                  </ListItemSecondaryAction>
                </ListItem>

                <ListItem
                  selected={selected === "2"}
                  onClick={() => handleClick("2")}
                >
                  <ListItemIcon margin="0 10px 0 0">
                    <Icon component={Github} />
                  </ListItemIcon>
                  <ListItemText
                    primary="Github"
                    secondary="3 hours ago"
                  />
                  <ListItemSecondaryAction>
                    <IconButton edge="end" size="small">
                      <MoreVert className={classes.moreOptions} />
                    </IconButton>
                  </ListItemSecondaryAction>
                </ListItem>

                <ListItem
                  selected={selected === "3"}
                  onClick={() => handleClick("3")}
                >
                  <ListItemIcon margin="0 10px 0 0">
                    <Icon component={Trello} />
                  </ListItemIcon>
                  <ListItemText
                    primary="Trello"
                    secondary="15 hours ago"
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
                All Activities
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
                25 updates
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

function Dropbox() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      x="0px"
      y="0px"
      width="40"
      height="40"
      viewBox="0 0 226 226"
    >
      <g transform="">
        <g fill="none" fillRule="nonzero" stroke="none" strokeWidth="1" strokeLinecap="butt" strokeLinejoin="miter" strokeMiterlimit="10" strokeDasharray="" strokeDashoffset="0" fontFamily="none" fontWeight="none" fontSize="none" textAnchor="none">
          <path d="M0,226v-226h226v226z" fill="none" />
          <path d="M113,226c-62.40818,0 -113,-50.59182 -113,-113v0c0,-62.40818 50.59182,-113 113,-113h0c62.40818,0 113,50.59182 113,113v0c0,62.40818 -50.59182,113 -113,113z" fill="#0750ba" />
          <g fill="#ffffff"><path d="M77.94458,31.29231l-54.41117,35.05542l37.42112,28.17337l52.04546,-32.90478zM113,61.61632l54.8413,31.82946l34.62529,-28.6035l-52.90572,-33.54997zM167.8413,93.44578l-54.8413,34.19516l35.91567,27.09805l53.55091,-32.04452zM113,127.64094l-52.04546,-33.11984l-37.42112,28.17337l54.41117,32.04452zM113,139.25439l-34.62529,26.45286l-20.21601,-11.61345v12.68877l54.8413,36.3458l54.8413,-35.91567v-12.90383l-19.57082,11.61345z" /></g>
          <path d="M113,226c-62.40818,0 -113,-50.59182 -113,-113v0c0,-62.40818 50.59182,-113 113,-113v0c62.40818,0 113,50.59182 113,113v0c0,62.40818 -50.59182,113 -113,113z" fill="none" />
          <path d="M113,221.48c-59.91185,0 -108.48,-48.56815 -108.48,-108.48v0c0,-59.91185 48.56815,-108.48 108.48,-108.48h0c59.91185,0 108.48,48.56815 108.48,108.48v0c0,59.91185 -48.56815,108.48 -108.48,108.48z" fill="none" />
          <path d="M113,226c-62.40818,0 -113,-50.59182 -113,-113v0c0,-62.40818 50.59182,-113 113,-113v0c62.40818,0 113,50.59182 113,113v0c0,62.40818 -50.59182,113 -113,113z" fill="none" />
          <path d="M113,216.96c-57.41552,0 -103.96,-46.54448 -103.96,-103.96v0c0,-57.41552 46.54448,-103.96 103.96,-103.96v0c57.41552,0 103.96,46.54448 103.96,103.96v0c0,57.41552 -46.54448,103.96 -103.96,103.96z" fill="none" />
          <path d="M113,226c-62.40818,0 -113,-50.59182 -113,-113v0c0,-62.40818 50.59182,-113 113,-113v0c62.40818,0 113,50.59182 113,113v0c0,62.40818 -50.59182,113 -113,113z" fill="none" />
          <path d="M113,207.92c-52.42287,0 -94.92,-42.49713 -94.92,-94.92v0c0,-52.42287 42.49713,-94.92 94.92,-94.92h0c52.42287,0 94.92,42.49713 94.92,94.92v0c0,52.42287 -42.49713,94.92 -94.92,94.92z" fill="none" />
          <path d="M113,226c-62.40818,0 -113,-50.59182 -113,-113v0c0,-62.40818 50.59182,-113 113,-113v0c62.40818,0 113,50.59182 113,113v0c0,62.40818 -50.59182,113 -113,113z" fill="none" />
          <path d="M113,198.88c-47.43021,0 -85.88,-38.44979 -85.88,-85.88v0c0,-47.43021 38.44979,-85.88 85.88,-85.88v0c47.43021,0 85.88,38.44979 85.88,85.88v0c0,47.43021 -38.44979,85.88 -85.88,85.88z" fill="none" />
          <path d="M113,226c-62.40818,0 -113,-50.59182 -113,-113v0c0,-62.40818 50.59182,-113 113,-113v0c62.40818,0 113,50.59182 113,113v0c0,62.40818 -50.59182,113 -113,113z" fill="none" />
          <path d="M113,185.32c-39.94123,0 -72.32,-32.37877 -72.32,-72.32v0c0,-39.94123 32.37877,-72.32 72.32,-72.32h0c39.94123,0 72.32,32.37877 72.32,72.32v0c0,39.94123 -32.37877,72.32 -72.32,72.32z" fill="none" />
          <path d="M113,226c-62.40818,0 -113,-50.59182 -113,-113v0c0,-62.40818 50.59182,-113 113,-113v0c62.40818,0 113,50.59182 113,113v0c0,62.40818 -50.59182,113 -113,113z" fill="none" />
          <path d="M113,180.8c-37.44491,0 -67.8,-30.35509 -67.8,-67.8v0c0,-37.44491 30.35509,-67.8 67.8,-67.8v0c37.44491,0 67.8,30.35509 67.8,67.8v0c0,37.44491 -30.35509,67.8 -67.8,67.8z" fill="none" />
          <path d="M113,226c-62.40818,0 -113,-50.59182 -113,-113v0c0,-62.40818 50.59182,-113 113,-113v0c62.40818,0 113,50.59182 113,113v0c0,62.40818 -50.59182,113 -113,113z" fill="none" />
          <path d="M113,185.32c-39.94123,0 -72.32,-32.37877 -72.32,-72.32v0c0,-39.94123 32.37877,-72.32 72.32,-72.32h0c39.94123,0 72.32,32.37877 72.32,72.32v0c0,39.94123 -32.37877,72.32 -72.32,72.32z" fill="none" />
          <path d="M113,226c-62.40818,0 -113,-50.59182 -113,-113v0c0,-62.40818 50.59182,-113 113,-113v0c62.40818,0 113,50.59182 113,113v0c0,62.40818 -50.59182,113 -113,113z" fill="none" />
          <path d="M113,189.84c-42.43756,0 -76.84,-34.40244 -76.84,-76.84v0c0,-42.43756 34.40244,-76.84 76.84,-76.84v0c42.43756,0 76.84,34.40244 76.84,76.84v0c0,42.43756 -34.40244,76.84 -76.84,76.84z" fill="none" />
          <path d="M113,226c-62.40818,0 -113,-50.59182 -113,-113v0c0,-62.40818 50.59182,-113 113,-113v0c62.40818,0 113,50.59182 113,113v0c0,62.40818 -50.59182,113 -113,113z" fill="none" />
          <path d="M113,194.36c-44.93389,0 -81.36,-36.42611 -81.36,-81.36v0c0,-44.93389 36.42611,-81.36 81.36,-81.36h0c44.93389,0 81.36,36.42611 81.36,81.36v0c0,44.93389 -36.42611,81.36 -81.36,81.36z" fill="none" />
          <path d="M113,226c-62.40818,0 -113,-50.59182 -113,-113v0c0,-62.40818 50.59182,-113 113,-113v0c62.40818,0 113,50.59182 113,113v0c0,62.40818 -50.59182,113 -113,113z" fill="none" />
          <path d="M113,198.88c-47.43021,0 -85.88,-38.44979 -85.88,-85.88v0c0,-47.43021 38.44979,-85.88 85.88,-85.88v0c47.43021,0 85.88,38.44979 85.88,85.88v0c0,47.43021 -38.44979,85.88 -85.88,85.88z" fill="none" />
          <path d="M113,226c-62.40818,0 -113,-50.59182 -113,-113v0c0,-62.40818 50.59182,-113 113,-113v0c62.40818,0 113,50.59182 113,113v0c0,62.40818 -50.59182,113 -113,113z" fill="none" />
          <path d="M113,203.4c-49.92654,0 -90.4,-40.47346 -90.4,-90.4v0c0,-49.92654 40.47346,-90.4 90.4,-90.4v0c49.92654,0 90.4,40.47346 90.4,90.4v0c0,49.92654 -40.47346,90.4 -90.4,90.4z" fill="none" />
          <path d="M113,226c-62.40818,0 -113,-50.59182 -113,-113v0c0,-62.40818 50.59182,-113 113,-113v0c62.40818,0 113,50.59182 113,113v0c0,62.40818 -50.59182,113 -113,113z" fill="none" />
          <path d="M113,207.92c-52.42287,0 -94.92,-42.49713 -94.92,-94.92v0c0,-52.42287 42.49713,-94.92 94.92,-94.92h0c52.42287,0 94.92,42.49713 94.92,94.92v0c0,52.42287 -42.49713,94.92 -94.92,94.92z" fill="none" />
          <path d="M113,226c-62.40818,0 -113,-50.59182 -113,-113v0c0,-62.40818 50.59182,-113 113,-113v0c62.40818,0 113,50.59182 113,113v0c0,62.40818 -50.59182,113 -113,113z" fill="none" />
          <path d="M113,212.44c-54.9192,0 -99.44,-44.5208 -99.44,-99.44v0c0,-54.9192 44.5208,-99.44 99.44,-99.44v0c54.9192,0 99.44,44.5208 99.44,99.44v0c0,54.9192 -44.5208,99.44 -99.44,99.44z" fill="none" />
          <path d="M113,226c-62.40818,0 -113,-50.59182 -113,-113v0c0,-62.40818 50.59182,-113 113,-113v0c62.40818,0 113,50.59182 113,113v0c0,62.40818 -50.59182,113 -113,113z" fill="none" />
          <path d="M113,216.96c-57.41552,0 -103.96,-46.54448 -103.96,-103.96v0c0,-57.41552 46.54448,-103.96 103.96,-103.96v0c57.41552,0 103.96,46.54448 103.96,103.96v0c0,57.41552 -46.54448,103.96 -103.96,103.96z" fill="none" />
          <path d="M113,226c-62.40818,0 -113,-50.59182 -113,-113v0c0,-62.40818 50.59182,-113 113,-113v0c62.40818,0 113,50.59182 113,113v0c0,62.40818 -50.59182,113 -113,113z" fill="none" />
          <path d="M113,221.48c-59.91185,0 -108.48,-48.56815 -108.48,-108.48v0c0,-59.91185 48.56815,-108.48 108.48,-108.48h0c59.91185,0 108.48,48.56815 108.48,108.48v0c0,59.91185 -48.56815,108.48 -108.48,108.48z" fill="none" />
          <path d="" fill="none" />
          <path d="M113,226c-62.40818,0 -113,-50.59182 -113,-113v0c0,-62.40818 50.59182,-113 113,-113h0c62.40818,0 113,50.59182 113,113v0c0,62.40818 -50.59182,113 -113,113z" fill="none" />
          <path d="M113,221.48c-59.91185,0 -108.48,-48.56815 -108.48,-108.48v0c0,-59.91185 48.56815,-108.48 108.48,-108.48v0c59.91185,0 108.48,48.56815 108.48,108.48v0c0,59.91185 -48.56815,108.48 -108.48,108.48z" fill="none" />
        </g>

      </g>
    </svg>
  );
}

function Github() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      x="0px"
      y="0px"
      width="40"
      height="40"
      viewBox="0 0 226 226"
    >
      <g transform="translate(-22.6,-22.6) scale(1.2,1.2)">
        <g fill="none" fillRule="nonzero" stroke="none" strokeWidth="1" strokeLinecap="butt" strokeLinejoin="miter" strokeMiterlimit="10" strokeDasharray="" strokeDashoffset="0" fontFamily="none" fontWeight="none" fontSize="none" textAnchor="none">
          <path d="M0,226v-226h226v226z" fill="none" />
          <g fill="#000000"><path d="M102.64167,19.775c-43.31667,4.70833 -78.15833,39.55 -82.86667,81.925c-5.65,47.08333 23.54167,87.575 64.975,100.75833v-21.65833c0,0 -3.76667,0.94167 -8.475,0.94167c-13.18333,0 -18.83333,-11.3 -19.775,-17.89167c-0.94167,-3.76667 -2.825,-6.59167 -5.65,-9.41667c-2.825,-0.94167 -3.76667,-0.94167 -3.76667,-1.88333c0,-1.88333 2.825,-1.88333 3.76667,-1.88333c5.65,0 10.35833,6.59167 12.24167,9.41667c4.70833,7.53333 10.35833,9.41667 13.18333,9.41667c3.76667,0 6.59167,-0.94167 8.475,-1.88333c0.94167,-6.59167 3.76667,-13.18333 9.41667,-16.95c-21.65833,-4.70833 -37.66667,-16.95 -37.66667,-37.66667c0,-10.35833 4.70833,-20.71667 11.3,-28.25c-0.94167,-1.88333 -1.88333,-6.59167 -1.88333,-13.18333c0,-3.76667 0,-9.41667 2.825,-15.06667c0,0 13.18333,0 26.36667,12.24167c4.70833,-1.88333 11.3,-2.825 17.89167,-2.825c6.59167,0 13.18333,0.94167 18.83333,2.825c12.24167,-12.24167 26.36667,-12.24167 26.36667,-12.24167c1.88333,5.65 1.88333,11.3 1.88333,15.06667c0,7.53333 -0.94167,11.3 -1.88333,13.18333c6.59167,7.53333 11.3,16.95 11.3,28.25c0,20.71667 -16.00833,32.95833 -37.66667,37.66667c5.65,4.70833 9.41667,13.18333 9.41667,21.65833v31.075c38.60833,-12.24167 65.91667,-48.025 65.91667,-89.45833c0,-56.5 -48.025,-100.75833 -104.525,-94.16667z" /></g>
        </g>
      </g>
    </svg>
  );
}

function Trello() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      x="0px"
      y="0px"
      width="40"
      height="40"
      viewBox="0 0 172 172"
    >
      <g fill="none" fillRule="nonzero" stroke="none" strokeWidth="1" strokeLinecap="butt" strokeLinejoin="miter" strokeMiterlimit="10" strokeDasharray="" strokeDashoffset="0" fontFamily="none" fontWeight="none" fontSize="none" textAnchor="none">
        <path d="M0,172v-172h172v172z" fill="none" />
        <path d="M86,172c-47.49649,0 -86,-38.50351 -86,-86v0c0,-47.49649 38.50351,-86 86,-86v0c47.49649,0 86,38.50351 86,86v0c0,47.49649 -38.50351,86 -86,86z" fill="#1e88e5" />
        <g fill="#ffffff"><path d="M130.032,28.208h-88.064c-7.59552,0 -13.76,6.16448 -13.76,13.76v88.064c0,7.59552 6.16448,13.76 13.76,13.76h88.064c7.59552,0 13.76,-6.16448 13.76,-13.76v-88.064c0,-7.59552 -6.16448,-13.76 -13.76,-13.76zM74.992,116.272c0,3.0272 -2.4768,5.504 -5.504,5.504h-19.264c-3.0272,0 -5.504,-2.4768 -5.504,-5.504v-66.048c0,-3.0272 2.4768,-5.504 5.504,-5.504h19.264c3.0272,0 5.504,2.4768 5.504,5.504zM127.28,83.248c0,3.0272 -2.4768,5.504 -5.504,5.504h-19.264c-3.0272,0 -5.504,-2.4768 -5.504,-5.504v-33.024c0,-3.0272 2.4768,-5.504 5.504,-5.504h19.264c3.0272,0 5.504,2.4768 5.504,5.504z" /></g>
      </g>
    </svg>
  );
}
