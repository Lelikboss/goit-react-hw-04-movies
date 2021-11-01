import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import Loader from 'react-loader-spinner';
import s from './LoaderContainer.module.css';
const LoaderContainer = () => {
  return (
    <div className={s.loader}>
      <Loader />
    </div>
  );
};
export default LoaderContainer;
