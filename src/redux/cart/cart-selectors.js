import { createSelector } from 'reselect';

const selectCart = state => state.cart;

export const selectCartItem = createSelector(
    [selectCart],
    cart => cart.cartItems
);

export const selectItemCount = createSelector(
    [selectCartItem],
    cartItems => cartItems.reduce((acc, cartItem) => {
        return acc + cartItem.quantity
    }, 0)
);

export const selectHidden = createSelector(
    [selectCart],
    cart => cart.hidden
);

export const selectTotal = createSelector(
    [selectCartItem],
    cartItems => cartItems.reduce((acc, cartItem) => {
        return  acc + (cartItem.quantity * cartItem.price)
    }, 0)
);

export const selectCartNotification = createSelector(
    [selectCart],
    cart => cart.cartNotification
);