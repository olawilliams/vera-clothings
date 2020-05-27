import React from 'react';

import SignIn from '../../components/signin/signin-component';
import SignUp from '../../components/signup/signup-component'

import './signin-and-signup-styles.scss';

const SignInAndSignUp = () => (
    <div className='signin-signup'>
        <SignIn />
        <SignUp />
    </div>
)

export default SignInAndSignUp;