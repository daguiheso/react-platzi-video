import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import Search from '../components/Search';
import Category from '../components/Category';
import Carousel from '../components/Carousel';
import CarouselItem from '../components/CarouselItem';
import Footer from '../components/Footer';

import '../assets/styles/App.scss';

const App = () => {
  const [videos, setVideos] = useState({
    mylist: [],
    trends: [],
    originals: [],
  });

  useEffect(() => {
    fetch('http://localhost:3000/initalState')
      .then((response) => response.json())
      .then((data) => setVideos(data));
  }, []);

  return (
    <div className='App'>
      <Header />
      <Search />
      { videos.mylist.length > 0 && (
        <Category title='Mi Lista'>
          <Carousel>
            <CarouselItem />
          </Carousel>
        </Category>
      )}

      <Category title='Tendencias'>
        <Carousel>
          { videos.trends.map((item) => (
            <CarouselItem key={item.id} {...item} />
          ))}
        </Carousel>
      </Category>

      <Category title='Proximos'>
        <Carousel>
          { videos.originals.map((item) => (
            <CarouselItem key={item.id} {...item} />
          ))}
        </Carousel>
      </Category>
      <Footer />
    </div>
  );
};

export default App;
