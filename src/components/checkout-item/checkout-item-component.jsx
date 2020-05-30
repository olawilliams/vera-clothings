import React from 'react';

import './checkout-item-styles.scss';

import { connect } from 'react-redux';
import { addItem, clearItemFromCart, removeItem } from '../../redux/cart/cart-action'

const CheckOutItem = ({ cartItem, addItem, clearItemFromCart, removeItem }) =>{
const { name, imageUrl, quantity, price} = cartItem;
return (
    <div className='checkout-item'>
        <div className='image-container'>
            <img src={imageUrl} alt="item"/>
        </div>
        <span className='name'>{name}</span>
       
        <span className='quantity'>
        <div className='arrow' onClick={() => removeItem(cartItem)}>&#10094;</div>
            {quantity}
        <div className='arrow' onClick={() => addItem(cartItem)}>&#10095;</div>
        </span>
        
        <span className='price'>${price}</span>
        <div className='remove-button' onClick={() => clearItemFromCart(cartItem)}>&#10005;</div>

    </div>
)};

const mapDispatch = dispatch => ({
    addItem : item => dispatch(addItem(item)),
    clearItemFromCart: item => dispatch(clearItemFromCart(item)),
    removeItem: item => dispatch(removeItem(item))
})

export default connect(null, 
    mapDispatch)
    (CheckOutItem);