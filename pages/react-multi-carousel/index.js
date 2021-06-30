import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Image from 'next/image';
import ProductCard from '../../components/product-card'

const ReactMultiCarousel = () => {
    const arr = [1,2,3,4,2,1];
    const url = number =>
          `https://s3.amazonaws.com/static.neostack.com/img/react-slick/abstract0${number}.jpg`
    return (
        <>
            <h1>react-multi-carousel</h1>

            <section>
                <p>breakpoints:</p>
                <ul>
                    <li>superLargeDesktop (max: 4000, min: 3000): 4 items</li>
                    <li>desktop ( max: 3000, min: 1024 ): 3 items</li>
                    <li>tablet (max: 1024, min: 464 ): 2 items</li>
                    <li>mobile (max: 464, min: 0 ): 1 item</li>
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
            </section>

            <br/>
            <br/>
            <br/>
            <br/>

            <section>
                <p>breakpoints:</p>
                <ul>
                    <li>superLargeDesktop (max: 4000, min: 3000): 1 item</li>
                    <li>desktop ( max: 3000, min: 1024 ): 4 items</li>
                    <li>tablet (max: 1024, min: 464 ): 3 items</li>
                    <li>mobile (max: 464, min: 0 ): 2 items</li>
                </ul>
                <p>infinite: false</p>

                <Carousel ssr infinite={false} responsive={{
                    superLargeDesktop: {
                        breakpoint: { max: 4000, min: 3000 },
                        items: 1
                    },
                    desktop: {
                        breakpoint: { max: 3000, min: 1024 },
                        items: 4
                    },
                    tablet: {
                        breakpoint: { max: 1024, min: 464 },
                        items: 3
                    },
                    mobile: {
                        breakpoint: { max: 464, min: 0 },
                        items: 2
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
            </section>

            <br/>
            <br/>
            <br/>
            <br/>

            <section>
                <p>breakpoints:</p>
                <ul>
                    <li>superLargeDesktop (max: 4000, min: 3000): 2 item</li>
                    <li>desktop ( max: 3000, min: 1024 ): 1 items</li>
                    <li>tablet (max: 1024, min: 464 ): 4 items</li>
                    <li>mobile (max: 464, min: 0 ): 3 items</li>
                </ul>
                <p>infinite: true</p>

                <Carousel ssr infinite responsive={{
                    superLargeDesktop: {
                        breakpoint: { max: 4000, min: 3000 },
                        items: 2
                    },
                    desktop: {
                        breakpoint: { max: 3000, min: 1024 },
                        items: 1
                    },
                    tablet: {
                        breakpoint: { max: 1024, min: 464 },
                        items: 4
                    },
                    mobile: {
                        breakpoint: { max: 464, min: 0 },
                        items: 3
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
            </section>

            <section>
                <p>breakpoints:</p>
                <ul>
                    <li>superLargeDesktop (max: 4000, min: 3000): 1 item</li>
                    <li>desktop ( max: 3000, min: 1024 ): 2 items</li>
                    <li>tablet (max: 1024, min: 464 ): 3 items</li>
                    <li>mobile (max: 464, min: 0 ): 4 items</li>
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
            </section>

            <section>
                <p>breakpoints:</p>
                <ul>
                    <li>superLargeDesktop (max: 4000, min: 3000): 1 item</li>
                    <li>desktop ( max: 3000, min: 1024 ): 2 items</li>
                    <li>tablet (max: 1024, min: 464 ): 3 items</li>
                    <li>mobile (max: 464, min: 0 ): 4 items</li>
                </ul>
                <p>infinite: true</p>

                <Carousel ssr infinite responsive={{
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
                        <ProductCard number={number} key={i}>
                            <Image 
                                src={url(number)}  
                                width={200} 
                                height={150}
                            />
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                            <h3> R$ 162,96 </h3>
                        </ProductCard>
                    ))}
                </Carousel>
            </section>

            <section>
                <p>breakpoints:</p>
                <ul>
                    <li>superLargeDesktop (max: 4000, min: 3000): 1 item</li>
                    <li>desktop ( max: 3000, min: 1024 ): 2 items</li>
                    <li>tablet (max: 1024, min: 464 ): 3 items</li>
                    <li>mobile (max: 464, min: 0 ): 4 items</li>
                </ul>
                <p>infinite: true</p>

                <Carousel ssr infinite responsive={{
                    superLargeDesktop: {
                        breakpoint: { max: 4000, min: 3000 },
                        items: 4
                    },
                    desktop: {
                        breakpoint: { max: 3000, min: 1024 },
                        items: 4
                    },
                    tablet: {
                        breakpoint: { max: 1024, min: 464 },
                        items: 3
                    },
                    mobile: {
                        breakpoint: { max: 464, min: 0 },
                        items: 2
                    }
                }}>
                    {arr.map((number, i) => (
                        <ProductCard number={number} key={i}>
                            <Image 
                                src={url(number)}  
                                width={200} 
                                height={150}
                            />
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                            <h3> R$ 162,96 </h3>
                        </ProductCard>
                    ))}
                </Carousel>
            </section>
            

        </>
    )
}

export default ReactMultiCarousel;