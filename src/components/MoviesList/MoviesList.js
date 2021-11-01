import { NavLink } from 'react-router-dom';
import s from './MoviesList.module.css';
import ImgUrl from '../ImgUrl/ImgUlr';
import def from '../../img/def.jpg';
import PropTypes from 'prop-types';

function MoviesList({ result, location }) {
  return (
    <>
      <ul className={s.list}>
        {result.map(({ original_title, id, poster_path }) => (
          <li key={id} className={s.item}>
            <NavLink
              className={s.link}
              key={id}
              to={{
                pathname: `/movies/${id}`,
                state: { from: location, label: 'Go to list' },
              }}
            >
              <img
                className={s.img}
                // src={`${ImgUrl}${poster_path}`}
                src={poster_path === null ? def : `${ImgUrl}${poster_path}`}
                alt={original_title}
                width={150}
              />
              <p className={s.p}>{original_title}</p>
            </NavLink>
          </li>
        ))}
      </ul>
    </>
  );
}
export default MoviesList;
MoviesList.propTypes = {
  result: PropTypes.array.isRequired,
  location: PropTypes.object.isRequired,
};
