import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Product from '../Product/Product';
import './Shop.css';

const Shop = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setProducts(data))

    }, [])
    return (
        <div className='shop'>
            <div className="product-section">
                {
                    products.map(product => <Product product={product} key={product.id}></Product>)
                }
            </div>
            <div className='card-section'>
                <h1>card</h1>
            </div>
        </div>
    );
};

export default Shop;