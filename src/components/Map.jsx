import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { MapContainer, Marker, TileLayer } from 'react-leaflet';
import useSwr from 'swr';
import { useContext } from 'react';
import { YelpContext } from '../Context';

import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';

const DefaultIcon = L.icon({
  iconUrl: icon,
  shadowUrl: iconShadow,
});
L.Marker.prototype.options.icon = DefaultIcon;

const fetcher = (...args) => fetch(...args).then(response => response.json());

export default function OurMap() {
  const url =
    "https://mini-yelp-clone-backend.herokuapp.com/restaurants/6337fce518dc251c2a411b09";
  // const { data, error } = useSwr(url, { fetcher });

  // // using this data to see what comes up on the map or just show an empty map - Maybe a pop up?
  // const restaurants = data && !error ? data.slice(0, 10) : [];
    const {restaurantList} = useContext(YelpContext)
  return (
    <MapContainer center={[48.34726063741718, 10.871004041208831]} zoom={13} scrollWheelZoom={false}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                
      />

      {restaurantList.map(restaurants => <Marker key={restaurants._id} position={[restaurants.latitude, restaurants.longitude]}/>)}
      {/* {restaurants.map()} */}
        {/* <Marker 
        key={restaurants} position={[
        restaurants?.latitude,
        restaurants?.longetude
      ]}
      /> */}
    </MapContainer>
  );
}

