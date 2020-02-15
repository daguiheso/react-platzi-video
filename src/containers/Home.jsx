import React from 'react';
import Search from '../components/Search';
import Category from '../components/Category';
import Carousel from '../components/Carousel';
import CarouselItem from '../components/CarouselItem';

import useInitialState from '../hooks/useInitialState';

import '../assets/styles/App.scss';

const API = 'http://localhost:3000/initalState';

const Home = () => {
  const initialState = useInitialState(API);
  return (
    <>
      <Search />
      { initialState.mylist.length > 0 && (
        <Category title='Mi Lista'>
          <Carousel>
            { initialState.mylist.map((item) => (
              <CarouselItem key={item.id} {...item} />
            ))}
          </Carousel>
        </Category>
      )}

      <Category title='Tendencias'>
        <Carousel>
          { initialState.trends.map((item) => (
            <CarouselItem key={item.id} {...item} />
          ))}
        </Carousel>
      </Category>

      <Category title='Proximos'>
        <Carousel>
          { initialState.originals.map((item) => (
            <CarouselItem key={item.id} {...item} />
          ))}
        </Carousel>
      </Category>
    </>
  );
};

export default Home;
