import React from 'react';
import './Card.css';

const Card = ({ card }) => {
    console.log(card)
    let totalPrice = 0;
    let totalShipping = 0;
    let quantity = 0;
    for (let item of card) {
        console.log(item)
        quantity = quantity + item.quantity;
        totalPrice = totalPrice + item.price * quantity;
        totalShipping = totalShipping + item.shipping * quantity;
    }
    let totalTex = totalPrice * 0.1;
    let grandTotal = totalPrice + totalShipping + totalTex;
    return (
        <div>
            <h2>Order Summary</h2>
            <h3>Selected Items: {quantity}</h3>
            <h4>Total Price: ${totalPrice}</h4>
            <h4>Total Shipping Charge: ${totalShipping}</h4>
            <h4>Total Tex: ${totalTex.toFixed(2)}</h4>
            <h4>Grand Total: ${grandTotal.toFixed(2)}</h4>
        </div>
    );
};

export default Card;