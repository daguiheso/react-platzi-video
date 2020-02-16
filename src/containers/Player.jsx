import React from 'react';
import '../assets/styles/components/Player.scss';

const Player = (props) => {
  const { history } = props;
  return (
    <div className='player'>
      <video controls autoPlay>
        <source src='' type='video/mp4' />
      </video>
      <div className='player__back'>
        <button type='button' onClick={() => history.goBack()}>Regresar</button>
      </div>
    </div>
  );
};

export default Player;
