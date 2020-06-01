import orderActionTypes from './order-types';

export const getPaymentToken = token => ({
    type: orderActionTypes.GET_PAYMENT_TOKEN,
    payload: token
});