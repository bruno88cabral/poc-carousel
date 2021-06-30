import React from 'react';

const ProductCard = ({ children }) => {
    return (
        <div className="product-card">
            { children }
        </div>
    )
}

export default ProductCard;