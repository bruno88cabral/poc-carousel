import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Image from 'next/image';
import { useState, useCallback, useEffect } from 'react';


const ReactMultiCarousel = () => {
    const arr = [1,2,3,4,2,1];
    const url = number =>
          `https://s3.amazonaws.com/static.neostack.com/img/react-slick/abstract0${number}.jpg`
    return (
        <>
            <h1>react-multi-carousel</h1>

            <p>breakpoints:</p>
            <ul>
                <li>superLargeDesktop (max: 4000, min: 3000) : 4 items</li>
                <li>desktop ( max: 3000, min: 1024 ) : 3 items</li>
                <li>tablet (max: 1024, min: 464 ) : 2 items</li>
                <li>mobile (max: 464, min: 0 ) : 1 item</li>
            </ul>
            <p>infinite: false</p>            
            <Carousel ssr infinite={false} responsive={{
                superLargeDesktop: {
                    breakpoint: { max: 4000, min: 3000 },
                    items: 4
                },
                desktop: {
                    breakpoint: { max: 3000, min: 1024 },
                    items: 3
                },
                tablet: {
                    breakpoint: { max: 1024, min: 464 },
                    items: 2
                },
                mobile: {
                    breakpoint: { max: 464, min: 0 },
                    items: 1
                }
            }}>
                {arr.map((number, i) => (
                    <div key={i}>
                        <Image 
                            src={url(number)}  
                            width={400} 
                            height={300}
                        />
                    </div>
                ))}
            </Carousel>
            
            <br/>
            <br/>
            <br/>
            <br/>
            
            <p>breakpoints:</p>
            <ul>
                <li>superLargeDesktop (max: 4000, min: 3000) : 1 item</li>
                <li>desktop ( max: 3000, min: 1024 ) : 2 items</li>
                <li>tablet (max: 1024, min: 464 ) : 3 items</li>
                <li>mobile (max: 464, min: 0 ) : 4 items</li>
            </ul>
            <p>infinite: true</p>

            <Carousel ssr infinite responsive={{
                superLargeDesktop: {
                    breakpoint: { max: 4000, min: 3000 },
                    items: 1
                },
                desktop: {
                    breakpoint: { max: 3000, min: 1024 },
                    items: 2
                },
                tablet: {
                    breakpoint: { max: 1024, min: 464 },
                    items: 3
                },
                mobile: {
                    breakpoint: { max: 464, min: 0 },
                    items: 4
                }
            }}>
                {arr.map((number, i) => (
                    <div key={i}>
                        <Image 
                            src={url(number)}  
                            width={400} 
                            height={300}
                        />
                    </div>
                ))}
            </Carousel>

        </>
    )
}

export default ReactMultiCarousel;