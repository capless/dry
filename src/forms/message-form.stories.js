/* eslint-disable max-len */
/* eslint-disable import/named */
import React, { useRef, useState } from "react";
import makeStyles from "dry/utils/makeStyles";
import Button from "dry/components/button";
import Grid from "dry/components/grid";
import {
  ArrowDropDown,
  KeyboardBackspace,
  ReplyOutlined,
  ReplyAllOutlined,
  ViewStream,
  Unarchive,
  MoreHoriz,
  Policy,
  Delete,
  Forward,
  Star,
  AttachFile,
} from "dry/icons";
import Menu from "dry/components/menu";
import MenuItem from "dry/components/menu-item";
import InputLabel from "dry/components/input-label";
import IconButton from "dry/components/icon-button";
import Tooltip from "dry/components/tooltip";
import List from "dry/components/list";
import ListItem from "dry/components/list-item";
import ListItemText from "dry/components/list-item-text";
import Typography from "dry/components/typography";
import Avatar from "dry/components/avatar";
import ListItemAvatar from "dry/components/list-item-avatar";
import ListItemSecondaryAction from "dry/components/list-item-secondary-action";
import Box from "dry/components/box";
import Divider from "dry/components/divider";
import Editor from "dry/components/editor";

export default {
  title: "Forms|MessageForm",
};

const useStyles = makeStyles(() => ({
  grid: {
    backgroundColor: "#E5E5E5",
    padding: "2rem",
  },
  gridItemButtonGroup: {
    "& .MuiButtonBase-root": {
      color: "#90A0B7",
      fontWeight: "normal",
      fontSize: 13,
      lineHeight: "15px",
      letterSpacing: "0.01em",

      "&:hover": {
        color: "#5BD649",
      },
    },
  },

  gridItemButtonGroupLeft: {

  },

  buttonBack: {
    "&.MuiButtonBase-root": {
      width: 60,
      minWidth: 60,
      justifyContent: "flex-start",
      padding: "6px 0",
    },
  },

  gridItemButtonGroupMiddle: {
    display: "flex",
    justifyContent: "center",

    "& .MuiButtonBase-root": {
      minWidth: "48px",
    },
  },

  gridItemSort: {
    "& .MuiFormLabel-root": {
      display: "flex",
      justifyContent: "flex-end",
      padding: "0 8px",
    },
  },

  title: {
    fontWeight: "normal",
    fontSize: 16,
    lineHeight: "19px",
    letterSpacing: "0.01em",
    color: "#334D6E",
  },

  list: {
    "& .MuiAvatar-root": {
      width: 48,
      height: 48,
      border: "2px solid #109CF1",
    },
    "& .MuiDivider-root": {
      height: 1,
      margin: "12px 0 !important",
    },
    "& .MuiListItemText-root": {
      marginLeft: 24,

      "& .MuiTypography-root.MuiListItemText-primary.MuiTypography-body1": {
        fontWeight: "bold",
        fontSize: 14,
        lineHeight: "16px",
        letterSpacing: "0.01em",
        color: "#334D6E",
      },
      "& .MuiTypography-root.MuiListItemText-secondary.MuiTypography-body2": {
        fontSize: 13,
        lineHeight: "15px",
        letterSpacing: "0.01em",
        color: "#90A0B7",

      },
    },
    "& .MuiListItemSecondaryAction-root": {
      color: "#90A0B7",

      "& .MuiTypography-root": {
        margin: "0 12px",
        fontSize: 13,
        lineHeight: "15px",
        letterSpacing: "0.01em",
      },
      "& .MuiSvgIcon-root": {
        fontSize: 18,
      },
    },
  },

  messageItem: {
    "& .MuiListItemText-root": {
      marginLeft: 0,

      "& .MuiTypography-root.MessageContent.MuiTypography-body1": {
        fontWeight: "normal !important",
        fontSize: 13,
        lineHeight: "20px",
        letterSpacing: "0.01em",
        color: "#334D6E",
        paddingRight: 16,

        "& br": {
          display: "block",
          margin: "12px 0",
          content: '""',
        },
      },
    },
  },

  divider: {
    height: "1px !important",
  },

  editor: {
    width: "100%",
    margin: "16px 16px 16px 0 !important",
    background: "#FFF",
  },

  attachButton: {
    color: "#90A0B7 !important",
  },

}));

