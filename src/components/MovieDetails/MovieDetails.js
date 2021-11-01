import s from './MovieDetails.module.css';
import ImgUrl from '../ImgUrl/ImgUlr';
import PropTypes from 'prop-types';

function MovieDetails({ movieInfo }) {
  return (
    <div className={s.mainWrapper}>
      <img
        className={s.img}
        src={`${ImgUrl}${movieInfo.poster_path}`}
        alt={movieInfo.original_title}
        width={300}
      />
      <div className={s.wrapper}>
        <h1 className={s.title}>
          {movieInfo.original_title} ({movieInfo.release_date.substring(0, 4)})
        </h1>
        <h4>User score: {movieInfo.vote_average * 10}%</h4>
        <h3 className={s.secondaryTitle}>Overview</h3>
        <p className={s.overview}>{movieInfo.overview}</p>
        <h3 className={s.secondaryTitle}>Genres</h3>
        <ul className={s.list}>
          {movieInfo.genres.map(e => (
            <li className={s.item} key={e.name}>
              {e.name}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
export default MovieDetails;
MovieDetails.propTypes = {
  movieInfo: PropTypes.object.isRequired,
};
