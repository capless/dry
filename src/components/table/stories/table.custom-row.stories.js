/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import lodashOrderBy from "lodash/orderBy";
import makeStyles from "dry/utils/makeStyles";
import { EditOutlined, DeleteOutlined } from "dry/icons";
import Grid from "dry/components/grid";
import Table from "dry/components/table";
import TableBody from "dry/components/table-body";
import TableCell from "dry/components/table-cell";
import TableHead from "dry/components/table-head";
import TableRow from "dry/components/table-row";
import Checkbox from "dry/components/checkbox";
import Avatar from "dry/components/avatar";
import TableSortLabel from "dry/components/table-sortable-label";
import ImageLoader from "dry/components/image-loader";
import Link from "dry/components/link";
import IconButton from "dry/components/icon-button";

export default {
  title: "Library|Tables/CustomRow",
};

const useStyles = makeStyles({
  grid: {
    backgroundColor: "#E5E5E5",
    height: "90vh",
  },
  table: {
    margin: "1rem",
    width: "calc(100% - 2rem)",
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
    },
  },
});

function createData(id, name, year, listingId, delivery, auth) {
  return {
    id, name, year, listingId, delivery, auth,
  };
}

const staticRows = [
  createData("1", "Toyota Corolla Altis", "2014", "#123355", "Manager", "None"),
  createData("2", "Nissan Altima", "2010", "#622242", "Manager", "None"),
  createData("3", "Hyundai Accent", "2007", "#553241", "CEO", "Cognito"),
  createData("4", "Mitsubishi Expander", "2018", "#962524", "Manager", "Cognito"),
];

export const withRowPhotos = () => {
  const classes = useStyles();
  const [selected, setSelected] = useState([]);
  const [order, setOrder] = useState("asc");
  const [orderBy, setOrderBy] = useState("name");

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
              <TableCell />
              <TableCell>
                <TableSortLabel
                  active={orderBy === "name"}
                  direction={orderBy === "name" ? order : undefined}
                  onClick={createSortHandler("name")}
                >
                  <span>Name</span>
                </TableSortLabel>
              </TableCell>
              <TableCell>
                <TableSortLabel
                  active={orderBy === "year"}
                  direction={orderBy === "year" ? order : undefined}
                  onClick={createSortHandler("year")}
                >
                  <span>Year</span>
                </TableSortLabel>
              </TableCell>
              <TableCell>
                <TableSortLabel
                  active={orderBy === "listingId"}
                  direction={orderBy === "listingId" ? order : undefined}
                  onClick={createSortHandler("listingId")}
                >
                  <span>Listing ID</span>
                </TableSortLabel>
              </TableCell>
              <TableCell>
                <TableSortLabel
                  active={orderBy === "delivery"}
                  direction={orderBy === "delivery" ? order : undefined}
                  onClick={createSortHandler("delivery")}
                >
                  <span>Delivery</span>
                </TableSortLabel>
              </TableCell>
              <TableCell>
                <TableSortLabel
                  active={orderBy === "auth"}
                  direction={orderBy === "auth" ? order : undefined}
                  onClick={createSortHandler("auth")}
                >
                  <span>Auth</span>
                </TableSortLabel>
              </TableCell>
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
                  <TableCell>
                    {renderPhotos()}
                  </TableCell>
                  <TableCell className="mainCell">
                    <Grid container spacing={4} alignItems="center">
                      <Grid item xs={2}>
                        <Avatar width="24px" height="24px" src={`https://picsum.photos/25?random=${row.id}`} />
                      </Grid>
                      <Grid item xs={10}>
                        <span>{row.name}</span>
                      </Grid>
                    </Grid>
                  </TableCell>
                  <TableCell>{row.year}</TableCell>
                  <TableCell>{row.listingId}</TableCell>
                  <TableCell>{row.delivery}</TableCell>
                  <TableCell>{row.auth}</TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </Grid>
    </Grid>
  );

  function renderPhotos() {
    const imageUrls = new Array(3).fill().map((e, i) => `https://picsum.photos/80/60?ramdom=${i}`);
    return (
      <Grid
        container
        spacing={1}
        justify="center"
        alignItems="center"
        className={classes.gridPhotos}
      >
        {imageUrls.map((url) => (
          <Grid key={url} item xs={3}>
            <ImageLoader
              src={url}
              alt={url}
              loader="..."
            />
          </Grid>
        ))}
        <Grid item xs={3} className="grid-item-link">
          <Link
            onClick={() => {}}
            className={classes.link}
          >
            View All Photos
          </Link>
        </Grid>
      </Grid>
    );
  }

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
};

export const withActionButtons = () => {
  const classes = useStyles();
  const [selected, setSelected] = useState([]);
  const [order, setOrder] = useState("asc");
  const [orderBy, setOrderBy] = useState("name");

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
              <TableCell />
              <TableCell>
                <TableSortLabel
                  active={orderBy === "name"}
                  direction={orderBy === "name" ? order : undefined}
                  onClick={createSortHandler("name")}
                >
                  <span>Name</span>
                </TableSortLabel>
              </TableCell>
              <TableCell>
                <TableSortLabel
                  active={orderBy === "year"}
                  direction={orderBy === "year" ? order : undefined}
                  onClick={createSortHandler("year")}
                >
                  <span>Year</span>
                </TableSortLabel>
              </TableCell>
              <TableCell>
                <TableSortLabel
                  active={orderBy === "listingId"}
                  direction={orderBy === "listingId" ? order : undefined}
                  onClick={createSortHandler("listingId")}
                >
                  <span>Listing ID</span>
                </TableSortLabel>
              </TableCell>
              <TableCell>
                <TableSortLabel
                  active={orderBy === "delivery"}
                  direction={orderBy === "delivery" ? order : undefined}
                  onClick={createSortHandler("delivery")}
                >
                  <span>Delivery</span>
                </TableSortLabel>
              </TableCell>
              <TableCell>
                <TableSortLabel
                  active={orderBy === "auth"}
                  direction={orderBy === "auth" ? order : undefined}
                  onClick={createSortHandler("auth")}
                >
                  <span>Auth</span>
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
                  <TableCell>
                    {renderPhotos()}
                  </TableCell>
                  <TableCell className="mainCell">
                    <Grid container spacing={4} alignItems="center">
                      <Grid item xs={2}>
                        <Avatar width="24px" height="24px" src={`https://picsum.photos/25?random=${row.id}`} />
                      </Grid>
                      <Grid item xs={10}>
                        <span>{row.name}</span>
                      </Grid>
                    </Grid>
                  </TableCell>
                  <TableCell>{row.year}</TableCell>
                  <TableCell>{row.listingId}</TableCell>
                  <TableCell>{row.delivery}</TableCell>
                  <TableCell>{row.auth}</TableCell>
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

  function renderPhotos() {
    const imageUrls = new Array(3).fill().map((e, i) => `https://picsum.photos/80/60?ramdom=${i}`);
    return (
      <Grid
        container
        spacing={1}
        justify="center"
        alignItems="center"
        className={classes.gridPhotos}
      >
        {imageUrls.map((url) => (
          <Grid key={url} item xs={3}>
            <ImageLoader
              src={url}
              alt={url}
              loader="..."
            />
          </Grid>
        ))}
        <Grid item xs={3} className="grid-item-link">
          <Link
            onClick={() => {}}
            className={classes.link}
          >
            View All Photos
          </Link>
        </Grid>
      </Grid>
    );
  }

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
};
