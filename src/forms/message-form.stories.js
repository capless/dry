/* eslint-disable import/named */
import React, { useRef, useState } from "react";
import makeStyles from "dry/utils/makeStyles";
import Button from "dry/components/button";
import Grid from "dry/components/grid";
import Text from "dry/components/text";
import Paper from "dry/components/paper";
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
} from "dry/icons";
import Menu from "dry/components/menu";
import MenuItem from "dry/components/menu-item";
import InputLabel from "dry/components/input-label";
import IconButton from "dry/components/icon-button";
import Tooltip from "dry/components/tooltip";

export default {
  title: "Forms|MessageForm/Default",
};

const useStyles = makeStyles(() => ({
  grid: {
    backgroundColor: "#E5E5E5",
    padding: "1rem",
  },
  paper: {
    height: "80vh",
  },

  gridItemButtonGroup: {

  },

  buttonBack: {
    "&.MuiButtonBase-root": {
      width: "120px",
      minWidth: "120px",
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
}));

export const all = () => {
  const classes = useStyles();

  return (
    <Grid container justify="center" className={classes.grid}>
      <Grid item xs={10}>
        <Paper className={classes.paper}>
          <Grid container spacing={2}>
            {/* Fieldset */}
            <Grid item xs={12}>
              <Text component="h1">Messages</Text>
            </Grid>

            {/* Buttons */}
            <Grid item xs={12} className={classes.gridItemButtonGroup}>
              <Grid container alignItems="center">
                <Grid item xs={4}>
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
              <Text component="h3">Invitaton: Qwigo Meeting</Text>
            </Grid>
          </Grid>
        </Paper>

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
