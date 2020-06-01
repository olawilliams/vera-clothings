import React from 'react';
import { connect } from 'react-redux';
import StripeCheckout from 'react-stripe-checkout';
import { getPaymentToken } from '../../redux/orders/order-action';
import './stripe-styles.scss'


const StripeCheckoutButton = ({ price, getPaymentToken }) => {
    const publishableKey ='pk_test_8NJurycMBAciBdliuXj9OUri00Et04EpfO';
    const priceForStripe = price * 100;

    const onToken = token => {
        
        console.log(token)
    }
    return (
    <div>
        <StripeCheckout 
            label='Pay Now'
            name='VERA Clothings'
            billingAddress
            shippingAddress
            image='https://svgshare.com/i/CUz.svg'
            description={`Your total is $${price}`}
            amount={priceForStripe}
            stripeKey={publishableKey}
            token={onToken}
            
        >
            <button  className="btn "
                onClick={() => getPaymentToken(onToken)} >
                 Pay Now

            </button>
        </StripeCheckout>
    </div>
)};

const mapDispatch = dispatch =>  ({
    getPaymentToken: token => dispatch(getPaymentToken(token))
});


export default connect(
    null, mapDispatch)
    (StripeCheckoutButton);