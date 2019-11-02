/* eslint-disable import/named */
/* eslint-disable react/prop-types */
import React, { useRef, useState } from "react";
import makeStyles from "utils/makeStyles";
import Icon from "components/icon";
import { TripOrigin, ArrowDropDown } from "icons";
import Grid from "components/grid";
import Paper from "components/paper";
import Text from "components/text";
import Menu from "components/menu";
import MenuItem from "components/menu-item";
import InputLabel from "components/input-label";
import Divider from "components/divider";

import {
  PieChart, Pie, Cell, Label, Tooltip, Legend, ResponsiveContainer,
} from "components/chart/recharts";

export default {
  title: "Library|Charts/Pie",
};

const data = [
  { name: "Active", value: 30, fill: "#FFB946" },
  { name: "Completed", value: 60, fill: "#5CC64C" },
  { name: "Ended", value: 10, fill: "#F7685B" },
];
const monthData = [
  { name: "Ended", value: 10, fill: "#F7685B" },
  { name: "Total", value: 100, fill: "#DDDDDD" },
];
const quarterData = [
  { name: "Active", value: 32.3, fill: "#FFB946" },
  { name: "Total", value: 100, fill: "#DDDDDD" },
];
const annualData = [
  { name: "Completed", value: 100, fill: "#5CC64C" },
];
const COLORS = [
  "#FFB946",
  "#5CC64C",
  "#F7685B",
];

