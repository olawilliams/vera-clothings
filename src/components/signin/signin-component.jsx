import React, { Component } from 'react';

import FormInput from '../form-input/form-input-component';
import CustomButton from '../custom-button/custom-button-component';

import { signInWithGoogle, auth } from '../../firebase/firebase-utils';

import './signin-styles.scss';

class SignIn extends Component {
    constructor() {
        super();
        this.state = {
            email: '',
            password: ''
        }
    }
    

    handleSubmit =  async e => {
        e.preventDefault();
        const { email, password } = this.state

        try {
            await auth.signInWithEmailAndPassword(email, password)
            this.setState({ email: '', password: ''})

        } catch(err) {
            if(err.code === "auth/wrong-password") {
                console.log(err.message)
            }
        }
    }

    handleChange = e => {
        const { value, name } = e.target;
        this.setState({ [name] : value})
    }

   

    render() {
        const { email, password } = this.state

        return (
            <div className='signin'>
                <h2>I already have an account</h2>
                <span>Please sign in with your email and password</span>
                <form onSubmit={this.handleSubmit}>
                    <FormInput 
                        type='email'
                        name='email' 
                        label='email'
                        value={email}
                        handleChange={this.handleChange}
                        required
                    />
                    
                    <FormInput 
                        type='password'
                        name='password'
                        label='password' 
                        value={password}
                        handleChange={this.handleChange}
                        required
                    />
                    <div className='buttons'>
                        <CustomButton type='submit'>
                            sign in
                        </CustomButton >
                        <CustomButton type='submit' onClick={signInWithGoogle} isGoogleSignIn>
                            sign in with google
                        </CustomButton>
                    </div>
                </form>
            </div>
        )
    }
}

export default SignIn