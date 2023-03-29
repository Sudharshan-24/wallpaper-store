import React from 'react';
import './Wallpapers.css';

const wallpapers = [
  {
    id: 1,
    img: './images/wallpaper1.jpg',
  },
  {
    id: 2,
    img: './images/wallpaper2.jpg',
  },
  {
    id: 3,
    img: './images/wallpaper3.jpg',
  },
  {
    id: 4,
    img: './images/wallpaper4.png',
  },
  {
    id: 5,
    img: './images/wallpaper5.jpg',
  },
  {
    id: 6,
    img: './images/wallpaper6.jpg',
  },
  {
    id: 7,
    img: './images/wallpaper7.jpg',
  },
  {
    id: 8,
    img: './images/wallpaper8.jpg',
  },
  {
    id: 9,
    img: './images/wallpaper9.png',
  },
  {
    id: 10,
    img: './images/wallpaper10.jpg',
  },
];

const Wallpapers = () => {
  return (
    <section className='wallpapers'>
      {wallpapers.map((wallpaper) => {
        return <Wallpaper wallpaper={wallpaper} key={wallpaper.id} />;
      })}
    </section>
  );
};

const Wallpaper = (props) => {
  const { img } = props.wallpaper;
  return (
    <article className='wallpaper'>
      <img src={img} alt='' />
    </article>
  );
};

export default Wallpapers;
