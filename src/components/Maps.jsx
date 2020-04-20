import React from "react";
import { GoogleMap, withScriptjs, withGoogleMap } from "react-google-maps";

const Map = () => {
  return (
    <GoogleMap
      defaultZoom={10}
      defaultCenter={{ lat: -6.1702144, lng: 107.03011839999999 }}
    />
  );
};

const WrappedMap = withScriptjs(withGoogleMap(Map));
