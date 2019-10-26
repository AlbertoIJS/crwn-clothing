import React from 'react';
// React router
import { Link } from 'react-router-dom';
// Firebase auth
import { auth } from '../../firebase/firebase.utils';
// Redux
import { connect } from 'react-redux';

// Importing svg
import { ReactComponent as Logo } from '../../assets/crown.svg';
import './header.styles.scss';
// Shopping bag
import CartIcon from '../cart-icon/cart-icon.component';
// Shopping Dropdown
import CartDropDown from '../car-dropdown/car-dropdown.component';

const Header = ({ currentUser, hidden }) => (
  <header className='header'>
    <Link className='logo-container' to='/'>
      <Logo className='logo' />
    </Link>
    <div className='options'>
      <Link className='option' to='/shop'>
        SHOP
      </Link>
      <Link className='option' to='/shop'>
        CONTACT
      </Link>
      {
        currentUser ? 
        <div className="option" onClick={() => auth.signOut()}>SIGN OUT</div> 
        : <Link className='option' to='/signin'>SIGN IN</Link>
      }
      <CartIcon/>
    </div>
    {
      hidden ? null : <CartDropDown/>
    }
  </header>
);

const mapStateToProps = ({ user: { currentUser }, cart: { hidden }}) => ({
  currentUser,
  hidden
})

export default connect(mapStateToProps)(Header);