import React from 'react';
import './Product.css';

const Product = (props) => {
    console.log(props.product);
    const { category, name, seller, price, stock, rating, ratingsCount, img } = props.product;
    return (
        <div className='product-card'>
            <div className='card-div'>
                <img src={img} alt="" />
                <div className='product-info'>
                    <h3>{name}</h3>
                    <p>Price: ${price}</p>
                    <p>Stock: {stock}</p>
                    <p>Seller: {seller}</p>
                </div>
            </div>
            <button className='btn'>Add to Card</button>
        </div>
    );
};

export default Product;