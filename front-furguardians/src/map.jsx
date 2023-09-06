
import React, { useState , useEffect} from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMapEvents } from 'react-leaflet';
import { Icon } from 'leaflet';
import flag from "../src/images/campusexpertr.png";
import pin from "../src/images/you.png";
import animal from "../src/images/dogpin.png"
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
    iconSize: [40, 95],
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
  const greenIcon = new Icon({
    iconUrl: flag,
    // shadowUrl: flag,
    iconSize: [38, 95],
    // shadowSize: [50, 64],
    iconAnchor: [22, 94],
    // shadowAnchor: [4, 62],
    popupAnchor: [-3, -76],
  });
  const [coordinates, setCoordinates] = useState([]);

  useEffect(() => {
    // Make a GET request to your Express API endpoint
    fetch('/FurGuardian/add')
      .then((response) => response.json())
      .then((data) => setCoordinates(data))
      .catch((error) => console.error('Error fetching data:', error));
  }, []);
  
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
          <Marker position={[coord.latitude, coord.longitude]} icon={greenIcon} key={index} >
            <Popup> 
              
              
           

              <img src={[coord.imageLink]} alt="Description of the image" />
              <br/>
              Furgurdian  #{index + 1}
              </Popup>
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
