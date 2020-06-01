import React from 'react';
import { ReactComponent as Logo } from '../../assets/crown.svg';

import { Link } from 'react-router-dom'
import { auth } from '../../firebase/firebase-utils'

import { connect } from 'react-redux';

import { createStructuredSelector } from 'reselect'
import { selectHidden, selectCartNotification } from '../../redux/cart/cart-selectors';
import { selectCurrentUser } from '../../redux/user/user-selector'

import CartIcon from '../cart-icon/cart-icon-component';
import CartDropDown from '../cart-dropdown/cart-dropdown-component';
import SimpleAlerts from '../cart-notification/cart-notification-component';

import './header-styles.scss';

const Header = ({ currentUser, hidden, cartNotification }) => (
    <div className='header'>

        {
            cartNotification 
            ? <SimpleAlerts />
            : null
        }

        <Link to='/'>< Logo className='logo-container' /></Link>
        

        <div className='options'>
            <Link className='option' to='/'>HOME </Link>
            <Link className='option' to='/shop'>SHOP </Link>
            <Link className='option' to='/ordersearch'>ORDERS </Link>
            <Link className='option' to='/contact'>CONTACT </Link>
            { currentUser  ?
             <div className='option' onClick={() =>auth.signOut()}>SIGN OUT </div> 
             :
             <Link className='option' to='/signin' >SIGN IN</Link>
          }
          <CartIcon />

        </div>
          {
              hidden ? null : <CartDropDown />
          }
    </div>
)

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
    hidden : selectHidden,
    cartNotification : selectCartNotification
})

export default connect(mapStateToProps)(Header);