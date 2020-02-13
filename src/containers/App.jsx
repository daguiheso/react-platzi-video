import React from 'react';
import Header from '../components/Header';
import Search from '../components/Search';
import Category from '../components/Category';
import Carousel from '../components/Carousel';
import CarouselItem from '../components/CarouselItem';
import '../assets/styles/App.scss';

const App = () => (
  <div className='App'>
    <Header />
    <Search />
    <Category>
      <Carousel>
        <CarouselItem />
        <CarouselItem />
        <CarouselItem />
        <CarouselItem />
      </Carousel>
    </Category>
  </div>
);

export default App;
