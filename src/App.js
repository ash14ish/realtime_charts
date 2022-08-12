import React from "react";
import { Line } from "react-chartjs-2";
import Chart from "chart.js/auto";
import ChartStreaming from "chartjs-plugin-streaming";
import "chartjs-adapter-moment";

Chart.register(ChartStreaming);

const data = {
  datasets: [
    {
      label: "Price Trend",
      backgroundColor: "#3B82F6",
      borderColor: "#3B82F6",
      data: [],
    },
  ],
};

const options = {
  scales: {
    x: {
      type: "realtime",
      realtime: {
        onRefresh: function () {
          data.datasets[0].data.push({
            x: Date.now(),
            y: Math.random() * 500 + 1000,
          });
        },
        delay: 1500,
        refresh: 300,
      },
    },
  },
  plugins: {
    tooltip: {
      enabled: false,
    },
  },
  elements: {
    point: {
      radius: 0,
    },
  },
};

function App() {
  return (
    <div style={{ width: "65vw" }}>
      <Line data={data} options={options} />
    </div>
  );
}

export default App;
