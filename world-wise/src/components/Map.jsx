import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  MapContainer,
  Marker,
  Popup,
  TileLayer,
  useMap,
  useMapEvent,
} from 'react-leaflet';
import { useCities } from '../contexts/CitiesContext';
import PorpTypes from 'prop-types';
import styles from './Map.module.css';
import { useGeolocation } from '../hooks/useGeoLocation';
import Button from '../components/Button';
import { useUrlPosition } from '../hooks/useUrlPosition';

function Map() {
  const [mapPosition, setMapPosition] = useState([51.505, -0.09]);
  const { cities } = useCities();
  const [mapLat, mapLng] = useUrlPosition();
  const {
    isLoading: isLoadingPosition,
    position: geoloactionPosition,
    getPosition,
  } = useGeolocation();

  useEffect(() => {
    if (mapLat && mapLng) setMapPosition([mapLat, mapLng]);
  }, [mapLat, mapLng]);

  useEffect(() => {
    if (geoloactionPosition)
      setMapPosition([geoloactionPosition.lat, geoloactionPosition.lng]);
  }, [geoloactionPosition]);

  return (
    <div className={styles.mapContainer}>
      {!geoloactionPosition && (
        <Button type='position' onClick={getPosition}>
          {isLoadingPosition ? 'Loading...' : 'Use your Position'}
        </Button>
      )}

      <MapContainer
        center={mapPosition}
        zoom={6}
        scrollWheelZoom={true}
        className={styles.map}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url='https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png'
        />
        {cities.map((city) => (
          <Marker
            key={city.id}
            position={[city.position.lat, city.position.lng]}
          >
            <Popup>{city.notes}</Popup>
          </Marker>
        ))}
        <ChangeCenter position={mapPosition} />
        <DetectClick />
      </MapContainer>
    </div>
  );
}

function ChangeCenter({ position }) {
  const map = useMap();
  map.setView(position);
  return null;
}

function DetectClick() {
  const navigate = useNavigate();

  useMapEvent({
    click: (e) => navigate(`form?lat=${e.latlng.lat}&lng=${e.latlng.lng}`),
  });
}

ChangeCenter.propTypes = {
  position: PorpTypes.any,
};

export default Map;
