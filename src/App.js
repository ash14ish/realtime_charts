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
      backgroundColor: "#0C9D7B",
      borderColor: "#0C9D7B",
      data: [],
    },
  ],
};

const options = {
  scales: {
    x: {
      type: "realtime",
      grid: {
        display: false,
      },
      realtime: {
        onRefresh: function () {
          data.datasets[0].data.push({
            x: Date.now(),
            y: Math.random() * 500 + 1000,
          });
        },
        delay: 400,
        refresh: 300,
      },
    },

    y: {
      grid: { display: false },
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
