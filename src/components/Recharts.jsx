import React from "react";
import {
  LineChart,
  Line,
  CartesianGrid,
  YAxis,
  XAxis,
  Legend,
  Tooltip,
} from "recharts";

const Recharts = ({ data }) => {
  return (
    <LineChart
      width={730}
      height={250}
      data={data}
      margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey={`name`} />
      <YAxis />
      <Tooltip />
      <Legend />
      <Line
        type="monotone"
        dataKey="summer"
        stroke="#8884d8"
        isAnimationActive={false}
      />
      <Line
        type="monotone"
        dataKey="winter"
        stroke="#82ca9d"
        isAnimationActive={false}
      />
    </LineChart>
  );
};

export default Recharts;
