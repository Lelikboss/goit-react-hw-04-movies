import { NavLink } from 'react-router-dom';
import s from './Navigation.module.css';
function Navigation() {
  return (
    <nav className={s.nav}>
      <ul className={s.list}>
        <li className={s.item}>
          <NavLink
            to="/"
            exact
            className="navLink"
            activeClassName="activeNavLink"
          >
            Home
          </NavLink>
        </li>
        <li className={s.item}>
          <NavLink
            to="/movies"
            className="navLink"
            activeClassName="activeNavLink"
          >
            Movies
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
export default Navigation;
