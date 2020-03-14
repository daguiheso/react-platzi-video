import React from 'react';
import { connect } from 'react-redux';

import Search from '../components/Search';
import Category from '../components/Category';
import Carousel from '../components/Carousel';
import CarouselItem from '../components/CarouselItem';

import '../assets/styles/App.scss';

const Home = ({ mylist = [], trends, originals }) => {
  return (
    <>
      <Search />
      { mylist.length > 0 && (
        <Category title='Mi Lista'>
          <Carousel>
            { mylist.map((item) => (
              <CarouselItem
                key={item.id}
                {...item}
                isList
              />
            ))}
          </Carousel>
        </Category>
      )}

      <Category title='Tendencias'>
        <Carousel>
          { trends.map((item) => (
            <CarouselItem key={item.id} {...item} />
          ))}
        </Carousel>
      </Category>

      <Category title='Proximos'>
        <Carousel>
          { originals.map((item) => (
            <CarouselItem key={item.id} {...item} />
          ))}
        </Carousel>
      </Category>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    mylist: state.mylist,
    trends: state.trends,
    originals: state.originals,
  };
};

export default connect(mapStateToProps, null)(Home);
