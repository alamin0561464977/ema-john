import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

import './Product.css';

const Product = ({ product, addToCard }) => {
    const { name, price, stock, ratings, img } = product;
    return (
        <div className='product-card'>
            <div className='card-div'>
                <img src={img} alt="" />
                <div className='product-info'>
                    <h3>{name}</h3>
                    <p>Price: ${price}</p>
                    <p>Stock: {stock}</p>
                    <p>Rating: {ratings}</p>
                </div>
            </div>
            <button onClick={() => addToCard(product)} className='btn'>Add to Card
                <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
            </button>
        </div>
    );
};

export default Product;