const useStyles = makeStyles(() => ({
  root: {
    backgroundColor: "#E5E5E5",
    height: "90vh",
    padding: "1rem",

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
  },

  grid: {
    backgroundColor: "#E5E5E5",
    height: "90vh",
    padding: "1rem",
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
}));

export const Default = () => {
  const classes = useStyles();

  return (
    <Grid container spacing={6} className={classes.grid}>
      {/* Month Revenue */}
      <Grid item xs={4}>
        <ResponsiveContainer width="100%" height={200}>
          <PieChart>
            <Pie
              data={monthData}
              dataKey="value"
              innerRadius="90%"
              outerRadius="100%"
            >
              <Label
                width={30}
                position="center"
                content={renderLabel}
                value="10%"
              />
              {monthData.map((entry) => (
                <Cell
                  key={entry.value}
                  fill={entry.fill}
                  stroke="transparent"
                />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>
        <Text
          component="h2"
          style={{
            marginBottom: "6px",
            fontSize: "20px",
            fontWeight: "bold",
            color: "#334D6E",
            textAlign: "center",
          }}
        >
          $10,002.00
        </Text>
        <Text
          component="p"
          style={{
            margin: "0",
            fontSize: "12px",
            color: "#99A6B7",
            textAlign: "center",
          }}
        >
          Month Revenue
        </Text>
      </Grid>

      {/* Quarter Revenue */}
      <Grid item xs={4} className={classes.gridItem}>
        <ResponsiveContainer width="100%" height={200}>
          <PieChart>
            <Pie
              data={quarterData}
              dataKey="value"
              innerRadius="90%"
              outerRadius="100%"
            >
              <Label
                width={30}
                position="center"
                content={renderLabel}
                value="32.3%"
              />
              {quarterData.map((entry) => (
                <Cell
                  key={entry.value}
                  fill={entry.fill}
                  stroke="transparent"
                />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>
        <Text
          component="h2"
          style={{
            marginBottom: "6px",
            fontSize: "20px",
            fontWeight: "bold",
            color: "#334D6E",
            textAlign: "center",
          }}
        >
          $32,000.00
        </Text>
        <Text
          component="p"
          style={{
            margin: "0",
            fontSize: "12px",
            color: "#99A6B7",
            textAlign: "center",
          }}
        >
          Quarter Revenue
        </Text>
      </Grid>

      {/* Annual Revenue */}
      <Grid item xs={4} className={classes.gridItem}>
        <ResponsiveContainer width="100%" height={200}>
          <PieChart>
            <Pie
              data={annualData}
              dataKey="value"
              innerRadius="90%"
              outerRadius="100%"
            >
              <Label
                width={30}
                position="center"
                content={renderLabel}
                value="100%"
              />
              {annualData.map((entry) => (
                <Cell
                  key={entry.value}
                  fill={entry.fill}
                  stroke="transparent"
                />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>
        <Text
          component="h2"
          style={{
            marginBottom: "6px",
            fontSize: "20px",
            fontWeight: "bold",
            color: "#334D6E",
            textAlign: "center",
          }}
        >
          $112,024.00
        </Text>
        <Text
          component="p"
          style={{
            margin: "0",
            fontSize: "12px",
            color: "#99A6B7",
            textAlign: "center",
          }}
        >
          Annual Revenue
        </Text>
      </Grid>
    </Grid>
  );
};


export const WithPaper = () => {
  const classes = useStyles();

  return (
    <Grid container spacing={6} className={classes.grid}>
      <Grid item xs={4}>
        <Paper>
          <Grid container alignItems="center">
            <Grid item xs={6}>
              <Text
                component="h2"
                style={{
                  fontSize: "20px",
                  margin: "0",
                  fontWeight: "bold",
                  color: "#334D6E",
                }}
              >
                Performance
              </Text>
            </Grid>
            <Grid item xs={6}>
              <ShowDate />
            </Grid>
            <Grid item xs={12} className={classes.divider}>
              <Divider light />
            </Grid>
            <Grid item xs={12}>
              <ResponsiveContainer width="100%" height={160}>
                <PieChart>
                  <Tooltip />
                  <Legend
                    verticalAlign="middle"
                    layout="vertical"
                    align="right"
                    iconSize={8}
                    iconType="circle"
                    content={renderLegend}
                  />
                  <Pie
                    data={data}
                    dataKey="value"
                    innerRadius="90%"
                    outerRadius="100%"
                  >
                    <Label
                      width={30}
                      position="center"
                      content={renderLabel}
                      value="60%"
                    />
                    {data.map((entry) => (
                      <Cell
                        key={entry.value}
                        fill={entry.fill}
                        stroke="transparent"
                      />
                    ))}
                  </Pie>
                </PieChart>
              </ResponsiveContainer>
            </Grid>
          </Grid>
        </Paper>
      </Grid>
    </Grid>
  );
};


function ShowDate() {
  const classes = useStyles();
  const inputRef = useRef();
  const [value, setValue] = useState("This Month");
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
        label="Show:"
        value={value}
        onClick={handleOpen}
        rightIcon={<ArrowDropDown ref={inputRef} onClick={handleOpen} />}
        className={classes.selectInput}
      />
      <Menu
        keepMounted
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleClose}
        {...popOverProps}
      >
        {["This Month", "Last Month"].map((item) => (
          <MenuItem
            key={item}
            value={item}
            selected={item === value}
            onClick={() => handleSelectItem(item)}
            className={classes.selectInput}
          >
            {item}
          </MenuItem>
        ))}
      </Menu>
    </>
  );
}

function renderLabel(props) {
  const { viewBox, value } = props;
  const { cx, cy } = viewBox;

  return (
    <text
      x={cx}
      y={cy}
      fill="#5CC64C"
      textAnchor="middle"
      dominantBaseline="central"
    >
      <tspan
        color="red"
        alignmentBaseline="middle"
        fontSize="45"
        fontWeight="bold"
      >
        {value}
      </tspan>
    </text>
  );
}

function renderLegend(props) {
  const { payload } = props;

  return (
    <div>
      {payload.map((entry, index) => (
        <div
          key={`item-${entry.value}`}
          style={{ fontSize: "10px", margin: "10px 0" }}
        >
          <Icon
            component={TripOrigin}
            fontSize="xxsmall"
            color={COLORS[index % COLORS.length]}
          />
          <Text
            component="span"
            display="inline"
            style={{
              margin: "10px",
              fontSize: "10px",
              fontWeight: "bold",
              textTransform: "uppercase",
              color: "#334D6E",
            }}
          >
            {entry.value}

          </Text>
        </div>
      ))}
    </div>
  );
}
