import { useState, useEffect, lazy } from 'react';
import { Route, useRouteMatch } from 'react-router-dom';
import { useHistory, useLocation, useParams } from 'react-router';

import { fetchDetailsPage } from '../../service/movieDb';

import MovieDetails from '../../components/MovieDetails/MovieDetails';
import MovieDetailsNav from '../../components/MovieDetailsNav/MovieDetailsNav';
import ButtonBack from '../../components/ButtonBack/ButtonBack';

const CastPage = lazy(() => import('../Cast/Cast'));
const ReviewsPage = lazy(() => import('../ReviewsPage/ReviewsPage'));

function MoviesDetailsPage() {
  const history = useHistory();
  const location = useLocation();
  const [movieInfo, setMovieInfo] = useState(null);
  const { movieId } = useParams();
  const { url } = useRouteMatch();

  const handleBackClick = () => history.push(location?.state?.from ?? '/');

  useEffect(() => {
    data();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const data = async () => {
    try {
      const result = await fetchDetailsPage(movieId);
      setMovieInfo(result);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <ButtonBack handleBackClick={handleBackClick} location={location} />
      {movieInfo && (
        <div>
          <MovieDetails movieInfo={movieInfo} />
          <MovieDetailsNav url={url} location={location} />

          <Route path={`${url}/cast`}>
            {movieInfo && <CastPage movieId={movieId} />}
          </Route>
          <Route path={`${url}/reviews`}>
            {movieInfo && <ReviewsPage movieId={movieId} />}
          </Route>
        </div>
      )}
    </>
  );
}
export default MoviesDetailsPage;
