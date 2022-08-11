import React from "react";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";

const ReactChartsJS2 = ({ data }) => {
  const chartjsData = {
    labels: data?.map(data => data.name),
    datasets: [
      {
        label: "summer",
        data: data?.map(data => data.summer),

        borderColor: "#8884d8",
      },
      {
        label: "winter",
        data: data?.map(data => data.winter),
        borderColor: "#82ca9d",
      },
    ],
  };

  return (
    <div style={{ width: 700 }}>
      <Line data={chartjsData} />;
    </div>
  );
};

export default ReactChartsJS2;
