import React, { useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMapEvents } from 'react-leaflet';

function LocationMarker() {
  const [position, setPosition] = useState(null);
  const map = useMapEvents({
    click() {
      map.locate();
    },
    locationfound(e) {
      setPosition(e.latlng);
      map.flyTo(e.latlng, map.getZoom());
    },
  });

  return position === null ? null : (
    <Marker position={position}>
      <Popup>You are here</Popup>
    </Marker>
  );
}

function MapComponent() {
  const position = [ 40.710910, -73.995242];

  return (
    <div className="map-container">
      <MapContainer center={position} zoom={13} style={{ width: '100%', height: '100vh' }}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        <Marker position={position}>
          <Popup>
            furGuardian #69
          </Popup>
        </Marker>

        {/* LocationMarker Component */}
        <LocationMarker />
        {/* LocationMarker Component End */}
      </MapContainer>
    </div>
  );
}

export default MapComponent;
