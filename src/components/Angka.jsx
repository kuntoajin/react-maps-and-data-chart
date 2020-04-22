import React, { useState, useEffect } from "react";

const Angka = () => {
  const [dataArsir, setDataArsir] = useState(0);
  const [dataNonArsir, setDataNonArsir] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      setDataArsir(dataArsir + 1);
    }, 5000);
    setTimeout(() => {
      setDataNonArsir(dataNonArsir + 2);
    }, 8000);
  }, [dataArsir, dataNonArsir]);

  return (
    <div>
      <div>Data Arsir : {dataArsir}</div>
      <div>Data Non Arsir : {dataNonArsir}</div>
    </div>
  );
};

export default Angka;
