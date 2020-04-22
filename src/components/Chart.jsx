import React, { useState, useEffect } from "react";
import { Bar } from "react-chartjs-2";
import { connect } from "react-redux";

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
          backgroundColor: ["red", "black"],
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
  }, [dataArsir]);

  return (
    <>
      <Bar data={chartData} />
    </>
  );
};

export default Chart;
