/* eslint-disable react/prop-types */
import React, { useState } from "react";
import lodashOrderBy from "lodash/orderBy";
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
import Table from "dry/components/table";
import TableBody from "dry/components/table-body";
import TableCell from "dry/components/table-cell";
import TableHead from "dry/components/table-head";
import TableRow from "dry/components/table-row";
import Checkbox from "dry/components/checkbox";
import TableSortLabel from "dry/components/table-sortable-label";
import {
  EditOutlined, DeleteOutlined, Search as SearchIcon, NotificationsNoneTwoTone,
} from "dry/icons";

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
  title: {
    marginBottom: 60,
    fontWeight: "bold",
    fontSize: 20,
    lineHeight: "23px",
    letterSpacing: "0.01em",
    color: "#334D6E",
  },
  tabs: {
    minHeight: 0,
    paddingBottom: 16,
  },
  tab: {
    "&.MuiButtonBase-root": {
      minWidth: "unset",
      padding: "0 1rem",

      "&:first-child": {
        paddingLeft: 0,
      },
    },
  },
}));

export const all = () => {
  const classes = useStyles();
  const [value, setValue] = useState(0);

  return (
    <Grid container spacing={1} className={classes.grid}>
      <Grid item xs={12} className={classes.gridItem}>
        <GlobalSearch />

        <Box className={classes.box}>
          <Text component="h3" className={classes.title}>Inventory &gt; 2011 Volkswagen Jetta</Text>

          <Box>
            <Tabs
              value={value}
              onChange={handleChange}
              TabIndicatorProps={{ style: { display: "none" } }}
              className={classes.tabs}
            >
              <Tab disableRipple className={classes.tab} label="Overview" />
              <Tab disableRipple className={classes.tab} label="Expenses" />
              <Tab disableRipple className={classes.tab} label="Inquiries" />
              <Tab disableRipple className={classes.tab} label="Paperwork" />
            </Tabs>
          </Box>

          <Box>
            <PaperwithStatuses />
          </Box>

          <Box>
            <TablewithActionButtons />
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
    padding: "1rem 0",

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

const useStylesTable = makeStyles({
  table: {
    margin: "1rem 0",
  },

  gridPhotos: {
    textAlign: "center",

    "& img": {
      width: "100%",
    },
  },

  link: {
    cursor: "pointer",
  },

  iconButton: {
    color: "#C2CFE0",

    "&.MuiIconButton-root:hover": {
      color: "#FFF",
      backgroundColor: "#5CC64C !important",
    },
  },
});

function createData(id, description, laborCost, partsCost, timeSpent, vendor) {
  return {
    id, description, laborCost, partsCost, timeSpent, vendor,
  };
}

const staticRows = [
  createData("1", "Tires", "$2", "$80", "1 hour", "Venso Tires"),
  createData("2", "Cylinder", "$400", "$220", "22 hours", "Yesi Auto"),
  createData("3", "Radiator", "$250", "$120", "12 hours", "Nolan Aircon"),
];


function TablewithActionButtons() {
  const classes = useStylesTable();
  const [selected, setSelected] = useState([]);
  const [order, setOrder] = useState("asc");
  const [orderBy, setOrderBy] = useState("description");

  const rows = lodashOrderBy(staticRows, [orderBy], [order]);
  const rowIds = rows.map((r) => r.id);
  const isAllSelected = rowIds.filter((r) => selected.some((s) => s === r)).length === rows.length;

  return (
    <Grid container className={classes.grid}>
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
              <TableCell>
                <TableSortLabel
                  active={orderBy === "description"}
                  direction={orderBy === "description" ? order : undefined}
                  onClick={createSortHandler("description")}
                >
                  <span>Description</span>
                </TableSortLabel>
              </TableCell>
              <TableCell>
                <TableSortLabel
                  active={orderBy === "laborCost"}
                  direction={orderBy === "laborCost" ? order : undefined}
                  onClick={createSortHandler("laborCost")}
                >
                  <span>Labor Cost</span>
                </TableSortLabel>
              </TableCell>
              <TableCell>
                <TableSortLabel
                  active={orderBy === "partsCost"}
                  direction={orderBy === "partsCost" ? order : undefined}
                  onClick={createSortHandler("partsCost")}
                >
                  <span>Parts Cost</span>
                </TableSortLabel>
              </TableCell>
              <TableCell>
                <TableSortLabel
                  active={orderBy === "timeSpent"}
                  direction={orderBy === "timeSpent" ? order : undefined}
                  onClick={createSortHandler("timeSpent")}
                >
                  <span>Time Spent</span>
                </TableSortLabel>
              </TableCell>
              <TableCell>
                <TableSortLabel
                  active={orderBy === "vendor"}
                  direction={orderBy === "vendor" ? order : undefined}
                  onClick={createSortHandler("vendor")}
                >
                  <span>Vendor</span>
                </TableSortLabel>
              </TableCell>
              <TableCell />
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => {
              const isRowSelected = selected.includes(row.id);
              return (
                <TableRow key={row.id} className={isRowSelected ? "selected" : ""}>
                  <TableCell>
                    <Checkbox
                      id={row.id}
                      onClick={handleChangeCheckbox}
                      checked={isRowSelected}
                    />
                  </TableCell>
                  <TableCell className="mainCell">
                    <span>{row.description}</span>
                  </TableCell>
                  <TableCell>{row.laborCost}</TableCell>
                  <TableCell>{row.partsCost}</TableCell>
                  <TableCell>{row.timeSpent}</TableCell>
                  <TableCell>{row.vendor}</TableCell>
                  <TableCell>
                    <IconButton className={classes.iconButton} aria-label="edit">
                      <EditOutlined />
                    </IconButton>
                    <IconButton className={classes.iconButton} aria-label="delete">
                      <DeleteOutlined />
                    </IconButton>
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
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

  function createSortHandler(property) {
    return () => {
      const isDesc = orderBy === property && order === "desc";
      setOrder(isDesc ? "asc" : "desc");
      setOrderBy(property);
    };
  }
}
