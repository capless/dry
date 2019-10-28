/* eslint-disable import/named */
/* eslint-disable react/prop-types */
import React from "react";
import Grid from "components/grid";

import {
  PieChart, Pie, Cell, Label, Tooltip, Legend, ResponsiveContainer,
} from "components/chart/recharts";

export default {
  title: "Library|Charts/Pie",
};

const data = [
  { name: "Active", value: 30 },
  { name: "Completed", value: 60 },
  { name: "Ended", value: 10 },
];
const COLORS = [
  "#FFB946",
  "#5CC64C",
  "#F7685B",
];

export const Default = () => (
  <Grid container>
    <Grid item xs={12}>
      <ResponsiveContainer width="40%" height={160}>
        <PieChart>
          <Tooltip />
          <Legend
            verticalAlign="middle"
            layout="vertical"
            align="right"
            iconSize={8}
            iconType="circle"
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
              content={<CustomLabel value="60%" />}
            />
            {data.map((entry, index) => (
              <Cell
                key={entry}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>
        </PieChart>
      </ResponsiveContainer>
    </Grid>
  </Grid>
);

function CustomLabel({ viewBox, value }) {
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
