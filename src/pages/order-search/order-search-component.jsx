import React from 'react';
import './order-search-styles.scss';

import CustomButton from '../../components/custom-button/custom-button-component';
import FormInput from '../../components/form-input/form-input-component';

class OrderSearch extends React.Component {
    constructor() {
        super();

        this.state = {
            email: '',
            orderId: ''
        }
    }


     handleChange = (e) => {
        const { name, value } = e.target;
        this.setState({ [name] : value}, () => console.log(this.state))
    }

    handleSubmit = e => {
        e.preventDefault();

    }
    render() {
        const { email, orderId } = this.state;
        return (
            <div className='order-search'>
                    <h1 className='title'>Order Search</h1>

                    <form onSubmit={this.handleSubmit}>
                        <FormInput 
                            type='email'
                            name='email'
                            label='Email'
                            value={email}
                            handleChange={this.handleChange}
                            required
                        />

                        <FormInput 
                            type='text'
                            name='orderId'
                            label='Order Id'
                            value={orderId}
                            handleChange={this.handleChange}
                            required
                        />

                        <CustomButton type='submit'>Search Order</CustomButton>
                    </form>
                </div>
        )
     }    
}

export default OrderSearch;