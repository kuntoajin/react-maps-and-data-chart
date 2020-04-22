import React, { useState, useEffect } from "react";
import { Bar } from "react-chartjs-2";

const Chart = () => {
  const [chartData, setChartData] = useState({});
  const [dataArsir, setDataArsir] = useState(0);
  const [dataNonArsir, setDataNonArsir] = useState(0);

  const ChartDataFull = () => {
    setChartData({
      labels: ["Data Arsir", "Data Non Arsir"],
      datasets: [
        {
          data: [dataArsir, dataNonArsir],
          backgroundColor: ["black", "blue"],
        },
      ],
    });
  };

  useEffect(() => {
    setTimeout(() => {
      setDataArsir(dataArsir + 1);
    }, 5000);
    setTimeout(() => {
      setDataNonArsir(dataNonArsir + 2);
    }, 8000);
    ChartDataFull();
  }, [dataArsir, dataNonArsir]);

  return (
    <div
      className="chart"
      style={{ height: "1000px", width: "1000px", margin: "auto" }}
    >
      <Bar data={chartData} option={{ responsive: true }} />
    </div>
  );
};

export default Chart;
