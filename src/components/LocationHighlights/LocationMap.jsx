import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import { useEffect, useState } from 'react';
import markerIcon from 'leaflet/dist/images/marker-icon.png';
import markerShadow from 'leaflet/dist/images/marker-shadow.png';

// Fix default marker icons
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconUrl: markerIcon,
  shadowUrl: markerShadow,
});

// Important nearby locations
const locations = [
  { name: '🏢 Oberoi International School', lat: 19.123, lng: 72.836 },
  { name: '🏥 Kokilaben Dhirubhai Ambani Hospital', lat: 19.133, lng: 72.835 },
  { name: '🛍️ Infinity Mall', lat: 19.136, lng: 72.832 },
  { name: '🚇 Versova Metro Station', lat: 19.137, lng: 72.826 },
  { name: '🏢 Mindspace Business Park', lat: 19.180, lng: 72.838 },
  { name: '🌳 Versova Beach & Park', lat: 19.140, lng: 72.822 },
];

const BouncingMarker = ({ position, children }) => {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setAnimate(true), 300); // Small delay
    return () => clearTimeout(timer);
  }, []);

  return (
    <Marker
      position={position}
      icon={L.icon({
        iconUrl: markerIcon,
        shadowUrl: markerShadow,
        iconAnchor: [12, 41],
      })}
      className={animate ? 'bouncing-marker' : ''}
    >
      {children}
    </Marker>
  );
};

const LocationMap = () => (
  <MapContainer
    center={[19.137, 72.832]}
    zoom={13}
    scrollWheelZoom={false}
    style={{ height: '450px', width: '100%', borderRadius: '12px', overflow: 'hidden' }}
  >
    <TileLayer
      attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    />
    {locations.map((loc, idx) => (
      <BouncingMarker key={idx} position={[loc.lat, loc.lng]}>
        <Popup>{loc.name}</Popup>
      </BouncingMarker>
    ))}
  </MapContainer>
);

export default LocationMap;
