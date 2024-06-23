/* eslint-disable react/prop-types */
"use client";
import {
  AreaChart,
  Area,
  ResponsiveContainer,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

function AreaChartComponent({ producidosVsAltaCalidad }) {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <AreaChart width={500} height={400} data={producidosVsAltaCalidad}>
        <YAxis />
        <XAxis />
        <CartesianGrid strokeDasharray="5 5" />
        <Tooltip />
        <Legend />
        <Area
          type="monotone"
          dataKey="Total"
          stroke="#62a851"
          fill="#62a851"
          stackId="1"
        />
        <Area
          type="monotone"
          dataKey="AltaCalidad"
          stroke="#000"
          fill="#000"
          stackId="2"
        />
      </AreaChart>
    </ResponsiveContainer>
  );
}

export default AreaChartComponent;
