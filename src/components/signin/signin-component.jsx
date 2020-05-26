import React, { Component } from 'react';
import FormInput from '../form-input/form-input-component';
import CustomButton from '../custom-button/custom-button-component';
import './signin-styles.scss';

class SignIn extends Component {
    constructor() {
        super();
        this.state = {
            email: '',
            password: ''
        }
    }

    handleSubmit = e => {
        e.preventDefault();
        this.setState({ email: '', password: ''}, () => console.log(this.state))
    }

    handleChange = e => {
        const { value, name } = e.target;
        this.setState({ [name] : value}, () => console.log(this.state, name))
    }

    render() {
        return (
            <div className='signin'>
                <h2>I already have an account</h2>
                <span>Please sign in with your email and password</span>
                <form onSubmit={this.handleSubmit}>
                    <FormInput 
                        type='email'
                        name='email' 
                        label='email'
                        value={this.state.email}
                        handleChange={this.handleChange}
                        required
                    />
                    
                    <FormInput 
                        type='password'
                        name='password'
                        label='password' 
                        value={this.state.password}
                        handleChange={this.handleChange}
                        required
                    />
                    <CustomButton type='submit'>
                        sign in
                    </CustomButton>
                </form>
            </div>
        )
    }
}

export default SignIn