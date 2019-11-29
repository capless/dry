import React, { useState } from "react";
import lodashOrderBy from "lodash/orderBy";
import lodashTimes from "lodash/times";
import makeStyles from "dry/utils/makeStyles";
import Grid from "dry/components/grid";
import Table from "dry/components/table";
import TableBody from "dry/components/table-body";
import TableCell from "dry/components/table-cell";
import TableHead from "dry/components/table-head";
import TableRow from "dry/components/table-row";
import Checkbox from "dry/components/checkbox";
import Avatar from "dry/components/avatar";
import TableSortLabel from "dry/components/table-sortable-label";
import Pagination from "dry/components/pagination";

export default {
  title: "Library|Tables/Pagination",
};

const useStyles = makeStyles({
  grid: {
    backgroundColor: "#E5E5E5",
    height: "100%",
  },
  table: {
    margin: "1rem",
    width: "calc(100% - 2rem)",
  },
  pagination: {
    margin: "1rem",
  },
});

function createData(id, name, email, companyName, role, forecast, recentActivity) {
  return {
    id, name, email, companyName, role, forecast, recentActivity,
  };
}

const fixedRows = [
  createData("1", "Lindsey Stroud", "lindsey.stroud@gmail.com", "Hatchbuck", "Manager", "50%", "5 Minutes ago"),
  createData("2", "Nicci Troiani", "nicci.troiani@gmail.com", "Slack", "Manager", "75%", "14 Minutes ago"),
  createData("3", "George Fields", "george.fields@gmail.com", "Clockify", "CEO", "10%", "6 Hours ago"),
  createData("4", "Rebecca Moore", "rebecca.moore@gmail.com", "Upwork", "Manager", "25%", "Dec 14, 2018"),
  createData("5", "Jane Doe", "jane.doe@gmail.com", "Trello", "Engineer", "30%", "Dec 12, 2018"),
  createData("6", "Jones Dermot", "dermot.jones@gmail.com", "Slack", "Developer", "40%", "Dec 11, 2018"),
  createData("7", "Martin Merces", "martin.merces@gmail.com", "Google", "Manager", "60%", "Dec 9, 2018"),
  createData("8", "Franz Ferdinand", "franz.ferdinan@gmail.com", "Facebook", "Manager", "100%", "Dec 6, 2018"),
];

let allRows = [];
lodashTimes(100, (iteration) => {
  const newRows = fixedRows.map((row) => ({ ...row, id: `${Number(row.id + (10 * iteration)) + 1}` }));
  allRows = allRows.concat(newRows);
});

export const withDefault = () => {
  const classes = useStyles();
  const [selected, setSelected] = useState([]);
  const [currentPage, setCurrentPage] = useState(80);

  const rowsPerPage = 10;
  const startIndex = (currentPage * rowsPerPage) - rowsPerPage;
  const endIndex = (currentPage * rowsPerPage) - 1;
  const paginatedRows = allRows.slice(startIndex, endIndex);
  const rows = paginatedRows;
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
              <TableCell><span>Name</span></TableCell>
              <TableCell><span>Email</span></TableCell>
              <TableCell><span>Company Name</span></TableCell>
              <TableCell><span>Role</span></TableCell>
              <TableCell align="right"><span>Forecast</span></TableCell>
              <TableCell align="right"><span>Recent Activity</span></TableCell>
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
                  <TableCell className="mainCell">{row.name}</TableCell>
                  <TableCell>{row.email}</TableCell>
                  <TableCell>{row.companyName}</TableCell>
                  <TableCell>{row.role}</TableCell>
                  <TableCell align="right">{row.forecast}</TableCell>
                  <TableCell align="right">{row.recentActivity}</TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>

      </Grid>
      <Grid item xs={12}>
        <Pagination
          className={classes.pagination}
          onChange={handlePageChange}
          current={currentPage}
          total={allRows.length}
        />
      </Grid>
    </Grid>
  );

  function handlePageChange(newPage) {
    setCurrentPage(newPage);
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
};

