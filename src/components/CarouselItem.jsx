import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { setFavorite, deleteFavorite } from '../actions';

import '../assets/styles/components/CarouselItem.scss';
import playIcon from '../assets/images/play-icon.png';
import plusIcon from '../assets/images/plus-icon.png';
import deleteIcon from '../assets/images/remove-icon.png';

const CarouselItem = (props) => {
  const { cover, title, year, contentRating, duration, id, isList } = props;
  const handleSetFavorite = () => {
    props.setFavorite({
      cover, title, year, contentRating, duration, id,
    });
  };
  const handleDeleteFavorite = () => {
    props.deleteFavorite(id);
  };

  return (
    <div className='carousel-item'>
      <img className='carousel-item__img' src={cover} alt={title} />
      <div className='carousel-item__details'>
        <div>
          <Link to={`/player/${id}`}>
            <img src={playIcon} alt='Play' />
          </Link>
          { isList ? (
            <img
              src={deleteIcon}
              alt='Delete'
              onClick={handleDeleteFavorite}
            />
          ) : (
            <img
              src={plusIcon}
              alt='Plus'
              onClick={handleSetFavorite}
            />
          )}
        </div>
        <p className='carousel-item__title'>{title}</p>
        <p className='carousel-item__subtitle'>
          {`${year} ${contentRating} ${duration} min`}
        </p>
      </div>
    </div>
  );
};

CarouselItem.propTypes = {
  cover: PropTypes.string,
  title: PropTypes.string,
  year: PropTypes.number,
  contentRating: PropTypes.string,
  duration: PropTypes.number,
};

const mapDispatchToProps = {
  setFavorite,
  deleteFavorite,
};

export default connect(null, mapDispatchToProps)(CarouselItem);
