import { useState, useEffect } from 'react';
import s from './Reviews.module.css';
import { fetchReviews } from '../../service/movieDb';
import LoaderContainer from '../../components/LoaderContainer/LoaderContainer';
import ImgUrl from '../../components/ImgUrl/ImgUlr';
import def from '../../img/defRew.jpg';
import PropTypes from 'prop-types';

function ReviewsPage({ movieId }) {
  const [reviews, setReviews] = useState([]);
  const [isLoading, setLoading] = useState(false);
  useEffect(() => {
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const fetchData = async () => {
    setLoading(true);

    try {
      const { results } = await fetchReviews(movieId);

      setReviews(results);
    } catch (error) {
      console.log('Error', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {isLoading && <LoaderContainer />}
      {reviews.length !== 0 ? (
        <ul className={s.list}>
          {reviews.map(e => (
            <li className={s.item} key={e.id}>
              <div>
                <img
                  src={
                    e.author_details.avatar_path === null ||
                    e.author_details.avatar_path.includes('gravatar')
                      ? def
                      : `${ImgUrl}${e.author_details.avatar_path}`
                  }
                  alt={e.author}
                  width={100}
                />
                <p className={s.auth}>{e.author}</p>
              </div>
              <p className={s.content}>{e.content}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p className={s.empty}>It's empty here</p>
      )}
    </>
  );
}
export default ReviewsPage;
ReviewsPage.propTypes = {
  movieId: PropTypes.string.isRequired,
};
