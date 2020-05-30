import React from 'react';

import { connect } from 'react-redux';

import { selectCartItem} from '../../redux/cart/cart-selectors';

import { withRouter } from 'react-router-dom';

import { toggleHidden } from '../../redux/cart/cart-action'

import './cart-dropdown-styles.scss';

import CartItem from '../cart-item/cart-item-component';
import CustomButton from '../custom-button/custom-button-component';

const CartDropDown = ({ cartItems, history, toggleHidden }) => (
    <div className='cart-dropdown'>

        {
            cartItems.length !== 0 ? 
            <div className='cart-items'>
            {
                cartItems.map(cartItem =>  (
                    <CartItem key={cartItem.id} item={cartItem}/>)
               )
            }
        </div>
            :<span className='empty'>Your cart is empty</span>
        }
        

        
        <CustomButton onClick={() => {
            toggleHidden()
            history.push('/checkout')}}>GO to CheckOut</CustomButton>
    </div>
);

const mapState = state => ({
    cartItems : selectCartItem(state)
});

const mapDispatch = dispatch => ({
    toggleHidden: () => dispatch(toggleHidden())
})

export default withRouter(
    connect(
        mapState,
         mapDispatch)
         (CartDropDown));