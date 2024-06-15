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

// const dataComponent = [
//   {
//     name: "Jan",
//     product1: 1000,
//     product2: 2200,
//   },
//   {
//     name: "Val",
//     product1: 2000,
//     product2: 3200,
//   },
//   {
//     name: "Agu",
//     product1: 3000,
//     product2: 4200,
//   },
//   {
//     name: "Avr",
//     product1: 1500,
//     product2: 1200,
//   },
//   {
//     name: "Kar",
//     product1: 4000,
//     product2: 5200,
//   },
// ];
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
