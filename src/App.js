// library
import React, { useState } from "react";
import { Switch } from "antd";
import { Provider } from "react-redux";
import { store } from "./components/store";

// components
// import Maps from "./components/Maps";
import Angka from "./components/Angka";
import Chart from "./components/Chart";

// style
import "./App.css";

const App = () => {
  const [toggle, setToggle] = useState(false);

  const toggler = () => {
    toggle ? setToggle(false) : setToggle(true);
  };

  return (
    <Provider store={store}>
      <div className="App">
        {/* Map Javascript API tidak berfungsi karena terkendala penggunaan API dari google */}
        {/* <Maps /> */}
        <Switch onClick={toggler} />
        {toggle ? <Chart /> : <Angka />}
      </div>
    </Provider>
  );
};

export default App;
