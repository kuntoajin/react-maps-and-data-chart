import React from "react";
import { GoogleMap, withScriptjs, withGoogleMap } from "react-google-maps";

const CreatedMap = () => {
  return (
    <GoogleMap
      defaultZoom={10}
      defaultCenter={{ lat: -6.1702144, lng: 107.03011839999999 }}
    />
  );
};

const WrappedMap = withScriptjs(withGoogleMap(CreatedMap));

export default function Maps() {
  return (
    <div>
      <WrappedMap
        googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places`}
        loadingElement={<div style={{ height: `100%` }} />}
        containerElement={<div style={{ height: `400px` }} />}
        mapElement={<div style={{ height: `100%` }} />}
      />
    </div>
  );
}
