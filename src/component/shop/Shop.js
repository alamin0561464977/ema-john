import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { addToDb, getCard } from '../../utilities/fakedb';
import Card from '../Card/Card';
import Product from '../Product/Product';
import './Shop.css';

const Shop = () => {
    const [products, setProducts] = useState([]);
    const [card, setCard] = useState([]);
    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setProducts(data))

    }, []);
    useEffect(() => {
        const card = getCard();
        const saveCard = [];
        for (const id in card) {
            const newCard = products.find(product => product.id === id)
            if (newCard) {
                const quantity = card[id];
                newCard.quantity = quantity;
                saveCard.push(newCard);

            }
        }
        setCard(saveCard)
    }, [products])
    const addToCard = (selectedProduct) => {
        let newCard = [];
        const exists = card.find(product => product.id === selectedProduct.id);
        if (!exists) {
            selectedProduct.quantity = 1;
            newCard = [...card, selectedProduct];
        }
        else {
            const rest = card.filter(product => product.id !== selectedProduct.id);
            exists.quantity = exists.quantity + 1;
            newCard = [...rest, exists];
        }
        setCard(newCard);
        addToDb(selectedProduct.id)
    }
    console.log(card)
    return (
        <div className='shop'>
            <div className="product-section">
                {
                    products.map(product => <Product
                        product={product}
                        key={product.id}
                        addToCard={addToCard}
                    ></Product>)
                }
            </div>
            <div className='card-section'>
                <Card card={card}></Card>
            </div>
        </div>
    );
};

export default Shop;