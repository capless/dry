import React from "react";
import Grid from "components/grid";

import {
  // eslint-disable-next-line import/named
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
export const Default = () => (
  <Grid container>
    <Grid item xs={12}>
      <ResponsiveContainer width="100%" height={450}>
        <AreaChart
          data={data}
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
          <Legend verticalAlign="top" height={36} />
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
);
