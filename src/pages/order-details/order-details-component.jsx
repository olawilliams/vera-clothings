import React from 'react';
import './order-details-styles.scss';

const OrderDetails = () => (
    <div className='order-details-wrapper'>
        <div className='top-message'>
            <p>Order # </p>
            <p>Your order has been placed and processed</p>
        </div>

        <div className='search-result'>
            <h1 className='title'>Order details</h1>

            <div className='details'>
                <div className='detail'>
                    <div className='detail-prop'>Order Id:</div>
                    <div className='detail-val'></div>
                </div>

                <div className='detail'>
                <div className='detail-prop'>Date Created:</div>
                    <div className='detail-val'></div>
                </div>

                <div className='detail'>
                    <div className='detail-prop'>Order Total:</div>
                    <div className='detail-val'></div>
                </div>

                <div className='detail'>
                <div className='detail-prop'>Email:</div>
                    <div className='detail-val'></div>
                </div>           

                <div className='detail'>
                <div className='detail-prop'>Phone:</div>
                    <div className='detail-val'></div>
                </div>

                <div className='detail'>
                <div className='detail-prop'>Payment Method:</div>
                    <div className='detail-val'></div>
                </div>    

                <div className='detail'>
                <div className='detail-prop'>Shipping Address:</div>
                    <div className='detail-val'></div>
                </div> 

                <div className='detail'>
                <div className='detail-prop'>Billing Address:</div>
                    <div className='detail-val'></div>
                </div>           

           

                

                

            </div>

            <div className='order-items'>

            </div>
        </div>
     
 
    </div>
);

export default OrderDetails;