import React, { useState } from 'react';
import Slider from 'react-slick';
import Image from 'next/image';
import ProductCard from '../../components/product-card'

const ReactSlick = () => {
    const [ slidesToShow, setSlidesToShow ] = useState(1)
    const [ speed, setSpeed ] = useState(2000)
    const [ props, setProps ] = useState({
        dots: true,
        infinite: true,
        slidesToShow,
        slidesToScroll: 1,
        speed,
        autoplaySpeed: 500,
        cssEase: 'ease-out'
    })

    const arr = [1,2,3,4];
      return (
      <>
            <div className="form-group">
                <div className="form-input">
                    <label htmlFor="slidesToShow">Slide to show</label>
                    <input
                        id="slidesToShow"
                        name="slidesToShow"
                        type="text"
                        placeholder="slides to show"
                        value={slidesToShow}
                        onChange={({ target }) => setSlidesToShow(Number(target.value))}
                    />
                </div>
                <div className="form-input">
                    <label htmlFor="speed">Speed</label>
                    <input
                        id="speed"
                        name="speed"
                        type="text"
                        placeholder="speed"
                        value={speed}
                        onChange={({ target }) => setSpeed(Number(target.value))}
                    />
                </div>
                <button 
                    onClick={() => setProps({...props, slidesToShow, speed})}
                >
                    Apply
                </button>
            </div>

            <h2>Default</h2>
            <div className="container">
                <Slider {...props}>
                    {arr.map((number, i) => (
                        <div key={i}>
                            <Image 
                                src={`https://s3.amazonaws.com/static.neostack.com/img/react-slick/abstract0${number}.jpg`} 
                                width={400} 
                                height={300}
                            />
                        </div>
                    ))}
                </Slider>
            </div>

            <h2>Autoplay and PauseOnHover</h2>
            <div className="container">
                <Slider {...props} autoplay pauseOnHover>
                    {arr.map((number, i) => (
                        <div key={i}>
                            <Image 
                                src={`https://s3.amazonaws.com/static.neostack.com/img/react-slick/abstract0${number}.jpg`} 
                                width={400} 
                                height={300}
                            />
                        </div>
                    ))}
                </Slider>
            </div>

            <h2> With cards</h2>
            <div className="container">
                <Slider {...props}>
                    {arr.map((number, i) => (
                        <ProductCard number={number} key={i} />
                    ))}
                </Slider>
            </div>
        </>
    );
}

export default ReactSlick;
