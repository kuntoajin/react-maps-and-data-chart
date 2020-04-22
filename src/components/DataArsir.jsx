import React, { useState, useEffect } from "react";

const DataArsir = () => {
  const [dataArsir, setDataArsir] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      setDataArsir(dataArsir + 1);
    }, 5000);
  }, [dataArsir]);

  return <div>{dataArsir}</div>;
};

export default DataArsir;
