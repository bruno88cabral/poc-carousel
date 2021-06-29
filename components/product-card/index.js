import React from 'react';
import Image from 'next/image';

const ProductCard = ({ number }) => {
    return (
        <div className="product-card">
            <Image 
                src={`https://s3.amazonaws.com/static.neostack.com/img/react-slick/abstract0${number}.jpg`} 
                width={200} 
                height={150}
            />
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            <h3> R$ 162,96 </h3>
        </div>
    )
}

export default ProductCard;