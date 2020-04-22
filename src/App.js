// library
import React, { useState } from "react";
import { Switch } from "antd";
import { store } from "./components/Store";
import { Provider } from "react-redux";

// components
// import Maps from "./components/Maps";
import DataAngka from "./components/DataAngka";
import DataChart from "./components/DataChart";

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
        {toggle ? <DataChart /> : <DataAngka />}
      </div>
    </Provider>
  );
};

export default App;
