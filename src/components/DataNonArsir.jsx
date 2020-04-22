import React, { useState, useEffect } from "react";
import { connect } from "react-redux";

const DataNonArsir = () => {
  const [dataNonArsir, setDataNonArsir] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      setDataNonArsir(dataNonArsir + 2);
    }, 8000);
  });

  return <div>{dataNonArsir}</div>;
};

export default connect()(DataNonArsir);
