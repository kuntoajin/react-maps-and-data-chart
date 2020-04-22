// libraries
import React, { useState, useEffect } from "react";
import { Bar } from "react-chartjs-2";

const Chart = () => {
  // membuat state default untuk chart dan data
  const [chartData, setChartData] = useState({});
  const [dataArsir, setDataArsir] = useState(0);
  const [dataNonArsir, setDataNonArsir] = useState(0);

  const ChartDataFull = () => {
    // setting dasar untuk chart
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
    // eksekusi data dan chart
    setTimeout(() => {
      setDataArsir(dataArsir + 1);
    }, 5000);
    setTimeout(() => {
      setDataNonArsir(dataNonArsir + 2);
    }, 8000);
    ChartDataFull();
  }, [dataArsir, dataNonArsir]);

  return (
    //   tampilkan chart pada html
    <div
      className="chart"
      style={{ height: "1000px", width: "1000px", margin: "auto" }}
    >
      <span style={{ fontSize: "10px" }}>
        Data arsir "hitam" akan bertambah 1 setiap 5 detik sedangkan data non
        arsir "biru" akan bertambah 2 setiap 8 detik
      </span>
      <Bar data={chartData} option={{ responsive: true }} />
    </div>
  );
};

export default Chart;
