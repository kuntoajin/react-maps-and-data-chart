import React, { useState } from "react";
import Switch from "react-switch";

import DataAngka from "./DataAngka";
import DataChart from "./DataChart";

const SwitchToggle = () => {
  const [checked, setChecked] = useState(false);

  return (
    <div>
      <Switch
        className="react-switch"
        onChange={() => setChecked(checked)}
        checked={checked}
      />
      <div>{checked ? <DataAngka /> : <DataChart />}</div>
    </div>
  );
};

export default SwitchToggle;
