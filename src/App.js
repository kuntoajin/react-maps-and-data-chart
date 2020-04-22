// library
import React, { useState } from "react";
import { Switch } from "antd";

// components
import Maps from "./components/Maps";
import Angka from "./components/Angka";
import Chart from "./components/Chart";

const App = () => {
  // membuat state default untuk switch
  const [toggle, setToggle] = useState(false);

  // membuat perkondisian untuk switch
  const toggler = () => {
    toggle ? setToggle(false) : setToggle(true);
  };

  return (
    <div className="App">
      {/* Map Javascript API dan embeded iframe tidak berfungsi karena terkendala penggunaan Kredential API dari google */}
      <Maps />
      <div style={{ textAlign: "right", marginRight: "5vh", marginTop: "2vh" }}>
        <Switch onClick={toggler} />
      </div>
      {toggle ? <Chart /> : <Angka />}
    </div>
  );
};

export default App;
