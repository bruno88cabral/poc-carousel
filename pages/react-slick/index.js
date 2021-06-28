import React, { useState } from 'react';
import Slider from 'react-slick';
import Image from 'next/image';

const ReactSlick = () => {
    const [ slidesToShow, setSlidesToShow ] = useState(1)
    const [ props, setProps ] = useState({
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow,
        slidesToScroll: 1
    })

    const arr = [1,2,3,4];
    console.log(props)
      return (
        <>
            <div>
                <label>Slide to show</label>
                <input 
                    name="slidesToShow"
                    type="text"
                    placeholder="slides to show"
                    value={slidesToShow}
                    onChange={({ target }) => setSlidesToShow(Number(target.value))}
                />
            </div>
            <button onClick={() => setProps({...props, slidesToShow})}>mudar</button>

            <div className="container">
                <Slider {...props}>
                    {arr.map((number, i) => (
                        <div key={i}>
                            <Image 
                                src={`https://s3.amazonaws.com/static.neostack.com/img/react-slick/abstract0${number}.jpg`} width={400} height={300}
                            />
                        </div>
                    ))}
                </Slider>
            </div>
        </>
    );
}

export default ReactSlick;
