// library
import React, { useState, useEffect } from "react";

const Angka = () => {
  // membuat default state data
  const [dataArsir, setDataArsir] = useState(0);
  const [dataNonArsir, setDataNonArsir] = useState(0);

  useEffect(() => {
    // eksekusi data
    setTimeout(() => {
      setDataArsir(dataArsir + 1);
    }, 5000);
    setTimeout(() => {
      setDataNonArsir(dataNonArsir + 2);
    }, 8000);
  }, [dataArsir, dataNonArsir]);

  return (
    // tampilkan data
    <div
      style={{
        width: "500px",
        margin: "auto",
      }}
    >
      <div
        style={{
          padding: "2vh",
          border: "1px solid rgba(0,0,0,.1)",
        }}
      >
        <span>Data Arsir : </span>
        <span>{dataArsir}</span>
      </div>
      <div
        style={{
          padding: "2vh",
          border: "1px solid rgba(0,0,0,.1)",
          borderTop: "none",
        }}
      >
        <span>Data Non Arsir : </span>
        <span>{dataNonArsir}</span>
      </div>
      <span style={{ fontSize: "10px" }}>
        Data arsir akan bertambah 1 setiap 5 detik sedangkan data non arsir akan
        bertambah 2 setiap 8 detik
      </span>
    </div>
  );
};

export default Angka;
