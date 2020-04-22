import React, { useState, useEffect } from "react";

const DataChart = () => {
  const [chart, setChart] = useState(0);
  const [chart2, setChart2] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      setChart(chart + 1);
    }, 5000);
    setTimeout(() => {
      setChart2(chart2 + 2);
    }, 8000);
  });

  return (
    <div>
      <div>{chart}</div>
      <div>{chart2}</div>
    </div>
  );
};

export default DataChart;
