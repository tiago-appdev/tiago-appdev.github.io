import PropTypes from 'prop-types';

const GifGridItem = ({ title, url }) => {
  // console.log(img);
  return (
    <div className="card animate__animated animate__fadeInBottomLeft">
      <img src={url} alt={title} />
      <p>{title}</p>
    </div>
  );
};

export default GifGridItem;

GifGridItem.propTypes = {
  title: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
};
