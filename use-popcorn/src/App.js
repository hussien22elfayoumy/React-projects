import { useState, useEffect } from 'react';
import Navbar from './navbar/Navbar';
import Search from './navbar/Search';
import NumResults from './navbar/NumResults';
import Main from './components/Main';
import Box from './components/Box';
import Loader from './components/Loader';
import ErrorMessage from './components/ErrorMessage';
import MovieList from './moviesList/MovieList';
import MovieDetails from './watchedMovies/MovieDetails';
import WatchedSummary from './watchedMovies/WatchedSummary';
import WatchedMovie from './watchedMovies/WatchedMovie';

const KEY = 'd592b731';

export default function App() {
  const [query, setQuery] = useState('');
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [selectedId, setSelectedId] = useState(null);
  // const [watched, setWatched] = useState([]);

  const [watched, setWatched] = useState(function () {
    const storaged = localStorage.getItem('watched');
    return JSON.parse(storaged);
  });

  function handleSelectMovie(id) {
    setSelectedId(id === selectedId ? null : id);
  }

  function handleCloseMovie() {
    setSelectedId(null);
  }

  function handleAddWatched(movie) {
    setWatched((watched) => [...watched, movie]);
  }

  function handleDeleteWatched(id) {
    setWatched((watched) => watched.filter((movie) => movie.imdbID !== id));
  }

  useEffect(
    function () {
      localStorage.setItem('watched', JSON.stringify(watched));
    },
    [watched]
  );

  useEffect(
    function () {
      const controller = new AbortController();

      setIsLoading(true);
      const fetchData = async function () {
        try {
          setError('');
          const res = await fetch(
            `http://www.omdbapi.com/?apikey=${KEY}&s=${query}`,
            { signal: controller.signal }
          );

          if (!res.ok) throw new Error('something went wrong with fetching');
          const data = await res.json();

          if (data.Response === 'False') throw new Error('Movie not found');

          setMovies(data.Search);
          setError('');
        } catch (err) {
          if (err.name !== 'AbortError') {
            console.log(err.message);
            setError(err.message);
          }
        } finally {
          setIsLoading(false);
        }
      };

      if (query.length < 3) {
        setIsLoading(false);
        setMovies([]);
        setError('');
        return;
      }

      handleCloseMovie();
      fetchData();
      return () => controller.abort();
    },
    [query]
  );

  return (
    <>
      <Navbar>
        <Search query={query} setQuery={setQuery} />
        <NumResults movies={movies} />
      </Navbar>
      <Main>
        <Box>
          {/* {isLoading ? <Loader /> : <MovieList movies={movies} />} */}

          {isLoading && <Loader />}
          {!isLoading && !error && (
            <MovieList movies={movies} onSelectMovie={handleSelectMovie} />
          )}
          {error && <ErrorMessage message={error} />}
        </Box>
        <Box>
          {selectedId ? (
            <MovieDetails
              selectedId={selectedId}
              onCloseMovie={handleCloseMovie}
              onAddWatched={handleAddWatched}
              watched={watched}
            />
          ) : (
            <>
              <WatchedSummary watched={watched} />
              <WatchedMovieList
                watched={watched}
                onDeleteWatched={handleDeleteWatched}
              />
            </>
          )}
        </Box>
      </Main>
    </>
  );
}

function WatchedMovieList({ watched, onDeleteWatched }) {
  return (
    <ul className='list'>
      {watched.map((movie) => (
        <WatchedMovie
          key={movie.imdbID}
          movie={movie}
          onDeleteWatched={onDeleteWatched}
        />
      ))}
    </ul>
  );
}
