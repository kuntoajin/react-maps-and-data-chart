import React, { useState, useEffect } from "react";
import { connect } from "react-redux";

const GlobalState = () => {
  const [dataAngka, setDataAngka] = useState([]);

  useEffect(() => {
    setTimeout(() => {
      setDataAngka(dataArsir + 1);
    }, 1000);
    setTimeout(() => {
      setDataAngka(dataNonArsir + 1);
    });
    console.log(dataArsir);
  }, [dataArsir, dataNonArsir]);

  // useEffect(() => {
  //   setTimeout(() => {
  //     setDataAngka(dataAngka.dataArsir + 1);
  //   }, 2000);
  //   setTimeout(() => {
  //     setDataAngka(dataAngka.dataNonArsir + 2);
  //   }, 3000);
  // }, [dataAngka.dataArsir, dataAngka.dataNonArsir]);

  return (
    <div>
      <div>{data.dataArsir}</div>
      <div>{data.dataNonArsir}</div>
    </div>
  );
};

const reduxState = (state) => ({
  dataArsir: state.dataArsir,
});

export default connect(reduxState, null)(GlobalState);
