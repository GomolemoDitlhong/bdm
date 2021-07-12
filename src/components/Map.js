import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
function Map() {
  const position = [-24.6081154, 25.9287659];
  return (
    <MapContainer center={position} zoom={12} scrollWheelZoom={false}>
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={position}>
        <Popup>
          Big Data Mining <br /> (PTY) LTD.
        </Popup>
      </Marker>
    </MapContainer>
  );
}

export default Map;
