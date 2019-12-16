/* eslint-disable no-use-before-define */
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
  Star,
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
import Table from "dry/components/table";
import TableBody from "dry/components/table-body";
import TableCell from "dry/components/table-cell";
import TableHead from "dry/components/table-head";
import TableRow from "dry/components/table-row";
import Checkbox from "dry/components/checkbox";
import TextField from "dry/components/textfield";
import InputAdornment from "dry/components/input-adornment";
import SearchIcon from "@material-ui/icons/Search";

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
  tabs: {
    minHeight: "auto",
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
    marginRight: 10,
    fontSize: theme.typography.fontSize,
    fontWeight: "bold",
    lineHeight: "16px",
    letterSpacing: "0.01em",
    color: "#334D6E",
    whiteSpace: "nowrap",
  },
  searchField: {
    width: "100%",
    "& .Mui-focused .MuiInputBase-input": {
      background: "none !important",
    },
    "& .Mui-focused .MuiInputAdornment-root": {
      background: "none !important",
    },
  },
  searchIcon: {
    color: "#C2CFE0",
  },
  starIcon: {
    color: ({ active }) => (active ? "#5CC64C" : "unset"),
  },
}));

export const all = () => {
  const classes = useStyles();
  const [value, setValue] = useState(0);
  const [selected, setSelected] = useState([]);

  const rows = staticRows;
  const rowIds = rows.map((r) => r.id);
  const isAllSelected = rowIds.filter((r) => selected.some((s) => s === r)).length === rows.length;

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
            <Box display="flex" alignItems="center">
              <Box display="flex" alignItems="center">
                <Tabs
                  value={value}
                  onChange={(evt, newValue) => setValue(newValue)}
                  TabIndicatorProps={{ style: { display: "none" } }}
                  className={classes.tabs}
                >
                  <Tab className={classes.tab} disableRipple label="Unread" />
                  <Tab className={classes.tab} disableRipple label="Starred" />
                  <Tab className={classes.tab} disableRipple label="Sent" />
                  <Tab className={classes.tab} disableRipple label="Trash" />
                </Tabs>
              </Box>

              <Box display="flex" marginLeft="1rem" width="100%" alignItems="center">
                <Typography className={classes.searchText}>Search Message</Typography>
                <TextField
                  className={classes.searchField}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <SearchIcon className={classes.searchIcon} />
                      </InputAdornment>
                    ),
                  }}
                />
              </Box>
            </Box>
          </Grid>

          <Grid item xs={12}>
            <Table className={classes.table} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell>
                    <Checkbox
                      id="all"
                      checked={isAllSelected}
                      onClick={handleChangeCheckbox}
                    />
                  </TableCell>
                  <TableCell><span>Name</span></TableCell>
                  <TableCell />
                  <TableCell><span>Subject</span></TableCell>
                  <TableCell align="right"><span>Recent Activity</span></TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map((row) => {
                  const isRowSelected = selected.includes(row.id);
                  return (
                    <TableRow key={row.name} className={isRowSelected ? "selected" : ""}>
                      <TableCell>
                        <Checkbox
                          id={row.id}
                          onClick={handleChangeCheckbox}
                          checked={isRowSelected}
                        />
                      </TableCell>
                      <TableCell className="mainCell">{row.name}</TableCell>
                      <TableCell>
                        <StarToggle />
                      </TableCell>
                      <TableCell>{row.subject}</TableCell>
                      <TableCell align="right">{row.recentActivity}</TableCell>
                    </TableRow>
                  );
                })}
              </TableBody>
            </Table>
          </Grid>

        </Grid>

      </Grid>
    </Grid>
  );

  function handleChangeCheckbox(evt) {
    const { id } = evt.target;

    if (id === "all") {
      setSelected(isAllSelected ? [] : rowIds);
      return;
    }

    if (selected.includes(id)) {
      setSelected(selected.filter((e) => e !== id));
    } else {
      setSelected([...selected, id]);
    }
  }
};

function createData(id, name, subject, recentActivity) {
  return {
    id, name, subject, recentActivity,
  };
}

const staticRows = [
  createData("1", "Lindsey Stroud", "Invitation: Qwigo Meeting @ Thu Aug 22, 2019 8:30pm - 10pm (EDT) (highest_88@yahoo.com)", "5 Minutes ago"),
  createData("2", "Nicci Troiani", "Learn how to do Fine Art Photography with my latest course.", "14 Minutes ago"),
  createData("3", "George Fields", "How to save 80 hours per month | Plus, new Hubstaff features", "6 Hours ago"),
  createData("4", "Rebecca Moore", "What are students saying about the Fine Art Masterclass.", "Dec 14, 2018"),
  createData("5", "Jane Doe", "You've got a missed message on Skype from Jane", "Dec 12, 2018"),
  createData("6", "Jones Dermot", "Get Jones Dermot’s Complete Pack for $299", "Dec 11, 2018"),
  createData("7", "Martin Merces", "Meetings that are actually fun...", "Dec 9, 2018"),
  createData("8", "Franz Ferdinand", "Your Daily Work Summary for Qwigo", "Dec 6, 2018"),
];

const StarToggle = () => {
  const [active, setActive] = useState(false);
  const classes = useStyles({ active });
  const iconProps = {
    onClick: () => setActive((prevActive) => !prevActive),
  };

  return (
    <IconButton {...iconProps} aria-label="favorite">
      <Star className={classes.starIcon} />
    </IconButton>
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
