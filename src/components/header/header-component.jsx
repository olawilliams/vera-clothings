import React from 'react';
import { ReactComponent as Logo } from '../../assets/crown.svg';
import { Link } from 'react-router-dom'
import { auth } from '../../firebase/firebase-utils'
import './header-styles.scss';

const Header = ({ currentUser }) => (
    <div className='header'>
        < Logo className='logo-container' />

        <div className='options'>
            <Link className='option' to='/'>HOME </Link>
            <Link className='option' to='/shop'>SHOP </Link>
            <Link className='option' to='/contact'>CONTACT </Link>
            { currentUser  ?
             <div className='option' onClick={() =>auth.signOut()}>SIGN OUT </div> 
             :
             <Link className='option' to='/signin' >SIGN IN</Link>
          }

        </div>
    </div>
)

export default Header;