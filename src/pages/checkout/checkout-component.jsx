import React from 'react';
// import StripeCheckout from 'react-stripe-checkout';
import './checkout-styles.scss';

import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect'
import { selectTotal, selectCartItem } from '../../redux/cart/cart-selectors';

import CheckOutItem from '../../components/checkout-item/checkout-item-component';

const CheckOut = ({ total, cartItems }) => (
    <div className='checkout-page'>
       <div className='checkout-header'>
       <div className='header-block'>
                <span>product</span>
        </div>
        <div className='header-block'>
                <span>description</span>
           </div>
           <div className='header-block'>
                <span>quantity</span>
           </div>
           <div className='header-block'>
                <span>price</span>
           </div>
           <div className='header-block'>
                <span>remove</span>
           </div>
       </div> 

    {
        cartItems.map(cartItem => 
            <CheckOutItem key={cartItem.id} cartItem={cartItem} />
        )
    }

       <div className='total'>
           <span>${total}</span>
       </div>

       <div className='test-warning'> 
       *Please use the folllowing test credit card for payment* <br />
                4242 4242 4242 4242 - Exp: 01/21 - CVV: 123
       </div>
    </div>
);

const mapState = createStructuredSelector({
    total: selectTotal,
    cartItems: selectCartItem
})

export default connect(
    mapState)
    (CheckOut);

