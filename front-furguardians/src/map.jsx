
import React, { useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMapEvents } from 'react-leaflet';
import { Icon } from 'leaflet';
import pin from "../src/images/you.png";
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
  const greenIcon = new Icon({
    iconUrl: pin,
    // shadowUrl: flag,
    iconSize: [38, 95],
    // shadowSize: [50, 64],
    iconAnchor: [22, 94],
    // shadowAnchor: [4, 62],
    popupAnchor: [-3, -76],
  });

  return position === null ? null : (
    <Marker position={position} icon={greenIcon}>
          <Popup>You :3</Popup>
        </Marker>
   
  );
}
function MapComponent() {
  
  const coordinates = [
    
      { "latitude": 19.0760, "longitude": 72.8777 }, // Mumbai
      { "latitude": 12.9716, "longitude": 77.5946 }, // Bangalore
      { "latitude": 28.6139, "longitude": 77.2090 }, // Delhi
      { "latitude": 18.5204, "longitude": 73.8567 }, // Pune
      { "latitude": 17.3850, "longitude": 78.4867 }, // Hyderabad
      { "latitude": 13.0827, "longitude": 80.2707 }, // Chennai
      { "latitude": 22.5726, "longitude": 88.3639 }, // Kolkata
      { "latitude": 25.3176, "longitude": 82.9739 }, // Varanasi
      { "latitude": 26.9124, "longitude": 75.7873 }, // Jaipur
      { "latitude": 11.0168, "longitude": 76.9558 }, // Coimbatore
      { "latitude": 18.5244, "longitude": 73.7226 }, // Lonavala
      { "latitude": 10.8505, "longitude": 76.2711 }, // Thrissur
      { "latitude": 28.7041, "longitude": 77.1025 }, // Noida
      { "latitude": 22.2587, "longitude": 71.1924 },  // Rajkot
      { "latitude": 19.2110, "longitude": 72.8631 }, // Kandivali
      { "latitude": 19.1865, "longitude": 72.8489 }, // Malad
      { "latitude": 19.2295, "longitude": 72.8572 }, // Borivali
      { "latitude": 18.9353, "longitude": 72.8279 }  // Churchgate
        
  ];
  const position = [40.710910, -73.995242];

  return (
    <div className="map-container" style={{ position: 'relative', zIndex: 0 }}>
      <MapContainer center={position} zoom={13} style={{ width: '100%', height: '100vh' }}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        <Marker position={position}  >
            <Popup>Marker #69</Popup>
          </Marker>
        {coordinates.map((coord, index) => (
          <Marker position={[coord.latitude, coord.longitude]} key={index} >
            <Popup> Furgurdian {index + 1}</Popup>
          </Marker>
        ))}

        {/* LocationMarker Component */}
        <LocationMarker />
        {/* LocationMarker Component End */}


        
      </MapContainer>
    </div>
  );
}

export default MapComponent;
