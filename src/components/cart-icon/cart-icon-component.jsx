import React from 'react';
import { ReactComponent as ShoppingBag } from '../../assets/shopping-bag.svg';

import { connect } from 'react-redux';
import { toggleHidden } from '../../redux/cart/cart-action' 

import './cart-icon-styles.scss';

const CartIcon = ({ toggleHidden, itemCount }) => (
    <div className='cart-icon' onClick={toggleHidden}>
        <ShoppingBag  className='icon'/>
        <span className='item-count'>{itemCount}</span>
    </div>
);

const mapDispatch = dispatch => ({
    toggleHidden: () => dispatch(toggleHidden())
})

const mapState = ({ cart: {cartItems }}) => ({
    itemCount: cartItems.reduce((acc, cartItem) => {
        return acc + cartItem.quantity
    }, 0)
})

export default connect(mapState,
    mapDispatch)
     (CartIcon);