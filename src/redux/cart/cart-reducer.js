import cartActionTypes from './cart-action-types';
import orderActionTypes from '../orders/order-types'
import { addItemToCart, removeItem } from './cart-utils';

const INITIAL_STATE = {
    hidden: true,
    cartItems: [],
    orderItems: [],
    cartNotification: false
};

const cartReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case cartActionTypes.TOGGLE_CART_HIDDEN:
            
            return {
                ...state,
                hidden: !state.hidden
            };

            case cartActionTypes.ADD_ITEM:

            return {
                ...state,
                cartItems: addItemToCart(state.cartItems, action.payload),
            }
    
            case cartActionTypes.CLEAR_ITEM_FROM_CART:
                return {
                    ...state,
                    cartItems: state.cartItems.filter(cartItem => cartItem.id !== action.payload.id)
                }

            case cartActionTypes.REMOVE_ITEM:
                return {
                    ...state,
                    cartItems: removeItem(state.cartItems, action.payload)
                }

            case cartActionTypes.CART_NOTIFICATION:
                return {
                    ...state,
                    cartNotification : !state.cartNotification
                }

            case orderActionTypes.GET_PAYMENT_TOKEN :
                return {
                    ...state,
                    orderItems: [...state.cartItems]
                }
        default:
           return state;
    }
}

export default cartReducer;