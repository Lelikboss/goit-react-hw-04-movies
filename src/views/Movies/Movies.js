import { useLocation, useHistory } from 'react-router-dom';
import { useState, useEffect } from 'react';
import queryString from 'query-string';

import { findMovies } from '../../service/movieDb';

import Form from '../../components/Form/Form';
import MoviesList from '../../components/MoviesList/MoviesList';

function MoviesPage() {
  const location = useLocation();
  const history = useHistory();
  const { query } = queryString.parse(location.search);
  const [result, setResult] = useState([]);
  const [searchQuery, setSearchQuery] = useState(query || '');

  useEffect(() => {
    if (!searchQuery) return;
    getMovies();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchQuery]);

  const getMovies = async () => {
    try {
      const results = await findMovies(searchQuery);
      if (results.length === 0) {
        console.log('not found');
      }
      setResult(prev => [...prev, ...results]);
    } catch (error) {
      console.log('Not found', error);
    }
  };

  const onChangeQuery = query => {
    setResult([]);
    setSearchQuery(query);
    history.push({
      ...location,
      search: `query=${query}`,
    });
  };

  return (
    <>
      <Form handleSearchChange={onChangeQuery} />
      <MoviesList result={result} location={location} />
    </>
  );
}
export default MoviesPage;
