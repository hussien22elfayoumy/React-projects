import Spinner from './Spinner';
import styles from './CityList.module.css';
import PropTypes from 'prop-types';
import CityItem from './CityItem';
import Message from './Message';

function CityList({ cities, isLoading }) {
  if (isLoading) return <Spinner />;

  if (!cities.length)
    return <Message message='Add your first city by clicking on the map' />;
  return (
    <ul className={styles.cityList}>
      {cities.map((city) => (
        <CityItem key={city.id} city={city} />
      ))}
    </ul>
  );
}

CityList.propTypes = {
  cities: PropTypes.any,
  isLoading: PropTypes.any,
};

export default CityList;
