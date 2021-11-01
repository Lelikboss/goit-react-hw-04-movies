import { NavLink } from 'react-router-dom';
import s from './MovieDetailsNav.module.css';
import PropTypes from 'prop-types';

function MovieDetailsNav({ url, location }) {
  return (
    <>
      <h2 className={s.title}>Additional information</h2>
      <ul className={s.list}>
        <li className={s.item}>
          <NavLink
            to={{
              pathname: `${url}/cast`,
              state: { ...location.state },
            }}
            className="navLink"
            activeClassName="activeNavLink"
          >
            Cast
          </NavLink>
        </li>
        <li className={s.item}>
          <NavLink
            to={{
              pathname: `${url}/reviews`,
              state: { ...location.state },
            }}
            className="navLink"
            activeClassName="activeNavLink"
          >
            Reviews
          </NavLink>
        </li>
      </ul>
    </>
  );
}
export default MovieDetailsNav;
MovieDetailsNav.propTypes = {
  url: PropTypes.string.isRequired,
  location: PropTypes.object.isRequired,
};
