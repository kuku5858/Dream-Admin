import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

import "./chart.css";


export default function Chart({title, data, dataKey, grid}) {
  return (
    <div className="chart__container">
      <div><h3 className="chart__title">{title}</h3></div>

      <ResponsiveContainer width="100%" aspect={4 / 1}>
        <LineChart
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          {grid && <CartesianGrid strokeDasharray="3 3" />}
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Line
            type="monotone"
            dataKey={dataKey}
            stroke="#8884d8"
            strokeDasharray="5 5"
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
