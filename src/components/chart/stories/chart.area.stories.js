/* eslint-disable react/prop-types */
/* eslint-disable import/named */
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
  AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer,
} from "components/chart/recharts";

export default {
  title: "Library|Charts/Area",
};

const data = [
  {
    name: "1 Dec",
    "Closed deals": 50,
  },
  {
    name: "8 Dec",
    "Closed deals": 180,
  },
  {
    name: "16 Dec",
    "Closed deals": 100,
  },
  {
    name: "24 Dec",
    "Closed deals": 150,
  },
  {
    name: "31 Dec",
    "Closed deals": 200,
  },
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

  areaChart: {
    fontSize: "12px",
    lineHeight: "14px",
    color: "#90A0B7",
    justifyContent: "flex-end",
    marginLeft: "-20px",
  },

  divider: {
    margin: ".5rem auto 1rem auto",
  },

}));

export const Default = () => {
  const classes = useStyles();

  return (
    <Grid container className={classes.grid}>
      <Grid item xs={8}>
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
                Sales
              </Text>
            </Grid>
            <Grid item xs={6}>
              <ShowDate />
            </Grid>
            <Grid item xs={12} className={classes.divider}>
              <Divider light />
            </Grid>
            <Grid item xs={12}>
              <ResponsiveContainer width="100%" height={450}>
                <AreaChart
                  data={data}
                  className={classes.areaChart}
                >
                  <defs>
                    <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#5CC64C" stopOpacity={0.2} />
                      <stop offset="95%" stopColor="rgba(92, 198, 76, 0.13)" stopOpacity={0} />
                    </linearGradient>
                  </defs>
                  <XAxis dataKey="name" />
                  <YAxis />
                  <CartesianGrid strokeDasharray="3 3" />
                  <Tooltip />
                  <Legend
                    verticalAlign="top"
                    align="center"
                    iconSize={8}
                    iconType="circle"
                    content={renderLegend}
                  />
                  <Area
                    type="monotone"
                    dataKey="Closed deals"
                    stroke="#5CC64C"
                    fillOpacity={1}
                    fill="url(#colorPv)"
                    activeDot={{
                      stroke: "#5CC64C", fill: "#FFFFFF", strokeWidth: 2, r: 5,
                    }}
                  />
                </AreaChart>
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
  const [value, setValue] = useState("Monthly");
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
        {["Monthly", "Annually"].map((item) => (
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

function renderLegend(props) {
  const { payload } = props;

  return (
    <div>
      {payload.map((entry) => (
        <div
          key={`item-${entry.value}`}
          style={{ fontSize: "10px", margin: "10px", textAlign: "center" }}
        >
          <Icon
            component={TripOrigin}
            fontSize="xxsmall"
            color="#5CC64C"
          />
          <Text
            component="span"
            display="inline"
            style={{
              margin: "10px",
              fontSize: "11px",
              color: "#90A0B7",
            }}
          >
            {entry.value}

          </Text>
        </div>
      ))}
    </div>
  );
}
