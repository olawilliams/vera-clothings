import React from 'react';

import { connect } from 'react-redux';

import './cart-dropdown-styles.scss';

import CartItem from '../cart-item/cart-item-component';
import CustomButton from '../custom-button/custom-button-component';

const CartDropDown = ({ cartItems }) => (
    <div className='cart-dropdown'>
        <div className='cart-items'>
            {
                cartItems.map(cartItem => (
                    <CartItem key={cartItem.id} item={cartItem}/>
                ))
            }
        </div>

        
        <CustomButton>GO to CheckOut</CustomButton>
    </div>
);

const mapState = ({ cart: { cartItems}}) => ({
    cartItems
})

export default connect(mapState)(CartDropDown);