import React from 'react';

import './signup-styles.scss';

import { auth, createUserProfileDocument } from '../../firebase/firebase-utils'

import FormInput from '../form-input/form-input-component';
import CustomButton from '../custom-button/custom-button-component';

class SignUp extends React.Component {
    constructor() {
        super();

        this.state = {
            displayName: '',
            email: '',
            password:'',
            confirmPassword: ''
        }
    }

    handleChange = e => {
        const {name, value }  = e.target;
        this.setState({ [name]: value})
    }

    handleSubmit = async e => {
        e.preventDefault();
        const {displayName, email, password, confirmPassword} = this.state;

        if(password !== confirmPassword) return;
        try {
            const {user} =  await auth.createUserWithEmailAndPassword(email, password)
            createUserProfileDocument(user, {displayName})

            this.setState({
                displayName: '',
                email: '',
                password:'',
                confirmPassword: ''
            })

        } catch(err) {
            if(err.code === "auth/weak-password"){
            console.log(err.message)}
        }
    }

    render() {
        const {displayName, email, password, confirmPassword} = this.state;
        return (
            <div className='signup'>
                <h2>Please Sign up with your email and password</h2>
                <form onSubmit={this.handleSubmit}>
                    <FormInput
                        type='text'
                        name='displayName'
                        label='displayName'
                        value={displayName}
                        handleChange={this.handleChange}
                        required
                    />
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
                    <FormInput
                        type='password'
                        name='confirmPassword'
                        label='confirm password'
                        value={confirmPassword}
                        handleChange={this.handleChange}
                        required
                    />
                    <CustomButton type='submit'>sign up</CustomButton>
                 </form>
            </div>
        )
    }
}

export default SignUp;