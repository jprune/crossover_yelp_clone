import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { MapContainer, Marker, TileLayer } from 'react-leaflet';
import useSwr from 'swr';
// import * as restaurant from './component/restaurantData.json';

import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';

let DefaultIcon = L.icon({
  iconUrl: icon,
  shadowUrl: iconShadow
});
L.Marker.prototype.options.icon = DefaultIcon;

const fetcher = (...args) => fetch(...args).then(response => response.json());

export default function OurMap() {
  const url =
    "https://data.police.uk/api/crimes-street/all-crime?lat=52.629729&lng=-1.131592&date=2022-02";
  const { data, error } = useSwr(url, { fetcher });

  // using this data to see what comes up on the map or just show an empty map - Maybe a pop up?
  const crimes = data && !error ? data.slice(0, 10) : [];
  
  return (
    <MapContainer center={[52.6376, -1.135171]} zoom={13} scrollWheelZoom={false}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                
      />

      {crimes.map(crime => <Marker key={crime.id} position={[crime.location.latitude, crime.location.longitude]}/>)}
      {/* {restaurant.map() */}
      {/* <Marker key={restaurant} position={[
        restaurant?.latitude,
        restaurant?.longetude
      ]} */}
      
    </MapContainer>
  );
}

