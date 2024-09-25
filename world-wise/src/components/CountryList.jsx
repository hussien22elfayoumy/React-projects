import Spinner from './Spinner';
import styles from './CountryList.module.css';
import PropTypes from 'prop-types';
import CountryItem from './CountryItem';
import Message from './Message';
import { useCities } from '../contexts/CitiesContext';

function CountryList() {
  const { cities, isLoading } = useCities();

  if (isLoading) return <Spinner />;

  if (!cities.length)
    return <Message message='Add your first city by clicking on the map' />;

  const countries = cities.reduce((arr, city) => {
    if (!arr.map((el) => el.country).includes(city.country))
      return [...arr, { country: city.country, emoji: city.emoji }];
    else return arr;
  }, []);

  return (
    <ul className={styles.countryList}>
      {countries.map((country) => (
        <CountryItem key={country.country} country={country} />
      ))}
    </ul>
  );
}

CountryList.propTypes = {
  cities: PropTypes.any,
  isLoading: PropTypes.any,
};

export default CountryList;
