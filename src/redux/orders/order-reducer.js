import orderActionTypes from './order-types'
const INITIAL_STATE = {
    token: null
}

const orderDetails = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case orderActionTypes.GET_PAYMENT_TOKEN:
            
            return {
                ...state,
                token: action.payload
            }
    
        default:
           return state;
    }
};

export default orderDetails;