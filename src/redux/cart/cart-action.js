import cartActionTypes from './cart-action-types'

export const toggleHidden = () => ({
    type: cartActionTypes.TOGGLE_CART_HIDDEN,
});

export const addItem = item => ({
    type: cartActionTypes.ADD_ITEM,
    payload: item
});

export const clearItemFromCart = item => ({
    type: cartActionTypes.CLEAR_ITEM_FROM_CART,
    payload: item
});

export const removeItem = item => ({
    type: cartActionTypes.REMOVE_ITEM,
    payload: item
});

export const cartNotification = () =>  ({
    type: cartActionTypes.CART_NOTIFICATION
})