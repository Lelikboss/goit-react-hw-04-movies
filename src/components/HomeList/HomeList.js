import { Link } from 'react-router-dom';
import s from './HomeList.module.css';
import ImgUrl from '../ImgUrl/ImgUlr';
import PropTypes from 'prop-types';

function HomeList({ title, location }) {
  return (
    <>
      <ul className={s.list}>
        {title.map(({ original_title, id, poster_path }) => (
          <li key={id} className={s.item}>
            <Link
              className={s.link}
              to={{
                pathname: `/movies/${id}`,
                state: { from: location, label: `back to home` },
              }}
            >
              <img
                className={s.img}
                src={`${ImgUrl}${poster_path}`}
                alt={original_title}
                width={150}
              />
              <p className={s.p}>{original_title}</p>
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
}
export default HomeList;
HomeList.propTypes = {
  title: PropTypes.array.isRequired,
  location: PropTypes.object.isRequired,
};