export const withAvatar = () => {
  const classes = useStyles();
  const [selected, setSelected] = useState([]);

  const [currentPage, setCurrentPage] = useState(1);

  const rowsPerPage = 10;
  const startIndex = (currentPage * rowsPerPage) - rowsPerPage;
  const endIndex = (currentPage * rowsPerPage) - 1;
  const paginatedRows = allRows.slice(startIndex, endIndex);
  const rows = paginatedRows;
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
              <TableCell><span>Name</span></TableCell>
              <TableCell><span>Email</span></TableCell>
              <TableCell><span>Company Name</span></TableCell>
              <TableCell><span>Role</span></TableCell>
              <TableCell align="right"><span>Forecast</span></TableCell>
              <TableCell align="right"><span>Recent Activity</span></TableCell>
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
                    <Grid container spacing={4} alignItems="center">
                      <Grid item xs={2}>
                        <Avatar width="24px" height="24px" src={`https://picsum.photos/25?random=${row.id}`} />
                      </Grid>
                      <Grid item xs={10}>
                        <span>{row.name}</span>
                      </Grid>
                    </Grid>
                  </TableCell>
                  <TableCell>{row.email}</TableCell>
                  <TableCell>{row.companyName}</TableCell>
                  <TableCell>{row.role}</TableCell>
                  <TableCell align="right">{row.forecast}</TableCell>
                  <TableCell align="right">{row.recentActivity}</TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </Grid>
      <Grid item xs={12}>
        <Pagination
          className={classes.pagination}
          onChange={handlePageChange}
          current={currentPage}
          total={allRows.length}
        />
      </Grid>
    </Grid>
  );

  function handlePageChange(newPage) {
    setCurrentPage(newPage);
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
};

export const withSortable = () => {
  const classes = useStyles();
  const [selected, setSelected] = useState([]);
  const [order, setOrder] = useState("asc");
  const [orderBy, setOrderBy] = useState("name");

  const [currentPage, setCurrentPage] = useState(1);

  const rowsPerPage = 10;
  const startIndex = (currentPage * rowsPerPage) - rowsPerPage;
  const endIndex = (currentPage * rowsPerPage) - 1;
  const paginatedRows = allRows.slice(startIndex, endIndex);
  const rows = lodashOrderBy(paginatedRows, [orderBy], [order]);
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
                  active={orderBy === "name"}
                  direction={orderBy === "name" ? order : undefined}
                  onClick={createSortHandler("name")}
                >
                  <span>Name</span>
                </TableSortLabel>
              </TableCell>
              <TableCell>
                <TableSortLabel
                  active={orderBy === "email"}
                  direction={orderBy === "email" ? order : undefined}
                  onClick={createSortHandler("email")}
                >
                  <span>Email</span>
                </TableSortLabel>
              </TableCell>
              <TableCell>
                <TableSortLabel
                  active={orderBy === "companyName"}
                  direction={orderBy === "companyName" ? order : undefined}
                  onClick={createSortHandler("companyName")}
                >
                  <span>Company Name</span>
                </TableSortLabel>
              </TableCell>
              <TableCell>
                <TableSortLabel
                  active={orderBy === "role"}
                  direction={orderBy === "role" ? order : undefined}
                  onClick={createSortHandler("role")}
                >
                  <span>Role</span>
                </TableSortLabel>
              </TableCell>
              <TableCell align="right">
                <TableSortLabel
                  active={orderBy === "forecast"}
                  direction={orderBy === "forecast" ? order : undefined}
                  onClick={createSortHandler("forecast")}
                >
                  <span>Forecast</span>
                </TableSortLabel>
              </TableCell>
              <TableCell align="right">
                <TableSortLabel
                  active={orderBy === "recentActivity"}
                  direction={orderBy === "recentActivity" ? order : undefined}
                  onClick={createSortHandler("recentActivity")}
                >
                  <span>Recent Activity</span>
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
                  <TableCell>{row.email}</TableCell>
                  <TableCell>{row.companyName}</TableCell>
                  <TableCell>{row.role}</TableCell>
                  <TableCell align="right">{row.forecast}</TableCell>
                  <TableCell align="right">{row.recentActivity}</TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </Grid>
      <Grid item xs={12}>
        <Pagination
          className={classes.pagination}
          onChange={handlePageChange}
          current={currentPage}
          total={allRows.length}
        />
      </Grid>
    </Grid>
  );

  function handlePageChange(newPage) {
    setCurrentPage(newPage);
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
