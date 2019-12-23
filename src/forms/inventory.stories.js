/* eslint-disable max-len */
/* eslint-disable react/prop-types */
import React, { useState } from "react";
import clsx from "clsx";
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
import Typography from "dry/components/typography";
import TableSortLabel from "dry/components/table-sortable-label";
import Button from "dry/components/button";
import ImageLoader from "dry/components/image-loader";
import {
  EditOutlined, DeleteOutlined, Search as SearchIcon, NotificationsNoneTwoTone,
} from "dry/icons";

export default {
  title: "Forms|Inventory",
};

const useStyles = makeStyles((theme) => ({
  grid: {
    backgroundColor: "#E5E5E5",
    height: "150vh",
  },
  box: {
    padding: theme.spacing(4),
  },
  title: {
    fontWeight: "bold",
    fontSize: 20,
    lineHeight: "23px",
    letterSpacing: "0.01em",
    color: "#334D6E",
  },
  titleButton: {
    marginBottom: 60,
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  startButton: {
    margin: "0 10px",
    width: 246,
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
  image: {
    width: "100%",
    height: "100%",
    maxHeight: "100%",
  },

  tagline: {
    fontWeight: "normal",
    fontSize: 11,
    lineHeight: "13px",
    color: "#90A0B7",
  },
  taglineTitle: {
    fontWeight: "bold",
    fontSize: 18,
    lineHeight: "21px",
    color: "#334D6E",
  },
  description: {
    fontWeight: "normal",
    fontSize: 14,
    lineHeight: "24px",
    color: "#707683",
  },
}));

const expensesStatuses = [
  {
    id: 1,
    label: "Purchase Price",
    value: "$2,200",
  },
  {
    id: 2,
    label: "Expenses Total",
    value: "$728",
  },
  {
    id: 3,
    label: "Projected Sales Price",
    value: "$4,250",
  },
  {
    id: 4,
    label: "Projected Profit",
    value: "$1,252",
  },
  {
    id: 5,
    label: "ROI",
    value: "45.15%",
  },
  {
    id: 6,
    label: "Time Since Purchase",
    value: "15 Days",
  },
];

const paperworkStatuses = [
  {
    id: 1,
    label: "Paperwork Status",
    value: "34",
  },
  {
    id: 2,
    label: "Test Drive Total",
    value: "2",
  },
];

export const all = () => {
  const classes = useStyles();
  const [value, setValue] = useState(0);

  return (
    <Grid container spacing={1} className={classes.grid}>
      <Grid item xs={12} className={classes.gridItem}>
        <GlobalSearch />

        <Box className={classes.box}>
          <Box className={classes.titleButton}>
            <Text component="h3" className={classes.title}>Inventory &gt; 2011 Volkswagen Jetta</Text>

            {value === 0 && (
              <Box>
                <Button variant="contained" color="primary" className={classes.startButton}>
                Start Sale Paperwork
                </Button>
                <Button variant="contained" color="primary">
                Edit
                </Button>
              </Box>
            )}
          </Box>


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
            <div className={classes.panels}>
              <TabPanel value={value} index={0}>
                <Grid container spacing={2}>
                  <Grid item xs={7}>
                    <ImageLoader
                      src="/images/cars/car1.jpg"
                      alt="car 1"
                      className={classes.image}
                      loader="Image loading..."
                      unloader="Image not found"
                    />
                  </Grid>

                  <Grid item xs={5}>
                    <Grid container spacing={2}>
                      {[2, 3, 4, 5, 6].map((id) => (
                        <Grid key={id} item xs={4}>
                          <ImageLoader
                            src={`/images/cars/car${id}.jpg`}
                            alt={`car ${id}`}
                            className={classes.image}
                            loader="Image loading..."
                            unloader="Image not found"
                          />
                        </Grid>
                      ))}
                    </Grid>
                  </Grid>

                  <Grid item xs={7}>
                    <Text component="p" className={classes.tagline}>
                      Tagline
                    </Text>
                    <Text component="h3" className={classes.taglineTitle}>
                      Rock Solid Transportation with good fuel efficiency
                    </Text>
                  </Grid>

                  <Grid item xs={7}>
                    <Text component="h3" className={classes.description}>
                      Description
                      <br />
                      <br />
                      It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
                      The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here, content here, making it look like readable English.
                      Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for lorem ipsum will uncover many web sites still in their infancy.
                    </Text>
                  </Grid>

                  <Grid item xs={7}>
                    <Text component="h3" className={classes.taglineTitle}>
                      Vehicle Details
                    </Text>
                  </Grid>
                </Grid>


              </TabPanel>

              <TabPanel value={value} index={1}>
                <Box>
                  <PaperwithStatuses statuses={expensesStatuses} />
                </Box>

                <Box>
                  <TablewithActionButtons />
                </Box>
              </TabPanel>

              <TabPanel value={value} index={2}>
                <Text component="p" className={classes.panelLabel}>
                  Tagline Inquiries
                </Text>
                <Text component="h3" className={classes.panelTitle}>
                  Inquiries Content
                </Text>
              </TabPanel>

              <TabPanel value={value} index={3}>
                <Box>
                  <PaperwithStatuses statuses={paperworkStatuses} />
                </Box>

                <Box>
                  <TablewithActionButtons />
                </Box>
              </TabPanel>
            </div>
          </Box>
        </Box>
      </Grid>

    </Grid>
  );

  function TabPanel(props) {
    const {
      // eslint-disable-next-line react/prop-types
      children, value: tabValue, index, ...other
    } = props;

    return (
      <Typography
        component="div"
        role="tabpanel"
        hidden={tabValue !== index}
        {...other}
      >
        <Grid p={3}>{children}</Grid>
      </Typography>
    );
  }

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
function PaperwithStatuses(props) {
  const { statuses = [] } = props;
  const classes = useStylesPaper();

  return (
    <Grid container spacing={4} className={classes.root}>
      {statuses.map((status) => (
        <Grid key={status.id} item xs={4}>
          <Paper>
            <Grid container justify="center" textAlign="left">
              <Grid item xs={12}>
                <Text component="p" fontSize="12px" margin="4px" color="#99A6B7">
                  {status.label}
                </Text>
              </Grid>
              <Grid item xs={12}>
                <Text component="h1" fontSize="24px" fontWeight="bold" margin="4px">
                  {status.value}
                </Text>
              </Grid>
            </Grid>
          </Paper>
        </Grid>
      ))}
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

const buttons = {
  edit: ({ classes, header }) => (
    <IconButton className={classes.iconButton} aria-label={header.label}>
      <EditOutlined />
    </IconButton>
  ),
  delete: ({ classes, header }) => (
    <IconButton className={classes.iconButton} aria-label={header.label}>
      <DeleteOutlined />
    </IconButton>
  ),
};

const columnHeaders = [
  {
    id: "all",
    type: "checkbox",
  },
  {
    id: "description",
    label: "Description",
    primary: true,
  },
  {
    id: "laborCost",
    label: "Labor Cost",
  },
  {
    id: "partsCost",
    label: "Parts Cost",
  },
  {
    id: "timeSpent",
    label: "Time Spent",
  },
  {
    id: "vendor",
    label: "Vendor",
  },
  {
    id: "action",
    type: "action",
    actions: [
      {
        id: "edit",
        label: "Edit",
        component: buttons.edit,
      },
      {
        id: "delete",
        label: "Delete",
        component: buttons.delete,
      },
    ],
  },
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
              {columnHeaders.map((header) => {
                const { id, type, label } = header;

                // empty header
                if (type === "action") {
                  return <TableCell key={id} />;
                }

                // checkbox header
                if (type === "checkbox") {
                  return (
                    <TableCell key={id}>
                      <Checkbox
                        id={id}
                        checked={isAllSelected}
                        onClick={handleChangeCheckbox}
                      />
                    </TableCell>
                  );
                }

                // text header
                return (
                  <TableCell key={id}>
                    <TableSortLabel
                      active={orderBy === id}
                      direction={orderBy === id ? order : undefined}
                      onClick={createSortHandler(id)}
                    >
                      <span>{label}</span>
                    </TableSortLabel>
                  </TableCell>
                );
              })}
            </TableRow>
          </TableHead>

          <TableBody>
            {rows.map((row) => {
              const isRowSelected = selected.includes(row.id);

              return (
                <TableRow key={row.id} className={isRowSelected ? "selected" : ""}>
                  {columnHeaders.map((header) => {
                    const {
                      id, type, primary, actions,
                    } = header;

                    // empty header
                    if (type === "action") {
                      return (
                        <TableCell key={id}>
                          {actions.map((action) => (
                            <action.component
                              key={action.id}
                              {...action}
                              classes={classes}
                              header={header}
                              row={row}
                            />
                          ))}
                        </TableCell>
                      );
                    }

                    // checkbox header
                    if (type === "checkbox") {
                      return (
                        <TableCell key={id}>
                          <Checkbox
                            id={row.id}
                            onClick={handleChangeCheckbox}
                            checked={isRowSelected}
                          />
                        </TableCell>
                      );
                    }

                    // text header
                    return (
                      <TableCell key={id} className={clsx({ primary })}>
                        {row[id]}
                      </TableCell>
                    );
                  })}
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
