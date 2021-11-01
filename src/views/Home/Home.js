import s from './Home.module.css';

import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

import { fetchTrend } from '../../service/movieDb';

import HomeList from '../../components/HomeList/HomeList';

function HomePage() {
  const [title, setTitle] = useState([]);
  const location = useLocation();

  useEffect(() => {
    data();
  }, []);

  const data = async () => {
    try {
      const results = await fetchTrend();
      setTitle(results);
    } catch (error) {
      console.log(error);
    }
  };

  let now = new Date();
  let day = now.getDate() < 10 ? '0' + now.getDate() : now.getDate();
  let mounth =
    now.getMonth() + 1 < 10 ? '0' + (now.getMonth() + 1) : now.getMonth() + 1;
  let year = now.getFullYear();
  if (mounth < 9) {
    mounth = '0' + now.getMonth();
  }
  const currentDate = `(${day}/${mounth}/${year})`;
  return (
    <>
      <h1 className={s.title}>
        Trending today <span className={s.data}>{currentDate}</span>
      </h1>
      <HomeList location={location} title={title} />
    </>
  );
}
export default HomePage;
