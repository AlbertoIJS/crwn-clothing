import React, { useEffect } from 'react';
// React router
import { Switch, Route, Redirect } from 'react-router-dom';
// Redux connect
import { connect } from 'react-redux';
import { checkUserSession } from './redux/user/user.actions';
// Reselect
import { selectCurrentUser } from './redux/user/user.selectors';

import './App.css';

import HomePage from './pages/homepage/home-page.component';
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.component';
import SignInAndSignUpPage from './pages/sign-in-and-sign-out/sign-in-and-sign-out.component';
import CheckoutPage from './pages/checkout/checkout.component';
import { createStructuredSelector } from 'reselect';

const App = ({ checkUserSession, currentUser }) => {
  useEffect =
    (() => {
      checkUserSession();
    },
    [checkUserSession]);

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
            currentUser ? <Redirect to='/' /> : <SignInAndSignUpPage />
          }
        />
      </Switch>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
});

const mapDispatchToprops = dispatch => ({
  checkUserSession: () => dispatch(checkUserSession())
});

// Connects the App component with the user reducer
export default connect(
  mapStateToProps,
  mapDispatchToprops
)(App);
