/* eslint-disable max-len */
/* eslint-disable import/named */
import React, { useRef, useState } from "react";
import makeStyles from "dry/utils/makeStyles";
import Grid from "dry/components/grid";
import {
  ArrowDropDown,
  ViewStream,
  Unarchive,
  MoreHoriz,
  Policy,
  Delete,
} from "dry/icons";
import Menu from "dry/components/menu";
import MenuItem from "dry/components/menu-item";
import InputLabel from "dry/components/input-label";
import IconButton from "dry/components/icon-button";
import Tooltip from "dry/components/tooltip";
import Typography from "dry/components/typography";
import Box from "dry/components/box";
import Tabs from "dry/components/tabs";
import Tab from "dry/components/tab";

export default {
  title: "Forms|MessageTable/Default",
};

const useStyles = makeStyles((theme) => ({
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
  gridItemButtonGroupLeft: {},
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
    fontWeight: "bold",
    lineHeight: "23px",
    letterSpacing: "0.01em",
    color: "#334D6E",
  },
  tab: {
    "&.MuiButtonBase-root": {
      minWidth: "unset",
      padding: "0 1rem",

      "&:first-child": {
        paddingLeft: 0,
      },

      "&:last-child": {
        borderRight: "1px solid #C2CFE0 !important",
      },
    },
  },
  searchText: {
    fontSize: theme.typography.fontSize,
    fontWeight: "bold",
    lineHeight: "16px",
    letterSpacing: "0.01em",
    color: "#334D6E",

  },
}));

export const all = () => {
  const classes = useStyles();
  const [value, setValue] = useState(0);

  return (
    <Grid container justify="center" className={classes.grid}>
      <Grid item xs={12}>
        <Grid container spacing={2}>
          {/* Buttons */}
          <Grid item xs={12} className={classes.gridItemButtonGroup}>
            <Grid container alignItems="center">
              <Grid item xs={4} className={classes.gridItemButtonGroupLeft}>
                <Typography variant="h6" className={classes.title}>Today</Typography>
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
            <Box display="flex">
              <Tabs
                value={value}
                onChange={(evt, newValue) => setValue(newValue)}
                TabIndicatorProps={{ style: { display: "none" } }}
              >
                <Tab className={classes.tab} disableRipple label="Unread" />
                <Tab className={classes.tab} disableRipple label="Starred" />
                <Tab className={classes.tab} disableRipple label="Sent" />
                <Tab className={classes.tab} disableRipple label="Trash" />
              </Tabs>
              <Box marginLeft="1rem">
                <Typography className={classes.searchText}>Search Message</Typography>
              </Box>
            </Box>
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
