import { useContext, useState, useEffect, createContext } from 'react';
import PropTypes from 'prop-types';

const BASE_URL = 'http://localhost:8000';

const CitiesContext = createContext();

function CitiesProvider({ children }) {
  const [cities, setCities] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [currentCity, setCurrentCity] = useState({});

  useEffect(() => {
    async function fetchCities() {
      try {
        setIsLoading(true);
        const res = await fetch(`${BASE_URL}/cities`);
        const data = await res.json();

        setCities(data);
      } catch {
        alert('something went wrong');
      } finally {
        setIsLoading(false);
      }
    }
    fetchCities();
  }, []);

  async function getCity(id) {
    try {
      setIsLoading(true);
      const res = await fetch(`${BASE_URL}/cities/${id}`);
      const data = await res.json();

      setCurrentCity(data);
    } catch {
      alert('something went wrong');
    } finally {
      setIsLoading(false);
    }
  }

  async function createNewCity(newCity) {
    try {
      setIsLoading(true);
      const res = await fetch(`${BASE_URL}/cities`, {
        method: 'POST',
        body: JSON.stringify(newCity),
        headers: {
          'content-type': 'application/json',
        },
      });
      const data = await res.json();
      setCities((cities) => [...cities, data]);
    } catch {
      alert('something went wrong error creating city');
    } finally {
      setIsLoading(false);
    }
  }

  async function deleteCity(id) {
    try {
      setIsLoading(true);
      await fetch(`${BASE_URL}/cities/${id}`, {
        method: 'DELETE',
      });
      setCities((cities) => cities.filter((city) => city.id !== id));
    } catch {
      alert('something went wrong erroe deleting the city');
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <CitiesContext.Provider
      value={{
        cities,
        isLoading,
        currentCity,
        getCity,
        createNewCity,
        deleteCity,
      }}
    >
      {children}
    </CitiesContext.Provider>
  );
}
CitiesProvider.propTypes = {
  children: PropTypes.object,
};

function useCities() {
  const context = useContext(CitiesContext);

  if (context === undefined)
    throw new Error('CitiesContext was used outside the Citiesprovider');

  return context;
}

export { CitiesProvider, useCities };
