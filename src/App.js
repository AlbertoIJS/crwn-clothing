import React, { Component } from 'react';
// React router
import { Switch, Route, Redirect } from 'react-router-dom';
// Redux connect
import { connect } from 'react-redux';
import { setCurrentUser } from './redux/user/user.actions';
// Firebase
import { auth, createUserProfileDocument } from './firebase/firebase.utils';

import './App.css';

import HomePage from './pages/homepage/home-page.component';
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.component';
import SignInAndSignUpPage from './pages/sign-in-and-sign-out/sign-in-and-sign-out.component';
import CheckoutPage from './pages/checkout/checkout.component'



class App extends Component{  
  unsubscribeFromAuth = null;

  componentDidMount(){
    const {setCurrentUser} = this.props;

    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot => {
          this.props.setCurrentUser({
            currentUser: {
              id: snapShot.id,
              ...snapShot.data()
            }
          });
        }); 
      } else {setCurrentUser(userAuth)}      
    });
  };

  componentWillUnmount(){
    this.unsubscribeFromAuth();    
  };

  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/shop' component={ShopPage} />
          <Route exact path='/checkout' component={CheckoutPage} />
          <Route 
          path='/signin' 
          render={() => 
          this.props.currentUser ? 
          (<Redirect to='/'/>) :
          (<SignInAndSignUpPage/>)} />
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = ({ user }) => ({
  currentUser: user.currentUser
});

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
});

// Connects the App component with the user reducer
export default connect(mapStateToProps, mapDispatchToProps)(App);