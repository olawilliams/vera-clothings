import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom'

import { auth, createUserProfileDocument } from './firebase/firebase-utils'

import './App.css';

import { connect } from 'react-redux';
import { setCurrentUser } from './redux/user/user-actions'

import HomePage from './pages/homepage/homepage-component';
import ShopPage from './pages/shop-page/shop-page-component';
import Header from './components/header/header-component';
import SignInAndSignUp from './pages/signin-and-signup-page/signin-and-signup-component';


class App extends React.Component {

  unsubscribefromAuth = null;

  componentDidMount() {
    const { setCurrentUser } = this.props
    this.unsubscribefromAuth = auth.onAuthStateChanged( async userAuth => {
      if(userAuth){
      const userRef = await createUserProfileDocument(userAuth)
    
        userRef.onSnapshot(snapShot => {
          
         setCurrentUser({
           ...snapShot.data()
         })
        })
     }  else {
          setCurrentUser(userAuth)
     }
      
    });  
  }

  componentWillUnmount() {
    this.unsubscribefromAuth()
  }

  render() {
   const { currentUser } = this.props;
    return (
      <div>
        <Header  />
        <Switch>
          <Route exact path='/' component={HomePage}/>
          <Route exact path='/shop' component={ShopPage} />
          <Route exact path='/signin' render={ () => 
              currentUser ? 
              <Redirect to='/' /> : 
              <SignInAndSignUp />
            }  
          />
          
        </Switch>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
});

const mapStateToProps = ({ user }) => ({
  currentUser: user.currentUser
})

export default connect(
    mapStateToProps, 
    mapDispatchToProps)
    (App);
