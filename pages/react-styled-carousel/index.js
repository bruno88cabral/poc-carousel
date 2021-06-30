import React from 'react';
import Image from 'next/image';
import Slider from 'react-styled-carousel';

const responsive = [
  { breakPoint: 1280, cardsToShow: 3 }, // this will be applied if screen size is greater than 1280px. cardsToShow will become 4.
  { breakPoint: 760, cardsToShow: 2 },
];
 
const ReactStyledCarousel = () => {
  const arr = [1,2,3,4];
  const url = number =>
      `https://s3.amazonaws.com/static.neostack.com/img/react-slick/abstract0${number}.jpg`
  return (
    <Slider responsive={responsive}>
      {arr.map((number, i) => (
          <div key={i}>
              <Image 
                  src={url(number)} 
                  width={400} 
                  height={300}
              />
          </div>
      ))}
    </Slider>
  );
}
export default ReactStyledCarousel