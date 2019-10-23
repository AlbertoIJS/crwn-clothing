/*
  ACTIONS:
  1.- Describes what happend
  2.- It is a payload of information
*/

// Types of actions
import CartActionTypes from "./cart.types"

export const toggleCartHidden = () => ({
  type: CartActionTypes.TOGGLE_CART_HIDDEN
})

export const addItem = item => ({
  type: CartActionTypes.ADD_ITEM,
  payload: item
} )