import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import CustomButton from '../custom-button/custom-button.component';
import CartItem from '../cart-item/cart-item.component';
import { selectCartItems } from '../../redux/cart/cart.selectors';
import { toggleCartHidden } from '../../redux/cart/cart-actions';

import './cart-dropdown.styles.scss';

const CartDropDown = ({ cartItems, history, dispatch }) => (
  <section className='cart-dropdown'>
    <div className='cart-items'>
      {cartItems.length ? ( // Zero evaluates to false
        cartItems.map(cartItem => (
          <CartItem key={cartItems.id} item={cartItem} /> // If more than one item render item
        ))
      ) : (
        <span className='empty-message'>Your cart is empty</span> // Else show message
      )}
    </div>
    <CustomButton onClick={() => {
      history.push('/checkout');
      dispatch(toggleCartHidden());
      }}>GO TO CHECK OUT</CustomButton>
  </section>
);

// mapStateToProps(state, ownProps) => Object
const mapStateToProps = state => ({
  cartItems: selectCartItems(state)
});

// Connects a React component with a Redux Store
export default withRouter(connect(mapStateToProps)(CartDropDown));
