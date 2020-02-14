import React from 'react';
import '../assets/styles/components/CarouselItem.scss';
import playIcon from '../assets/images/play-icon.png';
import plusIcon from '../assets/images/plus-icon.png';

const CarouselItem = ({ cover, title, year, contentRating, duration }) => (
  <div className='carousel-item'>
    <img className='carousel-item__img' src={cover} alt={title} />
    <div className='carousel-item__details'>
      <div>
        <img src={playIcon} alt='Play' />
        <img src={plusIcon} alt='Plus' />
      </div>
      <p className='carousel-item__title'>{title}</p>
      <p className='carousel-item__subtitle'>
        {`${year} ${contentRating} ${duration} min`}
      </p>
    </div>
  </div>
);

export default CarouselItem;
