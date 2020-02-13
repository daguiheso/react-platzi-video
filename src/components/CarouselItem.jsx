import React from 'react';
import '../assets/styles/components/CarouselItem.scss';
import playIcon from '../assets/images/play-icon.png';
import plusIcon from '../assets/images/plus-icon.png';

const CarouselItem = ({ children }) => (
  <div className='carousel-item'>
    <img className='carousel-item__img' src='https://images.pexels.com/photos/1686657/pexels-photo-1686657.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500' alt='Tech' />
    <div className='carousel-item__details'>
      <div>
        <img src={playIcon} alt='Play' />
        <img src={plusIcon} alt='Plus' />
      </div>
      <p className='carousel-item__title'>Titulo descriptivo</p>
      <p className='carousel-item__subtitle'>2019 16+ 114 min</p>
    </div>
  </div>
);

export default CarouselItem;
