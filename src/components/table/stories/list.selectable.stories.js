import React, { useState } from "react";
import makeStyles from "utils/makeStyles";
import Grid from "components/grid";
import Table from "components/table";
import TableBody from "components/table-body";
import TableCell from "components/table-cell";
import TableHead from "components/table-head";
import TableRow from "components/table-row";
import Checkbox from "components/checkbox";

export default {
  title: "Library|Tables/Selectable",
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
});

function createData(id, name, email, companyName, role, forecast, recentActivity) {
  return {
    id, name, email, companyName, role, forecast, recentActivity,
  };
}

const rows = [
  createData("1", "Lindsey Stroud", "lindsey.stroud@gmail.com", "Hatchbuck", "Manager", "50%", "5 Minutes ago"),
  createData("2", "Nicci Troiani", "nicci.troiani@gmail.com", "Slack", "Manager", "75%", "14 Minutes ago"),
  createData("3", "George Fields", "george.fields@gmail.com", "Clockify", "CEO", "10%", "6 Hours ago"),
  createData("4", "Rebecca Moore", "rebecca.moore@gmail.com", "Upwork", "Manager", "25%", "Dec 14, 2018"),
  createData("5", "Jane Doe", "jane.doe@gmail.com", "Trello", "Engineer", "30%", "Dec 12, 2018"),
  createData("6", "Jones Dermot", "dermot.jones@gmail.com", "Slack", "Developer", "40%", "Dec 11, 2018"),
  createData("7", "Martin Merces", "martin.merces@gmail.com", "Google", "Manager", "60%", "Dec 9, 2018"),
  createData("8", "Franz Ferdinand", "franz.ferdinan@gmail.com", "Facebook", "Manger", "100%", "Dec 6, 2018"),
];

export const withDefault = () => {
  const classes = useStyles();
  const [selected, setSelected] = useState(["11"]);
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
                <TableRow key={row.name} className={isRowSelected ? "selected" : ""}>
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
