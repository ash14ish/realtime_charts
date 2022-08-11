import React, { useState, useEffect } from "react";
import Recharts from "./components/Recharts";
import data from "./data/data";
import ReactChartsJS2 from "./components/ReactChartsJS2";

const sortedDataAsc = [...data].sort((a, b) => {
  if (a.name > b.name) return 1;
  else return -1;
});

const sortedDataDsc = [...data].sort((a, b) => {
  if (a.name > b.name) return -1;
  else return 1;
});

function App() {
  const [chartData, setChartData] = useState();

  const testChangingData = () => {
    setTimeout(() => {
      setChartData(data);
    }, 1000);

    setTimeout(() => {
      setChartData(sortedDataAsc);
    }, 2000);

    setTimeout(() => {
      setChartData(sortedDataDsc);
    }, 3000);
  };

  useEffect(() => {
    setTimeout(() => testChangingData());
    setInterval(() => testChangingData(), 3000);
  }, []);

  return (
    <>
      {/* <Recharts data={chartData} /> */}
      <ReactChartsJS2 data={chartData} />
    </>
  );
}

export default App;
