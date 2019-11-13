import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import CartItem from '../cart-item/cart-item.component';
import { selectCartItems } from '../../redux/cart/cart.selectors';
import { toggleCartHidden } from '../../redux/cart/cart.actions';

import { createStructuredSelector } from 'reselect';
// Styled components
import {
  CartDropdownContainer,
  CartItemsContainer,
  EmptyMessage,
  CartDropdownButton
} from './cart-dropdown.styles';

const CartDropDown = ({ cartItems, history, dispatch }) => (
  <CartDropdownContainer>
    <CartItemsContainer>
      {cartItems.length ? ( // Zero evaluates to false
        cartItems.map(cartItem => (
          <CartItem key={cartItem.id} item={cartItem} /> // If more than one item render item
        ))
      ) : (
        <EmptyMessage>Your cart is empty</EmptyMessage> // Else show message
      )}
    </CartItemsContainer>
    <CartDropdownButton
      onClick={() => {
        history.push('/checkout');
        dispatch(toggleCartHidden());
      }}
    >
      GO TO CHECK OUT
    </CartDropdownButton>
  </CartDropdownContainer>
);

// mapStateToProps(state, ownProps) => Object
const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems
});

// Connects a React component with a Redux Store
export default withRouter(connect(mapStateToProps)(CartDropDown));
