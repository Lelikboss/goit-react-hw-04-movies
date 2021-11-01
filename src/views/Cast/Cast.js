import { useState, useEffect } from 'react';
import { fetchCast } from '../../service/movieDb';
import LoaderContainer from '../../components/LoaderContainer/LoaderContainer';
import def from '../../img/defCast.png';
import s from './Cast.module.css';
import PropTypes from 'prop-types';
function Cast({ movieId }) {
  const [auth, setAuth] = useState(null);
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const fetchData = async () => {
    setLoading(true);
    try {
      const results = await fetchCast(movieId);
      setAuth(results);
    } catch (error) {
      console.log('error');
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {isLoading && <LoaderContainer />}
      {auth && (
        <ul className={s.list}>
          {auth.cast.map(e => (
            <li className={s.item} key={e.name}>
              <img
                className={s.img}
                src={
                  e.profile_path === null
                    ? def
                    : `https://image.tmdb.org/t/p/w500${e.profile_path}`
                }
                alt={e.name}
                width={150}
              />
              <p>{e.name}</p>
            </li>
          ))}
        </ul>
      )}
    </>
  );
}
export default Cast;
Cast.propTypes = {
  movieId: PropTypes.string.isRequired,
};
