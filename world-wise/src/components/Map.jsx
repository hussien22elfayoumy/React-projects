import { useNavigate, useSearchParams } from 'react-router-dom';
import styles from './Map.module.css';
function Map() {
  const navigate = useNavigate();
  const [searchParam, setSearchParam] = useSearchParams();

  const lat = searchParam.get('lat');
  const lng = searchParam.get('lng');
  return (
    <div className={styles.mapContainer} onClick={() => navigate('form')}>
      <h1>Map</h1>
      <p>
        position: {lat}, {lng}
      </p>
      <button
        onClick={() => {
          setSearchParam({ lat: 23, lng: 50 });
        }}
      >
        Change position
      </button>
    </div>
  );
}

export default Map;
