import PropTypes from 'prop-types';

function ButtonBack({ handleBackClick, location }) {
  return (
    <>
      <button type="button" onClick={handleBackClick}>
        {location?.state?.label ?? 'Go back'}
      </button>
    </>
  );
}
export default ButtonBack;
ButtonBack.propTypes = {
  handleBackClick: PropTypes.func.isRequired,
  location: PropTypes.object.isRequired,
};