export const all = () => {
  const classes = useStyles();

  return (
    <Grid container justify="center" className={classes.grid}>
      <Grid item xs={12}>
        <Grid container spacing={2}>
          {/* Buttons */}
          <Grid item xs={12} className={classes.gridItemButtonGroup}>
            <Grid container alignItems="center">
              <Grid item xs={4} className={classes.gridItemButtonGroupLeft}>
                <Button startIcon={<KeyboardBackspace />} className={classes.buttonBack}>
                   Back
                </Button>

                <Tooltip title="Reply">
                  <IconButton>
                    <ReplyOutlined fontSize="small" />
                  </IconButton>
                </Tooltip>

                <Tooltip title="Reply All">
                  <IconButton>
                    <ReplyAllOutlined fontSize="small" />
                  </IconButton>
                </Tooltip>

                <Tooltip title="Forward">
                  <IconButton>
                    <Forward fontSize="small" />
                  </IconButton>
                </Tooltip>
              </Grid>


              <Grid item xs={5} className={classes.gridItemButtonGroupMiddle}>
                <Tooltip title="Archive">
                  <IconButton>
                    <ViewStream fontSize="small" />
                  </IconButton>
                </Tooltip>

                <Tooltip title="Move">
                  <IconButton>
                    <Unarchive fontSize="small" />
                  </IconButton>
                </Tooltip>

                <Tooltip title="Delete">
                  <IconButton>
                    <Delete fontSize="small" />
                  </IconButton>
                </Tooltip>

                <Tooltip title="Spam">
                  <IconButton>
                    <Policy fontSize="small" />
                  </IconButton>
                </Tooltip>

                <Tooltip title="More Options">
                  <IconButton>
                    <MoreHoriz />
                  </IconButton>
                </Tooltip>
              </Grid>

              <Grid item xs={3} className={classes.gridItemSort}>
                <SortOnTop />
              </Grid>
            </Grid>
          </Grid>

          <Grid item xs={12}>
            <Typography component="h3" className={classes.title}>Invitaton: Qwigo Meeting</Typography>
          </Grid>

          <Grid item xs={12}>
            <Grid container>
              <Grid item xs={12}>
                <List disablePadding className={classes.list}>
                  <ListItem disableGutters button={false} alignItems="flex-start">
                    <ListItemAvatar>
                      <Avatar src="/images/avatar.jpg">A</Avatar>
                    </ListItemAvatar>
                    <ListItemText
                      primary="Ali Connors"
                      secondary="lindseystroud@autogy.com"
                    />
                    <ListItemSecondaryAction>
                      <Box display="flex" alignItems="center">
                        <Typography>
                          Sep 6 at 1:35 PM
                        </Typography>
                        <Star />
                      </Box>
                    </ListItemSecondaryAction>
                  </ListItem>

                  <ListItem disableGutters button={false} alignItems="flex-start" className={classes.messageItem}>
                    <ListItemText
                      primary={(
                        <Typography className="MessageContent">
                            Dear nico,
                          <br />
                            It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here, content here, making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for lorem ipsum will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
                        </Typography>
                        )}
                    />
                  </ListItem>

                  <Divider className={classes.divider} />

                  <ListItem disableGutters button={false} alignItems="flex-start">
                    <ListItemAvatar>
                      <Avatar src="/images/avatar-brian.jpg">B</Avatar>
                    </ListItemAvatar>
                    <ListItemText
                      primary="Brian Jinwright"
                      secondary="brian@autogy.com"
                    />
                    <ListItemSecondaryAction>
                      <Box display="flex" alignItems="center">
                        <Typography>
                          Sep 6 at 1:35 PM
                        </Typography>
                        <Star />
                      </Box>
                    </ListItemSecondaryAction>
                  </ListItem>

                  <Divider className={classes.divider} />

                  <ListItem disableGutters button={false} alignItems="flex-start">
                    <ListItemAvatar>
                      <Avatar src="/images/avatar.jpg">A</Avatar>
                    </ListItemAvatar>
                    <ListItemText
                      primary="Ali Connors"
                      secondary="lindseystroud@autogy.com"
                    />
                    <ListItemSecondaryAction>
                      <Box display="flex" alignItems="center">
                        <Typography>
                          Sep 6 at 1:35 PM
                        </Typography>
                        <Star />
                      </Box>
                    </ListItemSecondaryAction>
                  </ListItem>

                  <ListItem disableGutters button={false} alignItems="flex-start">
                    <Editor className={classes.editor} />
                  </ListItem>

                  <ListItem disableGutters button={false} alignItems="flex-start">
                    <Box width="100%" display="flex" justifyContent="flex-end">
                      <Button className={classes.attachButton} startIcon={<AttachFile />}>Attach File</Button>
                      <Button variant="contained" color="primary">Submit</Button>
                    </Box>
                  </ListItem>
                </List>
              </Grid>
            </Grid>
          </Grid>
        </Grid>

      </Grid>
    </Grid>
  );
};

const SortOnTop = () => {
  const inputRef = useRef();
  const [value, setValue] = useState("New on Top");
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleOpen = () => {
    setAnchorEl(inputRef.current);
  };

  const handleSelectItem = (item) => {
    setValue(item);
    setAnchorEl(null);
  };

  const popOverProps = {
    anchorOrigin: {
      vertical: "bottom",
      horizontal: "right",
    },
    transformOrigin: {
      vertical: "top",
      horizontal: "right",
    },
  };

  return (
    <>
      <InputLabel
        label="Sort:"
        value={value}
        onClick={handleOpen}
        rightIcon={<ArrowDropDown ref={inputRef} onClick={handleOpen} />}
      />
      <Menu
        keepMounted
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleClose}
        {...popOverProps}
      >
        {["New on Top", "Oldest to Newest"].map((item) => (
          <MenuItem
            key={item}
            value={item}
            selected={item === value}
            onClick={() => handleSelectItem(item)}
          >
            {item}
          </MenuItem>
        ))}
      </Menu>
    </>
  );
};
