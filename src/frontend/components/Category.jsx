import React from 'react';
import '../assets/styles/components/Category.scss';

const Category = ({ children, title }) => (
  <div className='category'>
    <h3 className='categories__title'>{title}</h3>
    {children}
  </div>
);

export default Category;
