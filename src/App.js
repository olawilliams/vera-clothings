import React from 'react';
import { Route, Switch } from 'react-router-dom'

import { auth, createUserProfileDocument } from './firebase/firebase-utils'

import './App.css';

import HomePage from './pages/homepage/homepage-component';
import ShopPage from './pages/shop-page/shop-page-component';
import Header from './components/header/header-component';
import SignInAndSignUp from './pages/signin-and-signup-page/signin-and-signup-component';


class App extends React.Component {
  constructor() {
    super();
    
    this.state = {
      currentUser: null
    }
  }

  unsubscribefromAuth = null;

  componentDidMount() {
    this.unsubscribefromAuth = auth.onAuthStateChanged( async userAuth => {
      if(userAuth){
      const userRef = await createUserProfileDocument(userAuth)
    
        userRef.onSnapshot(snapShot => {
          
          this.setState({currentUser: {
            ...snapShot.data()
          }} )
        })
     }  else {
       this.setState({ currentUser: userAuth})
     }
      
    });  
  }

  componentWillUnmount() {
    this.unsubscribefromAuth()
  }

  render() {
   
    return (
      <div>
        <Header currentUser={this.state.currentUser} />
        <Switch>
          <Route exact path='/' component={HomePage}/>
          <Route exact path='/shop' component={ShopPage} />
          <Route exact path='/signin' component={SignInAndSignUp} />
          
        </Switch>
      </div>
    );
  }
}

export default App;
